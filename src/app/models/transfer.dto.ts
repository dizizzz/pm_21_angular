export interface TransferDto {
  id: number;
  senderAccount: string;
  receiverAccount: string;
  amount: number;
  currency: string;
}

export interface TransferRequestDto {
  senderAccount: string;
  receiverAccount: string;
  amount: number;
  currency: string;
}