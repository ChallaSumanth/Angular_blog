import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BlogformComponent } from './blogform/blogform.component';
import { BloglistComponent } from './bloglist/bloglist.component';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  {path : 'list' , component : BloglistComponent},
  {path : 'create', component : BlogformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
