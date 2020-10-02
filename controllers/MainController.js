const Markup = require('node-vk-bot-api/lib/markup');
const UserController = require('./UserController');
const { welcome_message, keyboard_authorized, keyboard_unauthorized } = require('../configs/messages');

class MainController {

    async start(ctx) {
        const user_name = await UserController.getUserName(ctx.message.user_id)
        const message = `Привет, ${user_name}!\n\n${welcome_message}`

        database.selectData('Students', ['id', 'group'], res => {
            try {
                ctx.reply(message, null, Markup
                    .keyboard(res && res.length ? keyboard_authorized : keyboard_unauthorized)
                    .oneTime(),
                );    
            }catch(e) {
                console.error(e)
            }
        })
    }
}

module.exports = new MainController()