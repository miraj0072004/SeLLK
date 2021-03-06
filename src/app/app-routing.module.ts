import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { ItemEditComponent } from './items/item-edit/item-edit.component';

const routes: Routes = 
[
  {path:'', component:HomeComponent},  
  {path:'adverts', component:ItemsComponent},
  {path:'adverts/:id', component: ItemDetailComponent},
  {path:'postAd', component: ItemEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
