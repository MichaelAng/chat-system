import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../shared/messages.service';
import { Message, User } from '../shared';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'cs-chat-window',
    templateUrl: './chat-window.component.html',
    styleUrls: ['./chat-window.component.scss'],
    providers: [MessagesService]
})
export class ChatWindowComponent implements OnInit {
    messages: Observable<Array<Message>>;
    constructor(
        private messagesService: MessagesService
    ) { }

    ngOnInit() {
        this.messages = this.messagesService.getMessages();
        // this.messagesService.getMessages().subscribe(
        //     data => console.log(data)
        // )
    }

    addMessage() {
        const user = new User('Michael', 0)
        this.messagesService.addMessage(new Message('Hello', user, 0));
    }

}
