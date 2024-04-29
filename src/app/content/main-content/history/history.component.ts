import { Component, OnInit } from '@angular/core';
import { TransferService } from '../../../services/transfer.service';
import { TransferDto } from '../../../models/transfer.dto';

@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent implements OnInit {
  isCurrencyDropdownOpen: boolean = false;
  isCategoriesDropdownOpen: boolean = false;

  toggleCurrencyDropdown() {
    this.isCurrencyDropdownOpen = !this.isCurrencyDropdownOpen;
  }

  toggleCategoriesDropdown() {
    this.isCategoriesDropdownOpen = !this.isCategoriesDropdownOpen;
  }

  showCardnumForAlexey: boolean = true;

  transactions: TransferDto[] = [];

  constructor(private transferService: TransferService) { }

  ngOnInit(): void {
    this.fetchTransactions();
  }

  fetchTransactions(): void {
    this.transferService.getAllTransfers().subscribe(transactions => {
      this.transactions = transactions;
    });
  }
}
