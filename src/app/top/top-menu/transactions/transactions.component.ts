import { Component } from '@angular/core';

@Component({
  selector: 'transactions',
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent {
  showTransferForm: boolean = false;

  onCloseModal(): void {
    this.showTransferForm = false;
  }

  onShowTransferForm(): void {
    this.showTransferForm = true;
  }
}
