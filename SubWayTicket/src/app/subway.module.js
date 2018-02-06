"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var subway_component_1 = require("./subway.component");
var ng2_translate_1 = require("ng2-translate");
var integer_directive_1 = require("./integer.directive");
var router_1 = require("@angular/router");
var searchSedule_component_1 = require("./searchSedule/searchSedule.component");
var searchBooking_component_1 = require("./searchBooking/searchBooking.component");
var cancelBooking_component_1 = require("./cancelBooking/cancelBooking.component");
var animations_1 = require("@angular/platform-browser/animations");
var appRoutes = [
    { path: 'searchSedule', component: searchSedule_component_1.SearchSeduleComponent }
];
var SubWayModule = (function () {
    function SubWayModule() {
    }
    SubWayModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, ng2_translate_1.TranslateModule.forRoot(), router_1.RouterModule.forRoot(appRoutes), animations_1.BrowserAnimationsModule],
            declarations: [subway_component_1.SubWayComponent, integer_directive_1.IntegerOnlyDirective, searchSedule_component_1.SearchSeduleComponent, searchBooking_component_1.SearchBookingComponent, cancelBooking_component_1.CancelBookingComponent],
            bootstrap: [subway_component_1.SubWayComponent]
        })
    ], SubWayModule);
    return SubWayModule;
}());
exports.SubWayModule = SubWayModule;
//# sourceMappingURL=subway.module.js.map