import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Data from '@measurements/api-interfaces';

@Component({
  selector: 'measurements-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Data.DataItem[]>('/api/list');

  constructor(private http: HttpClient) {}
}
