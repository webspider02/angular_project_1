import { Component, OnInit } from '@angular/core';
import { FinancialTrade } from '../../financial-trade.model';
import { FinancialTradeService } from '../../financial-trade.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditTraderDialogComponent } from './edit-trader-dialog/edit-trader-dialog.component';

@Component({
  standalone: true,
  selector: 'app-financial-trades-details',
  templateUrl: './financial-trade-details.component.html',
  styleUrls: ['./financial-trade-details.component.scss'],
  imports: [CommonModule, FormsModule, RouterLink, RouterModule],
})
export class FinancialTradesDetailsComponent implements OnInit {
  trade: FinancialTrade | null = null;

  constructor(
    private financialTradeService: FinancialTradeService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.trade = this.financialTradeService.getSelectedTrader();
  }

  openEditDialog(trader: FinancialTrade): void {
    const dialogRef = this.dialog.open(EditTraderDialogComponent, {
      width: '500px',
      data: JSON.parse(JSON.stringify(trader)) // pass copy
    });

    dialogRef.afterClosed().subscribe((updatedTrader: FinancialTrade | null) => {
      if (updatedTrader) {
        this.onSaveChanges(updatedTrader);
      }
    });
  }

  onSaveChanges(updatedTrader: FinancialTrade): void {
    if (this.trade && updatedTrader.id === this.trade.id) {
      this.trade = updatedTrader;
      this.financialTradeService.setSelectedTrader(updatedTrader);
    }
  }
}
