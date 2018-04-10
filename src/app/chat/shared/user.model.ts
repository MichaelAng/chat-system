export class User {

    constructor(
        public name: string,
        public id?: number
    ) {
        this.name = name;
        this.id = id || 0;
    }
}
