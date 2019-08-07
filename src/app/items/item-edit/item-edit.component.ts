import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
 
  postAdForm : FormGroup;

  constructor(private itemService : ItemService,private router:Router) { }

  ngOnInit() {

    this.initForm();
  }

  onAddImage()
  {
    (<FormArray>this.postAdForm.get("images")).push(
      new FormGroup(
        {
          "path": new FormControl(null) 
        }
      )
          
    );
  }

  onPostAd()
  {
    this.itemService.AddItem(this.postAdForm.value);
    this.router.navigate(["/adverts"]);

  }

  initForm() {
    let category = "";
    let location = "";
    let title = "";
    let description = "";
    let price = "";
    let images = new FormArray([]);
    this.postAdForm = new FormGroup (
      {
        "category" : new FormControl(category),
        "location" : new FormControl(location),
        "title"    : new FormControl(title),
        "description" : new FormControl(description),
        "price" : new FormControl(price),
        "images" : images
      }
    );
  }



}
