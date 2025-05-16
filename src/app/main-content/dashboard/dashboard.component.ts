import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancialTradeService } from '../financial-trade.service';
import { FinancialTrade } from '../financial-trade.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  private tradeService = inject(FinancialTradeService);

  trades: FinancialTrade[] = [];

  ngOnInit() {
    this.tradeService.getFinancialTrades().subscribe({
      next: data => this.trades = data,
      error: err => console.error('Failed to load trades:', err)
    });
  }

  get grandTotal(): number {
    return this.trades.reduce((total, trade) => {
      const tradeTotal = trade.financialTradeLines.reduce(
        (sum, line) => sum + line.price * line.quantity,
        0
      );
      return total + tradeTotal;
    }, 0);
  }
}
