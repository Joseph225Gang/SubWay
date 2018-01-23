import { Input, Component, AfterViewInit } from '@angular/core';
import { SearchBookingService, Status } from './searchBooking.service'

@Component({
    selector: 'searchBooking-app',
    templateUrl: './searchBooking.html',
    providers: [SearchBookingService]
})
export class SearchBookingComponent implements AfterViewInit {
    Status = Status;
    status: Status = Status.Search;
    ngAfterViewInit() {
    }

    goToStatusResult() {
        this.status = Status.Result;
    }
}