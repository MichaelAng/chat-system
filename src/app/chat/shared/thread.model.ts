import { Message } from './message.model';
import { User } from './user.model';

export class Thread {

    constructor(
        public messages: Array<Message>,
        public user: User
    ) {
        this.messages = messages;
        this.user = user;
    }
}
