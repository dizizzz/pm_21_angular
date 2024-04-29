import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { TopMenuComponent } from "./top-menu/top-menu.component";
import { TopMenuCourseComponent } from "./top-menu/top-menu-course/top-menu-course.component";
import { TopMenuCourseColComponent } from "./top-menu/top-menu-course/top-menu-course-col/top-menu-course-col.component";
import { TransactionsComponent } from "./top-menu/transactions/transactions.component";
import { TransactionItemComponent } from "./top-menu/transactions/transaction-item/transaction-item.component";
import { UserSearchComponent } from "./top-menu/user-search/user-search.component";
import { TransferFormComponent } from "../transfer-form/transfer-form.component";
import { HttpClientModule } from '@angular/common/http';
import { TransferService } from "../services/transfer.service";

@NgModule({
  declarations: [
    TopMenuComponent,
    TopMenuCourseComponent,
    TopMenuCourseColComponent,
    TransactionsComponent,
    TransactionItemComponent,
    UserSearchComponent,
    TransferFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TransferService
  ],
  exports: [
    TopMenuComponent,
    TopMenuCourseComponent,
    TransactionsComponent,
    UserSearchComponent,
    TransferFormComponent
  ]
})
export class TopModule {}
