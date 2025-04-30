import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { FinancialTrade } from '../financial-trade.model';
import { FinancialTradeService } from '../financial-trade.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-financial-trade-form',
  templateUrl: './financial-trade-form.component.html',
  styleUrl: './financial-trade-form.component.scss',
  imports: [CommonModule],
})
export class FinancialTradeFormComponent implements OnInit {
  trades: FinancialTrade[] = [];

  private destroyRef = inject(DestroyRef);

  constructor(private tradeService: FinancialTradeService) {}

  ngOnInit() {
    const subscription =this.tradeService.getFinancialTrades().subscribe({
      next: data => this.trades = data,
      error: err => console.error('Error loading trades:', err)
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}

