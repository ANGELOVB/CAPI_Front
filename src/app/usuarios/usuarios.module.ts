import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TablaUsuariosComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTooltipModule,
  ]
})
export class UsuariosModule { }
