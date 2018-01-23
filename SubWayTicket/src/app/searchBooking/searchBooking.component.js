"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var searchBooking_service_1 = require("./searchBooking.service");
var SearchBookingComponent = (function () {
    function SearchBookingComponent() {
        this.Status = searchBooking_service_1.Status;
        this.status = searchBooking_service_1.Status.Search;
    }
    SearchBookingComponent.prototype.ngAfterViewInit = function () {
    };
    SearchBookingComponent.prototype.goToStatusResult = function () {
        this.status = searchBooking_service_1.Status.Result;
    };
    SearchBookingComponent = __decorate([
        core_1.Component({
            selector: 'searchBooking-app',
            templateUrl: './searchBooking.html',
            providers: [searchBooking_service_1.SearchBookingService]
        })
    ], SearchBookingComponent);
    return SearchBookingComponent;
}());
exports.SearchBookingComponent = SearchBookingComponent;
//# sourceMappingURL=searchBooking.component.js.map