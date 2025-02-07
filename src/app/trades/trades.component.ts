import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FinancialTradeService } from '../financial-trades.service';

@Component({
  selector: 'app-trades',
  standalone: true,
  templateUrl: './trades.component.html',
  styleUrls: ['./trades.component.scss'],
  imports: [CommonModule],
})
export class TradesComponent implements OnInit {
  trades: any[] = [];

  constructor(private tradeService: FinancialTradeService) {}

  ngOnInit() {
    this.tradeService.getTrades().subscribe((data) => {
      this.trades = data;
    });
  }
}
