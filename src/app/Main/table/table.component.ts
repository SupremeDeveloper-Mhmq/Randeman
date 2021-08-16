import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PeriodicElement } from '../Models/atom.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  Kaaber: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', value: 10 },
  ];
  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'Costume',
    'example',
    'test',
  ];
  dataSource = this.Kaaber;

  constructor(private dialog: MatDialog, private _snackBar: MatSnackBar) {}
  ngOnInit() {}
  onFixNumber(Number: { Number: number }) {
    this.onShowSnackBar(Number.Number, 'Close');
    this.Kaaber = [];
    for (let i = 0; i < Number.Number; i++) {
      this.Kaaber.push({
        position: i,
        name: 'Hydrogen',
        weight: 1.0079,
        symbol: 'H',
        value: i * 5,
      });
    }
    this.dataSource = [...this.Kaaber];
    // this.Kaaber = this.dataSource;
    // console.log(this.dataSource);
  }
  onShowSnackBar(message: any, action: any) {
    this._snackBar.open(message, action);
  }
}
