import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ActionEvent } from './productState';

@Injectable({
  providedIn: 'root'
})
export class EventDriverService {

  constructor() { }


  sourceEventSubject :Subject<ActionEvent> = new Subject<ActionEvent>();
sourceEventSubjectObservable = this.sourceEventSubject.asObservable();


publishEvent(event :ActionEvent){
  this.sourceEventSubject.next(event);
}

}
