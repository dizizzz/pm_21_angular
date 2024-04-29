import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TransferService } from '.././services/transfer.service';
import { TransferDto } from '../models/transfer.dto';

@Component({
  selector: 'transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrl: './transfer-form.component.scss'
})
export class TransferFormComponent implements OnInit {
  senderAccount: string = '';
  receiverAccount: string = '';
  amount: number = 0;
  currency: string = '';
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();


  constructor(private transferService: TransferService) { }

  ngOnInit(): void {
    this.transferService.getAllTransfers().subscribe(res => console.log(res))
  }

  submitTransfer(): void {
    // Відправити дані на сервер за допомогою сервісу
    const transferDto: TransferDto = {
      id: 0, 
      senderAccount: this.senderAccount,
      receiverAccount: this.receiverAccount,
      amount: this.amount,
      currency: this.currency
    };
    this.transferService.createTransfer(transferDto)
      .subscribe(() => {
        // Очистити поля форми після успішного відправлення
        this.clearForm();
        this.closeModal.emit();
      });
  }

  clearForm(): void {
    this.senderAccount = '';
    this.receiverAccount = '';
    this.amount = 0;
    this.currency = '';
  }

}
