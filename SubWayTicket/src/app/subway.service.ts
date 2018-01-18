import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SubWayService {
    constructor(
        private http: Http
    ) { };

    asyncGetDestinationList() {
        return this.http.get('./utility/destination.json').map((resp: Response) => {
            return resp.json();
        });
    }
    asyncGetItineraryPrice() {
        return this.http.get('./utility/itinerary.json').map((resp: Response) => {
            return resp.json();
        });
    }
}

export enum Status {
    Start = 1,
    Buy = 2,
    Finish = 3
}

export class TicketInformation {
    from: string = "";
    to: string = "";
    amount: number = 0;
}