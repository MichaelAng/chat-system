import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { BackendService } from './backend.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        NotFoundComponent,
    ],
    providers: [
        BackendService
    ]
})
export class CoreModule { }
