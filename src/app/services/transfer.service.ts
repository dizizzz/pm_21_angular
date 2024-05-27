import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransferDto } from '../models/transfer.dto';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private baseUrl = 'http://localhost:8080/transfers'; 

  constructor(private http: HttpClient) { }

  // Відправлення POST-запиту для створення нового трансферу
  createTransfer(transferData: TransferDto): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, transferData);
  }

  // Відправлення GET-запиту для отримання всіх трансферів
  getAllTransfers(): Observable<TransferDto[]> {
    return this.http.get<TransferDto[]>(`${this.baseUrl}`);
  }

  // Відправлення GET-запиту для отримання трансферу за ID
  getTransferById(id: number): Observable<TransferDto> {
    return this.http.get<TransferDto>(`${this.baseUrl}/${id}`);
  }
}
