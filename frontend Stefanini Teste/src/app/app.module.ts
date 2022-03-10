import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import{ MatToolbarModule } from '@angular/material/toolbar';
import{ MatCardModule } from '@angular/material/card';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { TelefoneCrudComponent } from './views/telefone-crud/telefone-crud.component';

import{ MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import localePt from '@angular/common/locales/pt'; //Localizacao das virgulas em preco
import { registerLocaleData } from '@angular/common';
import { TelefoneUpdateComponent } from './components/telefone-update/telefone-update.component';
import { TelefoneDeleteComponent } from './components/telefone-delete/telefone-delete.component';
import { TelefoneCreateComponent } from './components/telefone/telefone-create/telefone-create.component';
// import { TelefoneRead2Component } from './components/telefone/telefone-read2/telefone-read2.component';
import { TelefoneReadComponent } from './components/telefone/telefone-read/telefone-read.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    TelefoneCrudComponent,
    TelefoneCreateComponent,
    TelefoneReadComponent,
    // TelefoneRead2Component,
    TelefoneUpdateComponent,
    TelefoneDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
