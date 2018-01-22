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
var http_1 = require("@angular/http");
var SubWayService = (function () {
    function SubWayService(http) {
        this.http = http;
    }
    ;
    SubWayService.prototype.asyncGetDestinationList = function () {
        return this.http.get('./utility/destination.json').map(function (resp) {
            return resp.json();
        });
    };
    SubWayService.prototype.asyncGetItineraryPrice = function () {
        return this.http.get('./utility/itinerary.json').map(function (resp) {
            return resp.json();
        });
    };
    SubWayService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], SubWayService);
    return SubWayService;
}());
exports.SubWayService = SubWayService;
var Status;
(function (Status) {
    Status[Status["None"] = 0] = "None";
    Status[Status["Start"] = 1] = "Start";
    Status[Status["Buy"] = 2] = "Buy";
    Status[Status["Finish"] = 3] = "Finish";
})(Status = exports.Status || (exports.Status = {}));
var TicketInformation = (function () {
    function TicketInformation() {
        this.from = "";
        this.to = "";
        this.amount = 0;
    }
    return TicketInformation;
}());
exports.TicketInformation = TicketInformation;
//# sourceMappingURL=subway.service.js.map