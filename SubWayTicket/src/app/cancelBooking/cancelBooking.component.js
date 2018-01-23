"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var cancelBooking_service_1 = require("./cancelBooking.service");
var CancelBookingComponent = (function () {
    function CancelBookingComponent() {
        this.Status = cancelBooking_service_1.Status;
        this.status = cancelBooking_service_1.Status.Search;
    }
    CancelBookingComponent.prototype.ngAfterViewInit = function () {
    };
    CancelBookingComponent.prototype.goToStatusResult = function () {
        this.status = cancelBooking_service_1.Status.Result;
    };
    CancelBookingComponent = __decorate([
        core_1.Component({
            selector: 'cancelBooking-app',
            templateUrl: './cancelBooking.html',
            providers: [cancelBooking_service_1.CancelBookingService]
        })
    ], CancelBookingComponent);
    return CancelBookingComponent;
}());
exports.CancelBookingComponent = CancelBookingComponent;
//# sourceMappingURL=cancelBooking.component.js.map