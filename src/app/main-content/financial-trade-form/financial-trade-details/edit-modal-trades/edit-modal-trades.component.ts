import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { FinancialTrade } from '../../../financial-trade.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterLink, RouterModule } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-modal-trades',
  templateUrl: './edit-modal-trades.component.html',
  styleUrls: ['./edit-modal-trades.component.scss'],
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ],
})
export class EditModalTradesComponent {
  @Input() trader!: FinancialTrade | null;
  @Output() closeModal = new EventEmitter<void>();
  @Output() saveChanges = new EventEmitter<FinancialTrade>();



  editedTrader: FinancialTrade | null = null;

  ngOnChanges(): void {
    if (this.trader) {
      this.editedTrader = JSON.parse(JSON.stringify(this.trader));
    }
  }

  save(): void {
    this.openSnackBar('Saved changes...', 'Close');
    if (this.editedTrader) {
      this.saveChanges.emit(this.editedTrader);
      this.closeModal.emit();
    }
  }

  private _snackBar = inject(MatSnackBar);

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  cancel(): void {
    this.closeModal.emit();
  }
}
