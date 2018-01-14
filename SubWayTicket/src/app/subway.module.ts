import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SubWayComponent } from './subway.component';
import { TranslateModule } from 'ng2-translate';
import { IntegerOnlyDirective } from './integer.directive';

@NgModule({
    imports: [BrowserModule, FormsModule, TranslateModule.forRoot()],
    declarations: [SubWayComponent, IntegerOnlyDirective],
    bootstrap:    [SubWayComponent]
})
export class SubWayModule { }
