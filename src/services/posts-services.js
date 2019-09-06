export default class PostsService {

    _apiBase = 'https://jsonplaceholder.typicode.com';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    }

    async getPosts() {
        const res = await this.getResource(`/posts/`);
        return res;
    }

    async getUsers() {
        const res = await this.getResource(`/users/`);
        return res;
    }

    async getComments() {
        const res = await this.getResource(`/posts/{postId}/comments/`);
        return res;
    }


}