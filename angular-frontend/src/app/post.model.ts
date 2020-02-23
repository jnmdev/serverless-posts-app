export class Post {
    title: string = '';
    body: string = '';
    id: string;
    userId: string;
    likes: number = 0;
    createdAt: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
