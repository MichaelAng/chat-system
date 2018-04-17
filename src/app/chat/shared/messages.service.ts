import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Message, User } from '.';

import { scan, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { BackendService } from '../../core/backend.service';


@Injectable()
export class MessagesService {
    initialMessage: Array<Message> = [];
    messages$: Subject<Array<Message>> = new Subject();
    isTyping$: Subject<any> = new Subject();

    constructor(
        private backendService: BackendService
    ) {
        this.backendService.getMessages()
            .subscribe(data => this.addMessage(data));

        this.backendService.getIsTyping()
            .subscribe(data => this.setIsTyping(data));
    }

    getMessages(): Observable<Array<Message>> {
        return this.messages$
            .pipe(scan((acc, curr) => acc.concat(curr), this.initialMessage));
    }

    addMessage(message: Message): void {
        this.messages$.next([message]);
    }

    sendMessage(message) {
        this.backendService.addMessage([message])
    }

    getIsTyping() {
        return this.isTyping$;
    }

    setIsTyping(isTypingObj) {
        this.isTyping$.next(isTypingObj);
    }

    sendIsTyping(status: boolean, user: User) {
        this.backendService.setIsTyping(status, user);
    }

}
