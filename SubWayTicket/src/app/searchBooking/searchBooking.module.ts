import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SearchBookingComponent } from './searchBooking.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [SearchBookingComponent],
    bootstrap: [SearchBookingComponent]
})
export class SearchBookingModule { }