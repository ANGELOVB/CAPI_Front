import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuariosModule } from './usuarios/usuarios.module';
import { RouterModule } from '@angular/router';
import { TablaUsuariosComponent } from './usuarios/tabla-usuarios/tabla-usuarios.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UsuariosModule,
    
    RouterModule.forChild([
      { path: '', component: TablaUsuariosComponent },
    ]),

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
