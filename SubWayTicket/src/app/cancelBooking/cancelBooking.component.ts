import { Input, Component, AfterViewInit } from '@angular/core';
import { CancelBookingService, Status } from './cancelBooking.service';

@Component({
    selector: 'cancelBooking-app',
    templateUrl: './cancelBooking.html',
    providers: [CancelBookingService]
})
export class CancelBookingComponent implements AfterViewInit {
    Status = Status;
    status: Status = Status.Search;

    ngAfterViewInit() {
    }

    goToStatusResult() {
        this.status = Status.Result;
    }
}