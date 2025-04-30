import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FinancialTrade } from './financial-trade.model';

@Injectable({
  providedIn: 'root'
})
export class FinancialTradeService {
  private baseUrl = 'https://my.api.mockaroo.com/financialTrade';
  private apiKey = 'a50abc20';

  constructor(private http: HttpClient) {}

  getFinancialTrades(): Observable<FinancialTrade[]> {
    const params = new HttpParams().set('key', this.apiKey);
    return this.http.get<FinancialTrade[]>(this.baseUrl, { params });
  }
}


