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
    CancelBookingComponent.prototype.checkValidation = function () {
        var errorMessage = [];
        if ($('input').eq(0).val() == '')
            errorMessage.push("請輸入身份證字號");
        if ($('input').eq(1).val() == '')
            errorMessage.push("請輸入電腦代碼");
        return errorMessage.join('\n');
    };
    CancelBookingComponent.prototype.goToStatusResult = function () {
        var errorMessage = this.checkValidation();
        if (errorMessage.length == 0)
            this.status = cancelBooking_service_1.Status.Result;
        else
            alert(errorMessage);
    };
    CancelBookingComponent.prototype.removeBooking = function () {
        $("td").unbind("click");
        $('td').click(function () {
            var row_index = $(this).closest("tr").index();
            $('tr').eq(row_index + 1).remove();
        });
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