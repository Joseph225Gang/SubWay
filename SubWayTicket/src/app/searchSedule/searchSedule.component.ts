import { Input, Component, AfterViewInit } from '@angular/core';
import { SearchSeduleService, Status } from './searchSedule.service';
import { SubWayService } from '../subway.service'

@Component({
    selector: 'searchSedule-app',
    templateUrl: './searchSedule.html',
    providers: [SubWayService]
})
export class SearchSeduleComponent implements AfterViewInit{
    Status = Status;
    status: Status = Status.Start;
    destination: any; 
    fromPlace: string;
    toPlace: string;

    constructor(private subwayService: SubWayService) {
    }

    ngAfterViewInit() {
        $('input').eq(0).datepicker();
        this.subwayService.asyncGetDestinationList().subscribe(
            resp => {
                this.destination = resp.Destination;
                this.fromPlace = this.destination[0].destination;
                this.toPlace = this.destination[0].destination;
            },
            error => {
                alert(error.json().message);
            }
        )
    }

    setDatePicker() {
        $('input').datepicker();
    }

    backToSchedule() {
        this.fromPlace = this.destination[0].destination;
        this.toPlace = this.destination[0].destination;
        this.status = Status.Start;
    }

    findSchedule() {
        if (this.fromPlace == this.toPlace) {
            alert("目的地和出發點相同");
            return;
        }
        this.status = Status.Search;
    }
}