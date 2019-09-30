import { Injectable } from '@angular/core';
import { Strategy } from '../shared/strategy';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { map, catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class StrategyService {


  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getStrategies(): Observable < Strategy[] > {
    return this.http.get<Strategy[]>(baseURL + 'strategies');

  }
}
