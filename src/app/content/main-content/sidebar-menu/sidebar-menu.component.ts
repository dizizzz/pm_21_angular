import { Component } from '@angular/core';

@Component({
  selector: 'sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss'
})
export class SidebarMenuComponent {
  activeItemIndex: number = 0;

  menuItems: { iconSrc: string; label: string; isActive: boolean; isNextActive: boolean; }[] = [
    { iconSrc: 'assets/imgs/home.svg', label: 'Dashboard', isActive: true, isNextActive:false },
    { iconSrc: 'assets/imgs/pie-chart.svg', label: 'Transaction', isActive: false, isNextActive:true },
    { iconSrc: 'assets/imgs/id-card.svg', label: 'Account/Cards', isActive: false, isNextActive:false },
    { iconSrc: 'assets/imgs/copy.svg', label: 'Loans/Deposits', isActive: false, isNextActive:false },
    { iconSrc: 'assets/imgs/piggy-bank.svg', label: 'Cashbank', isActive: false, isNextActive:false },
    { iconSrc: 'assets/imgs/money.svg', label: 'Bank services', isActive: false, isNextActive:false },
    { iconSrc: 'assets/imgs/customer-service-copy.svg', label: 'Support', isActive: false, isNextActive:false }
  ];

  handleItemClicked(index: number) {
    this.activeItemIndex = index;
    this.menuItems.forEach((item, i) => {
      item.isActive = index === i;
      item.isNextActive = index + 1 === i + 1;
    });
  }
}
