const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-generator');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/employee');
const Intern = require('./lib/supervisor');
const employees = [];


