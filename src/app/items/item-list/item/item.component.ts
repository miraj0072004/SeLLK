import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item:Item;
  imagePath: string;
  @Input() index:number;
  constructor() { }

  ngOnInit() {
    this.imagePath=this.item.Images[0] ;
  }

}
