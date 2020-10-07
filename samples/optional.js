/* eslint-disable no-console */

const user = {};

if (user && user.address && user.address.street) {
  console.log(user.address.street);
} else {
  console.log(`no user info`);
}

const userStreet =
  user && user.address && user.address.street
    ? user.address.street
    : "undefined";

console.log(userStreet);

console.log(user?.address?.street);

console.log(`THE END`);

const user1 = {
  firstName: "Test",

  greet() {
    console.log(`Hi, i am user 1`);
  },
};

user.greet?.();
user1.greet?.();

console.log(user?.["firstName"]);
console.log(user1?.["firstName"]);

console.log(user?.["firstName"]?.something?.not?.existing);
console.log(user1?.["firstName"]?.something?.not?.existing);

delete user?.firstName;

// user?.address?.street = "test";
// user.address.street = "test";
