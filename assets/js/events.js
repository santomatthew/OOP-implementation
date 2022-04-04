let vehicleComponent = document.getElementById("vehicle");
let vehicleSelector = document.getElementById("vehicle-selector");
let vehicleEngine = document.getElementById("engine-btn");
let message = document.getElementById("message");
let banner = document.getElementById("banner");
let detail = document.getElementById("detail");

vehicleSelector.onchange = function () {
  vehicleEngine.style.display = "inline-block";
  try {
    let vehicle = Vehicle.list()[this.value];
    vehicle.build();
    vehicleEngine.removeEventListener("click", () => {});
    vehicleEngine.addEventListener("click", () => vehicle.startEngine());
  } catch (e) {
    showMessage("no vehicle selected");
    setBannerText("???");
    setDetailText("");
    vehicleComponent.style.display = "none";
    vehicleEngine.style.display = "none";
  }
  this.blur();
};

Vehicle.list().forEach((vehicle, index) => {
  let option = document.createElement("option");
  option.value = index;
  option.text = vehicle.name;
  vehicleSelector.appendChild(option);
});

function showMessage(messageText) {
  message.innerText = messageText;
  message.style.display = "block";
  setTimeout(() => {
    message.style.display = "none";
  }, 2000);
}

function setBannerText(bannerText) {
  banner.innerText = bannerText;
}

function setDetailText(detailText) {
  detail.innerText = detailText;
}
