const userRoles = {
  alice: 'Admin',
  bob: 'Editor',
  charlie: 'Subscriber'
};

for (const [name, role] of Object.entries(userRoles)) {
  console.log(`${name} is an ${role}`);
}

const fruits = ['apple', 'banana', 'orange'];

for (const [index, fruit] of fruits.entries()) {
  console.log(`Index ${index}: ${fruit}`);
}
