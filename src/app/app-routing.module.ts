import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { UpdateComponent } from './update/update.component';
import { AddComponent } from './add/add.component';
import { AddtblComponent } from './addtbl/addtbl.component';

const routes: Routes = [
  
  {path:'home', component:HomeComponent},
  {path:'add', component:AddComponent},
  {path:'table', component:AddtblComponent},
  {path:'update/:id', component:UpdateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
