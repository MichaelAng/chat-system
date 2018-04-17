import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import "rxjs/add/operator/delay";

import { scan, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BackendService {
    messages$: Subject<any> = new Subject();
    isTyping$: Subject<any> = new Subject();

    constructor() { }

    getMessages(): Observable<any> {
        return this.messages$;
    }

    addMessage(message: any): void {
        this.messages$.next(message);
    }

    setIsTyping(status, user) {
        this.isTyping$.next({status: status, user: user});
    }

    getIsTyping() {
        return this.isTyping$;
    }

}
