import { Component, Input } from '@angular/core';

@Component({
  selector: 'transaction',
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.scss'
})
export class TransactionComponent {
  @Input() iconSrc: string = '';

  @Input() operation: string = '';
  @Input() procedure: string = '';
  @Input() cardnum: string = '';

  @Input() sum: string = '';
  @Input() currency: string = '';

  @Input() income: boolean = false;
}
