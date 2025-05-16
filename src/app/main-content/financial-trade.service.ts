import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FinancialTrade } from './financial-trade.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinancialTradeService {
  [x: string]: any;
  private baseUrl = 'https://my.api.mockaroo.com/financialTrade';
  private apiKey = 'a50abc20';

  constructor(private http: HttpClient) {}

  getFinancialTrades(): Observable<FinancialTrade[]> {
    
    const params = new HttpParams().set('key', this.apiKey);
    return this.http.get<FinancialTrade[]>(this.baseUrl, { params });
  }


  
  private selectedTrader: FinancialTrade | null = null;

  setSelectedTrader(trader: FinancialTrade): void {
    this.selectedTrader = trader;
  }

  getSelectedTrader(): FinancialTrade | null {
    return this.selectedTrader;
  }

  

  updateTrade(updatedTrader: FinancialTrade): Observable<FinancialTrade> {
    this.setSelectedTrader(updatedTrader); 
    return of(updatedTrader);
  }
  
  
}



