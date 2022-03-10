// import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { MatTable } from '@angular/material/table';
// import { TelefoneRead2DataSource } from './telefone-read2-datasource';
// import { Telefone } from '../telefone.model';

// @Component({
//   selector: 'app-telefone-read2',
//   templateUrl: './telefone-read2.component.html',
//   styleUrls: ['./telefone-read2.component.css']
// })
// export class TelefoneRead2Component implements AfterViewInit, OnInit {
//   @ViewChild(MatPaginator) paginator: MatPaginator;
//   @ViewChild(MatSort) sort: MatSort;
//   @ViewChild(MatTable) table: MatTable<Telefone>;
//   dataSource:TelefoneRead2DataSource;

//   /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
//   displayedColumns = ['id', 'name', 'price'];

//   ngOnInit() {
//     this.dataSource = new TelefoneRead2DataSource();
//   }

//   ngAfterViewInit() {
//     this.dataSource.sort = this.sort;
//     this.dataSource.paginator = this.paginator;
//     this.table.dataSource = this.dataSource;
//   }
// }
 