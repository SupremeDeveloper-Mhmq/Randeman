import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PeriodicElement } from '../Models/atom.model';
import { MatSnackBar } from '@angular/material/snack-bar';
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
];
const Maaza: PeriodicElement[] = [];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  Kaaber: number = 5;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor(private dialog: MatDialog, private _snackBar: MatSnackBar) {}
  ngOnInit() {}
  onFixNumber(Number: { Number: number }) {
    for (let i = 0; i < Number.Number; i++) {
      this.dataSource.push({
        position: 1,
        name: 'Hydrogen',
        weight: 1.0079,
        symbol: 'H',
      });
    }
  }
  onShowSnackBar(message: any, action: any) {
    this._snackBar.open(message, action);
  }
}
