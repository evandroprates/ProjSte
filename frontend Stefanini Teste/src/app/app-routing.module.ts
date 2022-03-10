import { NgModule, Component} from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { TelefoneDeleteComponent } from './components/telefone-delete/telefone-delete.component';
import { TelefoneUpdateComponent } from './components/telefone-update/telefone-update.component';
import { TelefoneCreateComponent } from './components/telefone/telefone-create/telefone-create.component';

import { HomeComponent } from './views/home/home.component';
import { TelefoneCrudComponent } from './views/telefone-crud/telefone-crud.component';


const routes: Routes = [{
  path:"",
  component: HomeComponent
},{
  path:"telefones",
  component: TelefoneCrudComponent
},{
  path: "telefones/create",
  component: TelefoneCreateComponent
},{
  path: "telefones/update/:id",
  component: TelefoneUpdateComponent
},{
  path: "telefones/delete/:id",
  component: TelefoneDeleteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
