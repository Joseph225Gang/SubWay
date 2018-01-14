import { Component } from '@angular/core';
import { Status } from './subway.service';
import { TranslateService } from 'ng2-translate';

@Component({
    selector: 'my-app',
    templateUrl: './subway.html',
})
export class SubWayComponent
{
    constructor(private translate: TranslateService) {
        translate.addLangs(["en", "zh-tw"]);
        translate.setDefaultLang('zh-tw');

        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|zh-tw/) ? browserLang : 'zh-tw');
    }
    Status = Status;
    status: Status = Status.Start;
    numberTicket: number = 0;
    typeTicket: string = '';
    amount: number = 0;

    enterBuyStatus() { 
        this.status = Status.Buy;
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
