import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { MessagesService } from './shared/messages.service';

@NgModule({
    imports: [
        CommonModule,
        // ChatRoutingModule
    ],
    declarations: [
        ChatComponent,
        ChatWindowComponent
    ],
    providers: [MessagesService]
})
export class ChatModule { }
