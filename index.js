const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

let numArr = [1, 2, 3, 4, 5];
let srtArr = ['hello', 'world', 'javascript', 'node'];
let nameArr = ['Rahul', 'Sita', 'Amit', 'Vikram'];
let employees = [
  { employeeID: 1, name: 'Amit' },
  { employeeID: 2, name: 'Sita' },
  { employeeID: 3, name: 'Rahul' },
];
let user = [
  { username: 'amit223', name: 'Amit', score: 89 },
  { username: 'sita456', name: 'Sita', score: 90 },
  { username: 'rahul123', name: 'Rahul', score: 99 },
];

let contacts = [
  { phoneNumber: 786564, name: 'Shiv', address: '213 St' },
  { phoneNumber: 1234567890, name: 'Rahul', address: '123 Street, City' },
  { phoneNumber: 6553452365, name: 'Gita', address: '211 St' },
];

function addToArr(arr, item) {
  arr.push(item);
  return arr;
}

function sumNumArr(numArr) {
  let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    sum += numArr[i];
  }
  return sum;
}

function findMax(numArr) {
  let max = 0;
  for (let i = 0; i < numArr.length; i++) {
    if (max < numArr[i]) {
      max = numArr[i];
    }
  }
  return max;
}

function findNumber(numArr, number) {
  let result = numArr.find((ele) => ele === number);
  return result;
}

function findName(nameArr, name) {
  let result = nameArr.find((ele) => ele === name);
  return result;
}

function findEmployee(employees, empid) {
  let result = employees.find((ele) => ele.employeeID === empid);
  return result;
}

function findUser(user, username) {
  let result = user.find((ele) => ele.username === username);
  return result;
}

function findContact(contacts, phoneNumber) {
  let result = contacts.find((ele) => ele.phoneNumber === phoneNumber);
  return result;
}

app.get('/numbers/add', (req, res) => {
  let result = addToArr(numArr, 6);
  res.json(result);
});

app.get('/strings/add', (req, res) => {
  let result = addToArr(srtArr, 'express');
  res.json(result);
});

app.get('/numbers/sum', (req, res) => {
  let result = sumNumArr(numArr);
  res.json({ sum: result });
});

app.get('/numbers/max', (req, res) => {
  let result = findMax(numArr);
  res.json({ max: result });
});

app.get('/numbers/find/:number', (req, res) => {
  let number = parseInt(req.params.number);
  let result = findNumber(numArr, number);
  res.json(result);
});

app.get('/names/find/:name', (req, res) => {
  let name = req.params.name;
  let result = findName(nameArr, name);
  res.json(result);
});

app.get('/employees/find/:empid', (req, res) => {
  let empid = parseInt(req.params.empid);
  let result = findEmployee(employees, empid);
  res.json(result);
});

app.get('/users/find/:username', (req, res) => {
  let username = req.params.username;
  let result = findUser(user, username);
  res.json(result);
});

app.get('/contacts/find/:phoneNumber', (req, res) => {
  let phoneNumber = parseInt(req.params.phoneNumber);
  let result = findContact(contacts, phoneNumber);
  res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
