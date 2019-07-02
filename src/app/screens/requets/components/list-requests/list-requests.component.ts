import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { RequestModel } from '../../models/request.model';

@Component({
  selector: 'app-list-requests',
  templateUrl: './list-requests.component.html',
  styleUrls: ['./list-requests.component.scss'],
})
export class ListRequestsComponent implements OnInit {
  displayedColumns: string[] = ['date', 'reason', 'status'];
  @Input('data') data: RequestModel[] = [];

  dataSource = new MatTableDataSource([]);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data);
    // this.dataSource.sort = this.sort;
  }
}
