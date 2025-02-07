import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FinancialTradeService {
  private resourceUrl = 'https://my.api.mockaroo.com/financialTrade'; // Resource URL

  constructor(private http: HttpClient) {}

  getTrades(): Observable<any> {
    return this.http.get<any>(this.resourceUrl); // API Key is added via interceptor
  }
}
