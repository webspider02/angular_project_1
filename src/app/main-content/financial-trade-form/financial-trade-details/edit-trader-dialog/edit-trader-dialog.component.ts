import { Component, inject, Inject, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {provideNativeDateAdapter} from '@angular/material/core';


@Component({
  standalone: true,
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
  selector: 'app-edit-trader-dialog',
  templateUrl: './edit-trader-dialog.component.html',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class EditTraderDialogComponent {
  private snackBar = inject(MatSnackBar);
  constructor(
    public dialogRef: MatDialogRef<EditTraderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editedTrader: any
  ) {}

  save() {
    if (
      !this.editedTrader.date ||
      !this.editedTrader.seriesCode ||
      !this.editedTrader.financialTradeLines[0].itemName ||
      !this.editedTrader.financialTradeLines[0].quantity ||
      !this.editedTrader.financialTradeLines[0].price
    ) {
      this.snackBar.open('Please fill in all fields!', 'Close', {
        duration: 3000,
        panelClass: ['snackbar-error'],
        verticalPosition: 'top'
      });
      return;
    }

    this.dialogRef.close(this.editedTrader);
  }

  cancel() {
    this.dialogRef.close(null);
  }
}

