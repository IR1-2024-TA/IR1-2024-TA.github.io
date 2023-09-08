import { AfterViewInit, Component, ViewChild, ViewEncapsulation, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [HttpClient]
})
export class DashboardComponent implements AfterViewInit{
  @Input() dataUrl: string = '';

  displayedColumns: string[] = [];
  dataEntries: any[] = [];
  dataSource: MatTableDataSource<Object>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http:HttpClient) {}

  update_table(){
    console.log(this.dataUrl)
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(this.dataEntries);
      this.getJSON().subscribe(data => {
        this.dataEntries = data;
        this.displayedColumns = this.getHeaders();
        this.dataSource.data = data
      });
    }

  public getJSON(): Observable<any> {
    return this.http.get(this.dataUrl);
  }

  getHeaders() {
    let headers: string[] = [];
    if (this.dataEntries) {
      this.dataEntries.forEach((value) => {
        Object.keys(value).forEach((key) => {
          if (!headers.find((header) => header == key)) {
            headers.push(key);
          }
        });
      });
    }
    return headers;
  }

  ngOnInit(){
    this.update_table();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
