import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ProcessHTTPMsgService {

  constructor() { }

  public handleError(error: HttpErrorResponse) {
    let errMsg: string;

    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
      errMsg = error.error.message;
      // errMsg = 'Craze Error';
    } else {
      errMsg = 'Craze Error';
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);

    }
    return throwError('Something bad happened; please try again later.');
  };


}


