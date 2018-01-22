import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SearchSeduleService {
}

export enum Status {
    Start = 1,
    Search = 2
}