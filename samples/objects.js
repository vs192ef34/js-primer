/* eslint-disable no-console */

const SortOrder = {
  Asc: -1,
  Desc: 1,
};

const Gender = {
  Male: 1,
  Female: 2,
};

const createPerson = (fn, ln, mn, bd, g) => ({
  firstName: fn,
  lastName: ln,
  middleName: mn,
  birthDate: bd,
  phones: [],
  addresses: [],
  gender: g,
  age() {
    const today = new Date();
    return today.getFullYear() - this.birthDate.getFullYear();
  },
});

const generatePeople = () => {
  return [
    createPerson(
      "aaaa-fn",
      "aaaa-ln",
      "aaaa-mn",
      new Date(2010, 0, 10),
      Gender.Male
    ),
    createPerson(
      "bbbb-fn",
      "bbbb-ln",
      "bbbb-mn",
      new Date(1991, 1, 11),
      Gender.Female
    ),
    createPerson(
      "cccc-fn",
      "cccc-ln",
      "cccc-mn",
      new Date(1992, 2, 12),
      Gender.Male
    ),
    createPerson(
      "dddd-fn",
      "dddd-ln",
      "dddd-mn",
      new Date(1993, 3, 13),
      Gender.Female
    ),
    createPerson(
      "eeee-fn",
      "eeee-ln",
      "eeee-mn",
      new Date(1994, 4, 14),
      Gender.Male
    ),
    createPerson(
      "ffff-fn",
      "ffff-ln",
      "ffff-mn",
      new Date(1940, 5, 15),
      Gender.Female
    ),
  ];
};

const comparePerson = (a, b) => {
  if (a.firstName === b.firstName) {
    if (a.middleName === b.middleName) {
      return a.lastName <= b.lastName ? -1 : 1;
    }

    return a.middleName < b.middleName ? -1 : 1;
  }

  return a.firstName < b.firstName ? -1 : 1;
};

const compPeople = (p1, p2) => {
  const a = p1.age();
  const b = p2.age();

  if (a === b) return 0;
  if (a < b) return 1;
  if (a > b) return -1;
};

const sortArray = (a, compare, direction = SortOrder.Asc) => {
  for (let i = 0; i < a.length - 1; i += 1) {
    for (let j = 0; j < a.length - 1 - i; j += 1) {
      if (compare(a[j], a[j + 1]) === direction) {
        const t = a[j];
        a[j] = a[j + 1];
        a[j + 1] = t;
      }
    }
  }
};

const getEdgeValue = (a, compare, direction = SortOrder.Asc) => {
  let max = a[0];
  for (let i = 1; i < a.length; i += 1) {
    if (compare(max, a[i]) === direction) {
      max = a[i];
    }
  }
  return max;
};

const people = generatePeople();

// sortArray(people, compPeople, SortOrder.Asc);

// console.log(people);

// const val = getEdgeValue(people, compPeople, SortOrder.Desc).age();

// console.log(val);

people.sort((a, b) => {
  const aAge = a.age();
  const bAge = b.age();

  if (aAge < bAge) return -1;
  if (aAge > bAge) return 1;

  return 0;
});

console.log(people);

let max = people[0];

people.forEach((person) => {
  max = max.age() > person.age() ? person : max;
});

console.log(max);

const sum = people.reduce((acc, person) => {
  return acc + person.age();
}, 0);

console.log(sum);

const rMax = people
  .filter((person) => person.gender === Gender.Female)
  .reduce(
    (acc, person) => {
      return acc.age() > person.age() ? person : acc;
    },
    people.find((person) => person.gender === Gender.Female)
  );

console.log(rMax.age());
