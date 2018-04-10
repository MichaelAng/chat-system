import { User } from './user.model';

export class Message {
    time: Date;
    constructor(
        public message: string,
        public user: User,
        public id?: number,
    ) {
        this.message = message;
        this.user = user;
        this.time = new Date();
        this.id = id || 0;
    }
}
