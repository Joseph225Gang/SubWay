"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var subway_service_1 = require("./subway.service");
var SubWayComponent = (function () {
    function SubWayComponent() {
        this.Status = subway_service_1.Status;
        this.status = subway_service_1.Status.Start;
        this.numberTicket = 0;
        this.typeTicket = '';
        this.amount = 0;
    }
    SubWayComponent.prototype.enterBuyStatus = function () {
        this.status = subway_service_1.Status.Buy;
    };
    SubWayComponent.prototype.finializePurchaseStatus = function () {
        this.status = subway_service_1.Status.Finish;
        this.typeTicket = $('select').val().substring(0, 3);
        this.amount = this.numberTicket * parseInt($('select').val().substring(4, 7));
    };
    SubWayComponent.prototype.backtoStart = function () {
        location.reload();
    };
    SubWayComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './subway.html',
        })
    ], SubWayComponent);
    return SubWayComponent;
}());
exports.SubWayComponent = SubWayComponent;
//# sourceMappingURL=subway.component.js.map