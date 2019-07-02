import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { RequestModel } from '../models/request.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  private readonly baseUrl = `${environment.api}requests`;
  constructor(private httpClient: HttpClient) {}

  getAllRequest(): Observable<RequestModel[]> {
    return this.httpClient.get<RequestModel[]>(this.baseUrl).pipe(
      map((data: any[]) => {
        return data.map(request => new RequestModel(request));
      })
    );
  }

  getAll(): Observable<RequestModel[]> {
    return this.httpClient.get<RequestModel[]>(this.baseUrl);
  }
}
