import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {FormateurComponent} from './formateur/formateur.component';
import {AdminComponent} from './admin/admin.component';
import {CMComponent} from './cm/cm.component';
import {ApprenantComponent} from './apprenant/apprenant.component';
import {HomeComponent} from './home/home.component';
import {ListProfilComponent} from './profil/list-profil/list-profil.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent} ,
  {path: 'formateur', component: FormateurComponent} ,
  {path: 'admin', component: AdminComponent} ,
  {path: 'cm', component: CMComponent} ,
  {path: 'apprenant', component: ApprenantComponent} ,
  {path: 'listProfils', component: ListProfilComponent} ,
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
