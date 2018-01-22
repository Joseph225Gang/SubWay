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
var router_1 = require("@angular/router");
var SubWayComponent = (function () {
    function SubWayComponent(translate, subwayService, router) {
        this.translate = translate;
        this.subwayService = subwayService;
        this.router = router;
        this.Status = subway_service_1.Status;
        this.status = subway_service_1.Status.Start;
        this.destinationList = [];
        this.adultTicketList = [];
        this.childTicketList = [];
        this.currentTicketList = [];
        this.numberTicket = 0;
        this.adultAmount = 0;
        this.childAmount = 0;
        this.amount = 0;
        this.totalAmount = 0;
        translate.addLangs(["en", "zh-tw"]);
        translate.setDefaultLang('zh-tw');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|zh-tw/) ? browserLang : 'zh-tw');
    }
    SubWayComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.subwayService.asyncGetItineraryPrice().subscribe(function (resp) {
            _this.adultTicketList = resp.Adult;
            _this.childTicketList = resp.Child;
        }, function (error) {
            alert(error.json().message);
        });
    };
    SubWayComponent.prototype.navigateSearchSedule = function () {
        this.status = subway_service_1.Status.None;
    };
    SubWayComponent.prototype.enterBuyStatus = function () {
        var _this = this;
        this.status = subway_service_1.Status.Buy;
        this.subwayService.asyncGetDestinationList().subscribe(function (resp) {
            _this.setDatePicker();
            _this.destinationList = resp;
            _this.showPrice();
            _this.currentLang = _this.translate.currentLang;
        }, function (error) {
        });
    };
    SubWayComponent.prototype.setDatePicker = function () {
        $('#destinationDate').datepicker();
        $('#homeDate').datepicker();
    };
    SubWayComponent.prototype.finializePurchaseStatus = function () {
        this.status = subway_service_1.Status.Finish;
        this.totalAmount = this.getFinalPrice();
    };
    SubWayComponent.prototype.showPrice = function () {
        var fromDestination = $('select').eq(0).val();
        var toDestination = $('select').eq(1).val();
        var adultPos = this.adultTicketList.filter(function (item) {
            return item.from == fromDestination && item.to == toDestination;
        });
        var childPos = this.childTicketList.filter(function (item) {
            return item.from == fromDestination && item.to == toDestination;
        });
        if (adultPos.length == 0 || childPos.length == 0)
            return;
        this.adultAmount = adultPos[0].amount;
        this.childAmount = childPos[0].amount;
        if ($('select').eq(2).val() == 'adult')
            this.amount = typeof (adultPos[0].amount) != 'undefined' ? this.adultAmount : 0;
        else
            this.amount = typeof (childPos[0].amount) != 'undefined' ? this.childAmount : 0;
    };
    SubWayComponent.prototype.getFinalPrice = function () {
        this.numberTicket = parseInt($('input').eq(2).val().toString());
        return this.numberTicket * this.amount;
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
        __metadata("design:paramtypes", [ng2_translate_1.TranslateService, subway_service_1.SubWayService, router_1.Router])
    ], SubWayComponent);
    return SubWayComponent;
}());
exports.SubWayComponent = SubWayComponent;
//# sourceMappingURL=subway.component.js.map