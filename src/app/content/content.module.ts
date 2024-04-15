import { CommonModule } from "@angular/common";
import { MainContentComponent } from "./main-content/main-content.component";
import { NgModule } from "@angular/core";
import { SidebarMenuComponent } from "./main-content/sidebar-menu/sidebar-menu.component";
import { SidebarMenuItemsComponent } from "./main-content/sidebar-menu/sidebar-menu-items/sidebar-menu-items.component";
import { CardComponent } from "./main-content/card/card.component";
import { BalanceSummaryComponent } from "./main-content/charts/balance-summary/balance-summary.component";
import { ExpenseCategoriesComponent } from "./main-content/charts/expense-categories/expense-categories.component";
import { HistoryComponent } from "./main-content/history/history.component";
import { TransactionComponent } from "./main-content/history/transaction/transaction.component";

@NgModule({
  declarations: [
    MainContentComponent,
    SidebarMenuComponent,
    SidebarMenuItemsComponent,
    CardComponent,
    BalanceSummaryComponent,
    ExpenseCategoriesComponent,
    HistoryComponent,
    TransactionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainContentComponent,
    SidebarMenuComponent,
    CardComponent,
    BalanceSummaryComponent,
    ExpenseCategoriesComponent,
    HistoryComponent,
    TransactionComponent
  ]
})
export class ContentModule {}
