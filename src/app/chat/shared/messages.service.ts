import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Message } from '.';

import { scan, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class MessagesService {
    initialMessage: Array<Message> = [];
    messages$: Subject<Array<Message>> = new Subject();

    constructor() { }

    getMessages(): Observable<Array<Message>> {
        return this.messages$.pipe(
            scan((acc, curr) => acc.concat(curr), this.initialMessage),
            tap(data => console.log(data))
        );
    }

    addMessage(message: Message): void {
        this.messages$.next([message])
    }


}
