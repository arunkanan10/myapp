import * as express from 'express';
import User from './user.interface';
import UserManager from './user.manager';

class UserController {

    private path: string = '/users';
    private router = express.Router();
    private userManager: UserManager;

    constructor() {
        this.userManager = new UserManager();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(this.path, this.getAllUsers);
        this.router.get(this.path + '/all', this.getUsers);
        this.router.post(this.path, this.createUser);
    }

    private getAllUsers = async (request: express.Request, response: express.Response, next: express.NextFunction) => {

        console.log('Ctrl - getAllUsers invoked');
        let users = await this.userManager.getAllUsers(request, response);
        console.log('Respond back from Ctrl. Bye');
        response.send(users);
    }

    private getUsers = (request: express.Request, response: express.Response, next: express.NextFunction) => {

        console.log('Ctrl - getUsers Invoked');
        this.userManager.getAllUsers(request, response).then(res => {
            setTimeout(this.myFunc, 3 * 1000, response, res);
        });
        console.log('Ctrl - getUsers Completed');
    }

    private myFunc(response, res) {
        console.log('Respond back from Ctrl. Bye');
        response.send(res);
    }

    private createUser = async (request: express.Request, response: express.Response) => {
        let res = await this.userManager.createAUser(request, response);
        response.send(res);
    }
}

export default UserController;
