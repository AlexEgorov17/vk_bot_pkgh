const DataPkgh = require('get-data-pkgh');
const pkgh = new DataPkgh();

class ScheduleController {
    
    /* Список групп */
    groups = [];

    constructor() {
        this.getData();
    }

    async getData() {
        let groups = await pkgh.getSchedule();
        this.groups = groups.toArray();
        console.log(this.getGroupByName('ИП-19-7к'))
    }

    getGroupByName(groupName) {
        if(groupName === undefined) return;
        return this.groups.find(group => group.name === groupName);
    }

}

module.exports = new ScheduleController();