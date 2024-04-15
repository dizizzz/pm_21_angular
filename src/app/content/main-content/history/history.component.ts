import { Component } from '@angular/core';

@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent {
  isCurrencyDropdownOpen: boolean = false;
  isCategoriesDropdownOpen: boolean = false;

  toggleCurrencyDropdown() {
    this.isCurrencyDropdownOpen = !this.isCurrencyDropdownOpen;
  }

  toggleCategoriesDropdown() {
    this.isCategoriesDropdownOpen = !this.isCategoriesDropdownOpen;
  }

  showCardnumForAlexey: boolean = true;
}
