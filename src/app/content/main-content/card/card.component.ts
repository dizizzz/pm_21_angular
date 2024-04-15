import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() balance: string = '';
  @Input() currency: string = '';
  @Input() number: string = '';
  @Input() expirationDate: string = '';
  @Input() iconSrc: string = '';
}
