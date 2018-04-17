import { Component, OnInit } from '@angular/core';
import { User } from './shared/user.model';

@Component({
    selector: 'cs-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
    laura = new User('Laura', 0);
    rob = new User('Rob', 0);

    constructor() {}

    ngOnInit() {

    }
}
