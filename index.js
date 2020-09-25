/* eslint-disable max-classes-per-file */
/* eslint-disable no-console */

class ElectricalDevice {
  constructor(id) {
    this.id = id;
    this.isOn = false;
  }

  turnOn() {
    this.isOn = true;
    this.printStatus();
  }

  turnOff() {
    this.isOn = false;
    this.printStatus();
  }

  printStatus() {
    console.log(`Device ${this.id} is ${this.isOn ? "on" : "off"}`);
  }
}

class Computer extends ElectricalDevice {
  constructor(id) {
    super(id);
    this.monitors = [];
    this.keyboard = {};
    this.mouse = {};
  }
}

const ed = new ElectricalDevice("dev-001");

console.log(ed);

const comp = new Computer("comp-001");

console.log(comp);
console.log(Object.getPrototypeOf(comp));

comp.turnOn();
comp.turnOff();
