// deklarasikan class kamu disini ...

class Car extends Vehicle {
  constructor(props) {
    super(props);
  }
}

class Sedan extends Car {
  constructor() {
    super({
      body: "./assets/img/oop-car-sedan.png",
      name: "sedan",
      speed: 100,
    });
  }
  static buy() {
    return new Sedan();
  }
}

Vehicle.add(Sedan.buy());

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
