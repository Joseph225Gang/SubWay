import { Component } from '@angular/core';
import { Status } from './subway.service';
declare var $: any;

@Component({
    selector: 'my-app',
    templateUrl: './subway.html',
})
export class SubWayComponent
{
    Status = Status;
    status: Status = Status.Start;
    numberTicket: number = 0;
    typeTicket: string = '';
    amount: number = 0;

    enterBuyStatus() {
        this.status = Status.Buy;
    }

    finializePurchaseStatus() {
        this.status = Status.Finish;
        this.typeTicket = $('select').val().substring(0, 3);
        this.amount = this.numberTicket * parseInt($('select').val().substring(4, 7));
    }

    backtoStart() {
        location.reload();
    }
}
