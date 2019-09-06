import * as express from 'express';
import Post from './post.interface';

class PostController {
    public path = '/posts';
    public router = express.Router();

    private posts: Post[] = [
        {
            author: 'Arun K',
            title: 'Node JS',
            content: 'Test C'
        }
    ];

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(this.path, this.getAllPosts);
        this.router.post(this.path, this.createApost);
    }

    private getAllPosts = (request: express.Request, response: express.Response) => {
        console.log ('######## getAllPosts invoked 1 :: ');
        response.send(this.posts);
    }

    private createApost = (request: express.Request, response: express.Response) => {
        console.log ('######## createApost invoked 2 :: ', request.body);
        const post: Post = request.body;
        this.posts.push(post);
        response.send(this.posts);
    }
}

export default PostController;
