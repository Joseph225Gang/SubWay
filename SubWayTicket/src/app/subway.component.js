"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var subway_service_1 = require("./subway.service");
var ng2_translate_1 = require("ng2-translate");
var SubWayComponent = (function () {
    function SubWayComponent(translate, subwayService) {
        this.translate = translate;
        this.subwayService = subwayService;
        this.Status = subway_service_1.Status;
        this.status = subway_service_1.Status.Start;
        this.destinationList = [];
        this.numberTicket = 0;
        this.typeTicket = '';
        this.amount = 0;
        translate.addLangs(["en", "zh-tw"]);
        translate.setDefaultLang('zh-tw');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|zh-tw/) ? browserLang : 'zh-tw');
    }
    SubWayComponent.prototype.ngAfterViewInit = function () {
        this.subwayService.asyncGetItineraryPrice().subscribe(function (resp) {
            console.log(resp);
        }, function (error) {
            alert(error.json().message);
        });
    };
    SubWayComponent.prototype.enterBuyStatus = function () {
        var _this = this;
        this.status = subway_service_1.Status.Buy;
        this.subwayService.asyncGetDestinationList().subscribe(function (resp) {
            console.log(resp);
            _this.destinationList = resp;
        }, function (error) {
        });
    };
    SubWayComponent.prototype.setDatePicker = function () {
        $('#destinationDate').datepicker();
        $('#homeDate').datepicker();
    };
    SubWayComponent.prototype.finializePurchaseStatus = function () {
        alert($('select').eq(0).val());
        alert($('select').eq(1).val());
        alert($('input').eq(2).val());
        this.status = subway_service_1.Status.Finish;
        this.typeTicket = $('select').val().toString().substring(0, 3);
        this.amount = this.numberTicket * parseInt($('select').val().toString().substring(4, 7));
    };
    SubWayComponent.prototype.backtoStart = function () {
        location.reload();
    };
    SubWayComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './subway.html',
            providers: [subway_service_1.SubWayService]
        }),
        __metadata("design:paramtypes", [ng2_translate_1.TranslateService, subway_service_1.SubWayService])
    ], SubWayComponent);
    return SubWayComponent;
}());
exports.SubWayComponent = SubWayComponent;
//# sourceMappingURL=subway.component.js.map