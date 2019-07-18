import { Injectable } from '@angular/core';
import { Asset } from '../shared/asset';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { map, catchError} from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';


@Injectable({
  providedIn: 'root'
})

export class AssetService {

  constructor(private http: HttpClient,
  private processHTTPMsgService:ProcessHTTPMsgService) { }

  getAssets(): Observable<Asset[]> {
    return this.http.get<Asset[]>(baseURL + 'assets');

  }

      
}
