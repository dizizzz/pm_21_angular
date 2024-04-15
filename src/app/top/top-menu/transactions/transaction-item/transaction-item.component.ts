import { Component, Input } from '@angular/core';

@Component({
  selector: 'transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrl: './transaction-item.component.scss'
})
export class TransactionItemComponent {
  @Input() label: string = '';
  @Input() link: string = '';
}
