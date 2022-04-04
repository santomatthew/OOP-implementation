// deklarasikan class kamu disini ...

class Car extends Vehicle {
  constructor(props) {
    super(props);
    if (this.constructor === Car) {
      throw new Error("Can't instantiate from abstract class");
    }
  }
}

const Dealer = (Base) =>
  class extends Base {
    static buy() {
      return new this();
    }
  };

class Sedan extends Dealer(Car) {
  constructor() {
    super({
      name: "Sedan",
      speed: 20,
      body: "assets/img/oop-car-sedan.png",
    });
  }
}
class Van extends Dealer(Car) {
  constructor() {
    super({ name: "Van", speed: 20, body: "assets/img/oop-car-van.png" });
  }
}
class Bus extends Dealer(Car) {
  constructor() {
    super({ name: "Bus", speed: 20, body: "assets/img/oop-car-bus.png" });
  }
}

class Truck extends Dealer(Car) {
  constructor() {
    super({
      name: "Truck",
      speed: 10,
      body: "https://www.pngkit.com/png/full/951-9518825_indian-food-truck-mack-truck-side-view.png",
    });
    this.position = 0;
  }

  moveForward() {
    super.moveForward();
    this.position += this.speed;
    setDetailText(this.info());
  }

  moveBackward() {
    super.moveBackward();
    this.position += this.speed;
    setDetailText(this.info());
  }

  info() {
    return `
    ~ VEHICLE DETAIL ~
    Name: ${this.name}
    Max Speed: ${this.speed} kmph
    Jarak Tempuh : ${this.position} km
    ------------------
    `;
  }
}

class MotorCycle extends Vehicle {
  constructor(props) {
    super(props);
  }

  moveBackward() {
    // this.stopEngine();
    super.stop();
  }
}

class MotorChopper extends Dealer(MotorCycle) {
  constructor() {
    super({
      name: "Motor Chopper",
      speed: 30,
      body: "assets/img/oop-motorcycle-chopper.png",
    });
  }
}
class MotorCross extends Dealer(MotorCycle) {
  constructor() {
    super({
      name: "Motor Cross",
      speed: 35,
      body: "assets/img/oop-motorcycle-cross.png",
    });
  }
}
class MotorSport extends Dealer(MotorCycle) {
  constructor() {
    super({
      name: "Motor Sport",
      speed: 40,
      body: "assets/img/oop-motorcycle-sport.png",
    });
  }
}

class Bicycle extends Dealer(MotorCycle) {
  constructor() {
    super({
      name: "Bicycle",
      speed: 10,
      body: "assets/img/oop-bicycle.png",
    });
  }
  build() {
    super.build();
    super.startEngine();
  }
}

Vehicle.add(Sedan.buy());
Vehicle.add(Van.buy());
Vehicle.add(Bus.buy());
Vehicle.add(MotorChopper.buy());
Vehicle.add(MotorCross.buy());
Vehicle.add(MotorSport.buy());
Vehicle.add(Bicycle.buy());
Vehicle.add(Truck.buy());
// const kendaraan = [
//   Sedan,
//   Van,
//   Bus,
//   Truck,
//   MotorChopper,
//   MotorCross,
//   MotorSport,
//   Bicycle,
// ];

// for (let i = 0; i < kendaraan.length; i++) {
//   Vehicle.add(kendaraan[i].buy());
// }

// setelah kamu membuat class diatas,
// masukkan kendaraan-kendaraan barumu ke garasi dengan cara berikut
/* 

Vehicle.add(Sedan.buy())
Vehicle.add(Van.buy()) 
Vehicle.add(Bus.buy())
Vehicle.add(MotorChopper.buy())
Vehicle.add(MotorCross.buy())
Vehicle.add(MotorSport.buy())
Vehicle.add(Bicycle.buy())

*/
