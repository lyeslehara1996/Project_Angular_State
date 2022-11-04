import { Component, OnInit } from '@angular/core';
import { EventDriverService } from 'src/app/State/event-driver.service';
import { ActionEvent } from 'src/app/State/productState';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {

  conter: number = 0;
  constructor(private eventDriverService:EventDriverService) { }


  ngOnInit(): void {

    this.eventDriverService.sourceEventSubjectObservable.subscribe((actionEvent:ActionEvent)=>{
      ++this.conter;
    })

  }

}
