import { Component, DestroyRef, inject, input, OnInit } from '@angular/core';
import { FinancialTrade } from '../financial-trade.model';
import { FinancialTradeService } from '../financial-trade.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-financial-trade-form',
  templateUrl: './financial-trade-form.component.html',
  styleUrl: './financial-trade-form.component.scss',
  imports: [CommonModule, RouterModule],
})
export class FinancialTradeFormComponent implements OnInit {
  trades: FinancialTrade[] = [];

  traderId = input.required<number>();

  private destroyRef = inject(DestroyRef);
  private tradeService = inject(FinancialTradeService);
  private snackBar = inject(MatSnackBar);

  ngOnInit() {
    const subscription = this.tradeService.getFinancialTrades().subscribe({
      next: data => this.trades = data,
      error: () => {
        this.snackBar.open('Error loading trades. Please try again.', 'Close', {
          duration: 5000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center'
        });
      }
    });
  
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
  

  selectedTrader: FinancialTrade | null = null;


  selectTrader(trader: FinancialTrade): void {
    this.tradeService.setSelectedTrader(trader);
  }
}

