import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit,OnDestroy {


  subscription : Subscription;
  items : Item[];
  constructor(private itemService:ItemService) {
    
   }

   ngOnInit(): void {
    this.items = this.itemService.GetItems();
    this.subscription=this.itemService.itemsChanged.subscribe(
      (items : Item[])=>
      {
        this.items = items;
      }
    );

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }



}
