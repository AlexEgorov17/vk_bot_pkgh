const SQL = require('./postgres/index.js');
const { Student } = require('./postgres/entities/schemas.js');

const dbType = 'postgres';
const dbHost = 'localhost';
const dbPort = '5433';
const dbUsername = 'stuyk';
const dbPassword = 'abc123';
const dbName = 'pkgh_bot';

global.database = new SQL(dbType, dbHost, dbPort, dbUsername, dbPassword, dbName, [
    Student
]);
