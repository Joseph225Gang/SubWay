import { Component, AfterViewInit } from '@angular/core';
import { Status, SubWayService, TicketInformation } from './subway.service';
import { TranslateService } from 'ng2-translate';

@Component({
    selector: 'my-app',
    templateUrl: './subway.html',
    providers: [SubWayService]
})
export class SubWayComponent implements AfterViewInit
{
    constructor(private translate: TranslateService, private subwayService: SubWayService) {
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
    typeTicket: string = '';
    amount: number = 0;

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

    enterBuyStatus() { 
        this.status = Status.Buy;
        this.subwayService.asyncGetDestinationList().subscribe(
            resp => {
                this.destinationList = resp;
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
        this.amount = this.getFinalPrice();
    }

    getFinalPrice(): number {
        let fromDestination = $('select').eq(0).val();
        let toDestination = $('select').eq(1).val();
        if ($('select').eq(2).val() == 'adult')
            this.currentTicketList = this.adultTicketList;
        else
            this.currentTicketList = this.childTicketList;
        let pos = this.currentTicketList.filter(function (item: any) {
            return item.from == fromDestination && item.to == toDestination;
        });
        this.numberTicket = parseInt($('input').eq(2).val().toString());
        return this.numberTicket * pos[0].amount;
    }

    backtoStart() {
        location.reload();
    }
}
