import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServicePrincipalService } from 'src/app/services/service-principal.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent {
  displayedColumns: string[] = ['nombre', 'fecha','edad','direccion'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private api: ServicePrincipalService) {  }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.api.getUsuarios()
      .subscribe({
        next: (res) => {
          //console.log(res);
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.paginator._intl.itemsPerPageLabel = 'Registros por pagina';
          this.dataSource.sort = this.sort;
        },
        error: () => {
          alert("Error");
        }
      })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
