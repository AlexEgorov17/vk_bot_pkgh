const orm = require('typeorm') 

module.exports.Student = new orm.EntitySchema({
    name: 'Students',
    columns: {
        id: {
            type: 'int',
            primary: true
        },
        group: {
            type: 'varchar'
        }
    }
});