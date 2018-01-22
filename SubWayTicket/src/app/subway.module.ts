import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SubWayComponent } from './subway.component';
import { TranslateModule } from 'ng2-translate';
import { IntegerOnlyDirective } from './integer.directive';
import { RouterModule, Routes } from '@angular/router';
import { SearchSeduleComponent } from './searchSedule/searchSedule.component';

const appRoutes: Routes = [
    {path: 'searchSedule', component: SearchSeduleComponent }
];

@NgModule({
    imports: [BrowserModule, FormsModule, TranslateModule.forRoot(), RouterModule.forRoot(appRoutes)],
    declarations: [SubWayComponent, IntegerOnlyDirective, SearchSeduleComponent],
    bootstrap:    [SubWayComponent]
})
export class SubWayModule { }
