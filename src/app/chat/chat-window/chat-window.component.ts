import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/Observable/of';
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";

import { MessagesService } from '../shared/messages.service';
import { Message, User } from '../shared';

@Component({
    selector: 'cs-chat-window',
    templateUrl: './chat-window.component.html',
    styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {
    @Input() user: User = new User('', 0);
    messages: Observable<Array<Message>>;
    keyUp = new Subject<any>();
    input: FormControl = new FormControl('');
    isTyping: any;

    constructor(
        private messagesService: MessagesService
    ) { }

    ngOnInit() {
        this.messages = this.messagesService.getMessages();

        this.messagesService.getIsTyping()
            .filter(isTypingObj => isTypingObj.user.name !== this.user.name)
            .map(isTypingObj=> isTypingObj.status)
            .subscribe(status => this.isTyping = status);


        this.keyUp
            .filter(event => event.key === 'Enter')
            .map(event => event.target.value)
            .debounceTime(100)
            .subscribe(message => this.sendMessage(message));

        this.keyUp
            .map(event => {
                console.log(event);
                return event.target.value
            })
            .subscribe(message => {
                this.messagesService.sendIsTyping(message !== '', this.user)
            });
    }

    sendMessage(message: string) {
        this.input.reset();
        this.keyUp.next({ target: {value: ''} });
        this.messagesService.sendMessage(new Message(message, this.user))
    }

}
