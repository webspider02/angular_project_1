import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

import { FinancialTradeService } from '../../../financial-trade.service';
import { FinancialTrade } from '../../../financial-trade.model';

@Component({
  standalone: true,
  selector: 'app-edit-trader-dialog',
  templateUrl: './edit-trader-dialog.component.html',
  styleUrls: ['./edit-trader-dialog.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    RouterModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
// export class EditTraderDialogComponent {

//   @Input() editedTrader: FinancialTrade = {
//     id: 0,
//     traderName: '',
//     date: '',
//     seriesCode: '',
//     financialTradeLines: [
//       {
//         id: 0,
//         itemName: '',
//         quantity: 0,
//         price: 0
//       }
//     ]
//   };

//   constructor(
//     private snackBar: MatSnackBar,
//     private router: Router,
//     private financialTradeService: FinancialTradeService
//   ) {}

//   save() {
//     const tradeLine = this.editedTrader.financialTradeLines?.[0];

//     if (
//       !this.editedTrader.date ||
//       !this.editedTrader.seriesCode ||
//       !tradeLine?.itemName ||
//       tradeLine.quantity == null ||
//       tradeLine.price == null
//     ) {
//       this.snackBar.open('Please fill in all fields!', 'Close', {
//         duration: 3000,
//         panelClass: ['snackbar-error'],
//         verticalPosition: 'top'
//       });
//       return;
//     }

//     this.financialTradeService.updateTrade(this.editedTrader).subscribe(() => {
//       this.snackBar.open('Trader saved successfully!', 'Close', {
//         duration: 3000,
//         panelClass: ['snackbar-success'],
//         verticalPosition: 'top'
//       });

//       this.router.navigate(['/trader', this.editedTrader.id]);
//     });
//   }

//   cancel() {
//     this.router.navigate(['/trader', this.editedTrader.id]);
//   }
// }

export class EditTraderDialogComponent {
  editedTrader!: FinancialTrade; // No default here!

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private financialTradeService: FinancialTradeService
  ) {}

  ngOnInit(): void {
    const selected = this.financialTradeService.getSelectedTrader();
    if (selected) {
      // Clone the trader object to edit without mutating original until saved
      this.editedTrader = JSON.parse(JSON.stringify(selected));
    } else {
      // No trader selected, fallback
      this.router.navigate(['/trader']);
    }
  }

  save() {
    const tradeLine = this.editedTrader.financialTradeLines?.[0];

    if (
      !this.editedTrader.date ||
      !this.editedTrader.seriesCode ||
      !tradeLine?.itemName ||
      tradeLine.quantity == null ||
      tradeLine.price == null
    ) {
      this.snackBar.open('Please fill in all fields!', 'Close', {
        duration: 3000,
        panelClass: ['snackbar-error'],
        verticalPosition: 'top'
      });
      return;
    }

    this.financialTradeService.updateTrade(this.editedTrader).subscribe(() => {
      this.snackBar.open('Trader saved successfully!', 'Close', {
        duration: 3000,
        panelClass: ['snackbar-success'],
        verticalPosition: 'top'
      });

      this.router.navigate(['/trader', this.editedTrader.id]); // Now this is correct
    });
  }

  cancel() {
    this.router.navigate(['/trader', this.editedTrader.id]);
  }
}
