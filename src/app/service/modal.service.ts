import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private idSource = new BehaviorSubject<number | undefined>(undefined);
  id$ = this.idSource.asObservable();

  enviarId(id: number) {
    this.idSource.next(id);
  }

  obtenerId() {
    return this.id$;
  }
}
