import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { scan, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BackendService {
    messages$: Subject<any> = new Subject();

    constructor() { }

    getMessages(): Observable<any> {
        return this.messages$;
    }

    addMessage(message: any): void {
        this.messages$.next(message);
    }


}
