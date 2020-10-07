/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */

// prototype based programming
// prototype based inheritance

const ElectricalDevice = {
  id: "dev-0001",
  isOn: false,

  turnOn() {
    this.isOn = true;
    this.printStatus();
  },

  turnOff() {
    this.isOn = false;
    this.printStatus();
  },

  printStatus() {
    console.log(`Device ${this.id} is ${this.isOn ? "on" : "off"}`);
  },
};

ElectricalDevice.printStatus();
ElectricalDevice.turnOn();

console.log(ElectricalDevice);
console.log(typeof ElectricalDevice);

// [[Prototype]]
// __proto__
// Object.getPrototypeOf()/Object.setPrototypeOf()

console.log(ElectricalDevice.__proto__);

const Computer = {
  monitor: [{}],
  keyboard: {},
  mouse: {},
};

console.log(`Without prototype id: ${Computer.id}`);

Computer.__proto__ = ElectricalDevice;

console.log(`With prototype id: ${Computer.id}`);

console.log(`ED id: ${ElectricalDevice.id}`);
console.log(`Computer id: ${Computer.id}`);

Computer.id = "dev-0002";

console.log(`ED id: ${ElectricalDevice.id}`);
console.log(`Computer id: ${Computer.id}`);

const Radio = {
  isStereo: false,
  __proto__: ElectricalDevice,
};

Radio.id = "dev-0003";

console.log(`Radio id: ${Radio.id}`);
console.log(`Computer id: ${Computer.id}`);
console.log(`ED id: ${ElectricalDevice.id}`);

console.log(Radio.isOn);
Radio.printStatus();
Radio.turnOn();
Radio.printStatus();
Radio.turnOff();

console.log(`================================================`);

const Fridge = {
  hasFreezer: false,
  __proto__: ElectricalDevice,
};

console.log(Object.keys(Fridge));
console.log(Object.getPrototypeOf(Fridge));

console.log(`================================================`);

const Conditioner = Object.create(ElectricalDevice);

console.log(Object.keys(Conditioner));
console.log(Object.getPrototypeOf(Conditioner));

function createElectricalDevice(id) {
  return {
    id,
    isOn: false,

    turnOn() {
      this.isOn = true;
      this.printStatus();
    },

    turnOff() {
      this.isOn = false;
      this.printStatus();
    },

    printStatus() {
      console.log(`Device ${this.id} is ${this.isOn ? "on" : "off"}`);
    },
  };
}

function createComputer(id) {
  const object = {
    monitor: [{}],
    keyboard: {},
    mouse: {},
  };
  Object.setPrototypeOf(object, createElectricalDevice(id));

  return object;
}

function createComputer2(id) {
  const object = Object.create(createElectricalDevice(id));
  object.monitor = [{}];
  object.keyboard = {};
  object.mouse = {};

  return object;
}

const comp = createComputer2("comp-0001");
console.log(comp);
console.log(comp.__proto__);

console.log(Object.keys(comp));

console.log(`Before turn on`);

for (const key in comp) {
  if (comp.hasOwnProperty(key)) {
    console.log(`Is own property: ${key}`);
  } else {
    console.log(`Is prototype property: ${key}`);
  }
}

console.log(`After turn on`);

comp.turnOn();

for (const key in comp) {
  if (comp.hasOwnProperty(key)) {
    console.log(`Is own property: ${key}`);
  } else {
    console.log(`Is prototype property: ${key}`);
  }
}
