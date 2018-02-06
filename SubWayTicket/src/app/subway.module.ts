import { NgModule}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SubWayComponent } from './subway.component';
import { TranslateModule } from 'ng2-translate';
import { IntegerOnlyDirective } from './integer.directive';
import { RouterModule, Routes } from '@angular/router';
import { SearchSeduleComponent } from './searchSedule/searchSedule.component';
import { SearchBookingComponent } from './searchBooking/searchBooking.component';
import { CancelBookingComponent } from './cancelBooking/cancelBooking.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
    {path: 'searchSedule', component: SearchSeduleComponent }
];

@NgModule({
    imports: [BrowserModule, FormsModule, TranslateModule.forRoot(), RouterModule.forRoot(appRoutes), BrowserAnimationsModule],
    declarations: [SubWayComponent, IntegerOnlyDirective, SearchSeduleComponent, SearchBookingComponent, CancelBookingComponent],
    bootstrap:    [SubWayComponent]
})
export class SubWayModule { }
