import { Component, AfterViewInit } from '@angular/core';
import { Status, SubWayService, TicketInformation } from './subway.service';
import { TranslateService } from 'ng2-translate';
import { Router } from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl: './subway.html',
    providers: [SubWayService]
})
export class SubWayComponent implements AfterViewInit
{
    constructor(private translate: TranslateService, private subwayService: SubWayService, private router:Router) {
        translate.addLangs(["en", "zh-tw"]);
        translate.setDefaultLang('zh-tw');
        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|zh-tw/) ? browserLang : 'zh-tw');
    }
    Status = Status;
    status: Status = Status.Start;
    destinationList: any[] = [];
    adultTicketList: TicketInformation[] = [];
    childTicketList: TicketInformation[] = [];
    currentTicketList: TicketInformation[] = [];
    numberTicket: number = 0;
    adultAmount: number = 0;
    childAmount: number = 0;
    amount: number = 0;
    totalAmount: number = 0;
    currentLang: string;

    ngAfterViewInit() {
        this.subwayService.asyncGetItineraryPrice().subscribe(
            resp => {
                this.adultTicketList = resp.Adult;
                this.childTicketList = resp.Child;
            },
            error => {
                alert(error.json().message);
            }
            )
    }

    navigateSearchSedule() {
        this.status = Status.Schedule;
    }

    navigateSearchBooking() {
        this.status = Status.SearchBooking;
    }

    navigateCancelBooking() {
        this.status = Status.CancelBooking;
    }

    enterBuyStatus() { 
        this.status = Status.Buy;
        this.subwayService.asyncGetDestinationList().subscribe(
            resp => {
                this.setDatePicker();
                this.destinationList = resp;
                this.showPrice();
                this.currentLang = this.translate.currentLang;
            },
            error => {
            }
        );
    }

    setDatePicker() {
        $('#destinationDate').datepicker();
        $('#homeDate').datepicker();
    }

    finializePurchaseStatus() {
        this.status = Status.Finish;
        this.totalAmount = this.getFinalPrice();
    }

    showPrice() {
        let fromDestination = $('select').eq(0).val();
        let toDestination = $('select').eq(1).val();
        let adultPos = this.adultTicketList.filter(function (item: any) {
            return item.from == fromDestination && item.to == toDestination;
        });
        let childPos = this.childTicketList.filter(function (item: any) {
            return item.from == fromDestination && item.to == toDestination;
        });

        if (adultPos.length == 0 || childPos.length == 0)
            return;
        this.adultAmount = adultPos[0].amount;
        this.childAmount = childPos[0].amount;
        if ($('select').eq(2).val() == 'adult')
            this.amount = typeof (adultPos[0].amount) != 'undefined' ? this.adultAmount : 0;
        else
            this.amount = typeof (childPos[0].amount) != 'undefined'? this.childAmount : 0;
    }

    getFinalPrice(): number {
        this.numberTicket = parseInt($('input').eq(2).val().toString());
        return this.numberTicket * this.amount;
    }

    backtoStart() {
        location.reload();
    }
}
