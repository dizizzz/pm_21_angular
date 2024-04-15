import { Component } from '@angular/core';

@Component({
  selector: 'user-search',
  templateUrl: './user-search.component.html',
  styleUrl: './user-search.component.scss'
})
export class UserSearchComponent {
  isSearchBarExpanded: boolean = false;
  searchText: string = '';
  
  toggleSearchBar() {
    this.isSearchBarExpanded = !this.isSearchBarExpanded;
    
  }
}
