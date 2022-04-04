class Vehicle {
  #component = document.getElementById("vehicle");

  #stopped = true;

  #moveTo = "";

  speed = 10;

  static #vehicleList = [];

  constructor(props) {
    if (this.constructor === Vehicle) {
      throw new Error("Cannot create new instance from an abstract class");
    }
    let { name, speed, body } = props;
    this.name = name;
    this.body = body;
    if (typeof speed === "number") {
      this.speed = speed;
    }
  }

  // 1px = 1km
  getPosition() {
    return parseFloat(this.#component.style.left.replace(/px|%/g, ""));
  }

  // stop vehicle
  stop() {
    this.#stopped = true;
    this.#moveTo = "";
  }

  // move forward
  moveForward() {
    if (this.#moveTo === "backward") {
      this.stop();
      return;
    }
    this.#stopped = false;
    this.#moveTo = "forward";

    let position = this.getPosition() + this.speed;
    let maxForward = window.innerWidth - this.#component.offsetWidth;
    if (position >= maxForward) {
      position = maxForward;
      this.stop();
    }
    this.#component.style.left = position + "px";
    setTimeout(() => {
      if (!this.#stopped) this.moveForward();
    }, 100);
  }

  // move backward
  moveBackward() {
    if (this.#moveTo === "forward") {
      this.stop();
      return;
    }
    this.#stopped = false;
    this.#moveTo = "backward";

    let position = this.getPosition() - this.speed;
    if (position < 1) {
      position = 0;
      this.stop();
    }
    this.#component.style.left = position + "px";
    setTimeout(() => {
      if (!this.#stopped) this.moveBackward();
    }, 100);
  }

  #onEngineStarted = (e) => {
    console.log(this.name);
    switch (e.keyCode) {
      case 39:
        this.moveForward();
        break;
      case 37:
        this.moveBackward();
        break;
      case 32:
        this.stop();
        break;
    }
  };

  // start engine
  startEngine() {
    $(document).off("keydown");
    showMessage("Engine started...");
    $(document).on("keydown", this.#onEngineStarted);
  }

  // stop engine
  stopEngine() {
    showMessage("Engine stopped...");
    $(document).off("keydown");
  }

  info() {
    return `
        ~ VEHICLE DETAIL ~
        Name: ${this.name}
        Max Speed: ${this.speed} kmph
        ------------------

        `;
  }

  // build engine
  build() {
    this.#component.style.backgroundImage = `url(${this.body})`;
    this.#component.style.left = 0;
    this.#component.style.display = "block";
    setBannerText(this.name);
    setDetailText(this.info());
    this.stopEngine();
    this.stop();
  }

  static add(vehicle) {
    if (vehicle instanceof Vehicle) {
      Vehicle.#vehicleList.push(vehicle);
    } else {
      throw new Error(`Vehicle.add() only allow Vehicle as param`);
    }
  }

  static list() {
    return Vehicle.#vehicleList;
  }
}
