import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Data from '@measurements/api-interfaces';
@Component({
  selector: 'measurements-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  hello$ = this.http.get<Data.DataItem[]>('/api/list');

  constructor(private http: HttpClient) {}
}
