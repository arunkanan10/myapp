import 'dotenv/config';
import App from './app';
import PostController from './posts/post.controller';
import UserController from './users/user.controller';
import { sequelize } from './helpers/sequelize.config';

const constrollers = [new PostController(), new UserController()];
const app = new App(constrollers);

sequelize.setConnection().then((success) => {
    console.log(success);
    app.listen();
}).catch((error) => {
    console.log(error);
});
