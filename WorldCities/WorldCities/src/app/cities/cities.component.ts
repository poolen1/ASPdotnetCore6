import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { City } from './city';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'name', 'lat', 'lon'];
  public cities!: MatTableDataSource<City>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    console.log("get url: ", environment.baseUrl + 'api/Cities');
    this.http.get<City[]>(environment.baseUrl + 'api/Cities')
      .subscribe(result => {
          this.cities = new MatTableDataSource<City>(result);
          this.cities.paginator = this.paginator;
        },
        error => console.error(error));
  }

}
