import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import { global } from "../app/global";
 
@Injectable()
export class NewsService {
    options : any;
 
    constructor ( public http:Http ) {
        this.http = http;
        let headers = new Headers({ 'Content-Type': 'application/json',
                                    'api-appApplication' : global.apiApplication, 
                                    'api-appUser' : global.apiUser, 
                                    'api-appKey' : global.apikey
                                });
        this.options = new RequestOptions({ headers: headers })
    }

    /* get all news */
    allNews(page : number) {
        return this.http.get(global.apiUrl + 'post/page/' + page, this.options)
            .map(res => res.json())
            .catch(this.handleError);
    }
 
    /*favorite(property) {
        let body = JSON.stringify(property);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(favoritesURL, body, options)
            .map(res => res.json())
            .catch(this.handleError);
    }*/
 
    handleError(error) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
 
}