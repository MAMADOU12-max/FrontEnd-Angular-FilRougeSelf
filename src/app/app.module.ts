import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';
import { AdminComponent } from './admin/admin.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MaterialModule} from './material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormateurComponent } from './formateur/formateur.component';
import { ApprenantComponent } from './apprenant/apprenant.component';
import { CMComponent } from './cm/cm.component';
import { HeaderComponent } from './Share/header/header.component';
import { FooterComponent } from './Share/footer/footer.component';
import { MenuComponent } from './Share/menu/menu.component';
import { HomeComponent } from './home/home.component';
import {TokenInterceptor} from './auth/token.interceptor';
import { ListProfilComponent } from './profil/list-profil/list-profil.component';
import { AddProfilComponent } from './profil/add-profil/add-profil.component';
import { SideBarComponent } from './Share/side-bar/side-bar.component';
import { TopbarComponent } from './Share/topbar/topbar.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfilComponent,
    AdminComponent,
    FormateurComponent,
    ApprenantComponent,
    CMComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    ListProfilComponent,
    AddProfilComponent,
    SideBarComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule ,
    ReactiveFormsModule,
    FormsModule ,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent] ,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
