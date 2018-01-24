import { Input, Component, AfterViewInit } from '@angular/core';
import { CancelBookingService, Status } from './cancelBooking.service';

@Component({
    selector: 'cancelBooking-app',
    templateUrl: './cancelBooking.html',
    providers: [CancelBookingService]
})
export class CancelBookingComponent{
    Status = Status;
    status: Status = Status.Search;

    checkValidation() {
        let errorMessage: string[] = [];
        if ($('input').eq(0).val() == '')
            errorMessage.push("請輸入身份證字號");
        if ($('input').eq(1).val() == '')
            errorMessage.push("請輸入電腦代碼");
        return errorMessage.join('\n');   
    }

    goToStatusResult() {
        let errorMessage = this.checkValidation();
        if (errorMessage.length == 0)
            this.status = Status.Result;
        else
            alert(errorMessage);
    }

    removeBooking() {
        $("td").unbind("click");
        $('td').click(function () {
            let row_index: number = $(this).closest("tr").index();
            $('tr').eq(row_index + 1).remove();
        });
    }
}