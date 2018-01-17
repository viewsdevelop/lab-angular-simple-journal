import { Injectable } from '@angular/core';

// What are we accomplishing with this line of code?
import { Headers, Http, Response } from '@angular/http';


@Injectable()
export class JournalEntriesService {
    BASE_URL: string = 'http://localhost:4200/api';

    // Why are we calling this "private"?
    private headers = new Headers({'Content-Type': 'application/json'});

    // What are we accomplishing with this line of code?
    constructor(private http: Http) { }

    // Can we please review the code within this function?
    getEntries() {
        return this.http.get(`${this.BASE_URL}/journal-entries`)
            .toPromise()
            .then((res: Response) => res.json())
    }
}