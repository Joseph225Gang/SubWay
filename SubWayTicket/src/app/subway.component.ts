import { Component, AfterViewInit } from '@angular/core';
import { Status, SubWayService } from './subway.service';
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
    numberTicket: number = 0;
    typeTicket: string = '';
    amount: number = 0;

    ngAfterViewInit() {
    }

    enterBuyStatus() { 
        this.status = Status.Buy;
        this.subwayService.asyncGetDestinationList().subscribe(
            resp => {
                console.log(resp);
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
        this.typeTicket = $('select').val().toString().substring(0, 3);
        this.amount = this.numberTicket * parseInt($('select').val().toString().substring(4, 7));
    }

    backtoStart() {
        location.reload();
    }
}
