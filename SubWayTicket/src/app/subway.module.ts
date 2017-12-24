import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SubWayComponent } from './subway.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [SubWayComponent ],
  bootstrap:    [SubWayComponent ]
})
export class SubWayModule { }
