const api = require('node-vk-bot-api/lib/api');
const { vk_application_token } = require('../configs');

class UserController {

    async getUserName(user_id) {
        const user = await api('users.get', {
            user_ids: user_id,
            access_token: vk_application_token,
        });

        if(user != undefined && user.response[0]) {
            return `${user.response[0].first_name} ${user.response[0].last_name}`
        }

        return 'Незнакомец';
    }

}

module.exports = new UserController();