import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiEndPoint = environment.apiEndPoint;
  constructor(private httpClient: HttpClient) { }

  get(urlAppend: string, params: HttpParams= new HttpParams()): Observable<any>
  {
    return this.httpClient.get(`${this.apiEndPoint}${urlAppend}`,{params: params});
  }


  put(path: string, body: any = {}): Observable<any> {
    return this.httpClient.put(
        `${this.apiEndPoint}${path}`,
        body
    );
}

post(path: string, body: object = {}): Observable<any> {
    return this.httpClient.post(
        `${this.apiEndPoint}${path}`,
        body
    );
}

delete(path: string): Observable<any> {
    return this.httpClient.delete(
        `${this.apiEndPoint}${path}`
    );
}


}
