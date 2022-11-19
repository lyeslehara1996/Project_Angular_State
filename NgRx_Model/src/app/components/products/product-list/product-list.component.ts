import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { map, Observable } from 'rxjs';
import {Store} from '@ngrx/store';
import { ProductsStates } from 'src/app/NGRX/ProductReducers';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() state :ProductsStates | null=null;


  constructor( private store:Store<any>) { }

  ngOnInit(): void {
 
  }

    onSelect(){
  }

  onAvalaibled(){

  }

  onDelete(){

  }

  onEdit(){
    
  }

}
