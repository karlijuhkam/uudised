export class News {
    id: number;
    title: string;
    author: string;
    photoUrl: string;
    content: string;
    category: string;
    tags: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}
