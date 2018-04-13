import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../shared/messages.service';
import { Message, User } from '../shared';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'cs-chat-window',
    templateUrl: './chat-window.component.html',
    styleUrls: ['./chat-window.component.scss'],
    // providers: [MessagesService]
})
export class ChatWindowComponent implements OnInit {
    messages: Observable<Array<Message>>;
    constructor(
        private messagesService: MessagesService
    ) { }

    ngOnInit() {
        this.messages = this.messagesService.getMessages();
    }

    addMessage() {
        const user = new User('Michael', 0)
        this.messagesService.sendMessage(new Message('Hello', user, 0));
    }

}
