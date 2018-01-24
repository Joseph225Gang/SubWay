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

    removeBooking(data: any) {
        $("td").unbind("click");
        $('td').click(function () {
            let row_index: number = $(this).closest("tr").index();
            $('tr').eq(row_index + 1).remove();
        });
    }
}