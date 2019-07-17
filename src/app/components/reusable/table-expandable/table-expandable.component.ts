import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TableExpandableDataSource } from './table-expandable-datasource';

@Component({
  selector: 'app-table-expandable',
  templateUrl: './table-expandable.component.html',
  styleUrls: ['./table-expandable.component.css']
})
export class TableExpandableComponent implements AfterViewInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  dataSource: TableExpandableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngAfterViewInit() {
    this.dataSource = new TableExpandableDataSource(this.paginator, this.sort);
  }
}
