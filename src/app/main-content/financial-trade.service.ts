import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { FinancialTrade } from './financial-trade.model';

@Injectable({
  providedIn: 'root'
})
export class FinancialTradeService {
  private baseUrl = 'https://my.api.mockaroo.com/financialTrade';
  private apiKey = 'a50abc20';

  private selectedTrader: FinancialTrade | null = null;
  private cachedTrades: FinancialTrade[] = [];

  constructor(private http: HttpClient) {}

  getFinancialTrades(): Observable<FinancialTrade[]> {
    if (this.cachedTrades.length) {
      return of(this.cachedTrades);
    }

    const params = new HttpParams().set('key', this.apiKey);
    return this.http.get<FinancialTrade[]>(this.baseUrl, { params }).pipe(
      tap(trades => this.cachedTrades = trades)
    );
  }

  getCachedTrades(): FinancialTrade[] {
    return this.cachedTrades;
  }

  setSelectedTrader(trader: FinancialTrade): void {
    this.selectedTrader = trader;
  }

  getSelectedTrader(): FinancialTrade | null {
    return this.selectedTrader;
  }

  updateTrade(updatedTrader: FinancialTrade): Observable<FinancialTrade> {
    const index = this.cachedTrades.findIndex(t => t.id === updatedTrader.id);
    if (index !== -1) {
      this.cachedTrades[index] = updatedTrader;
    } else {
      this.cachedTrades.push(updatedTrader);
    }

    this.setSelectedTrader(updatedTrader);
    return of(updatedTrader); 
  }
}
