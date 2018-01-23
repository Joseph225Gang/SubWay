import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CancelBookingComponent } from './cancelBooking.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [CancelBookingComponent],
    bootstrap: [CancelBookingComponent]
})
export class CancelBookingModule { }