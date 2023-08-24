import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/HttpClient';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SceduleSite';

  scheduleEvent!: any[];
  FormData: any={};
  selectEvent: any;

  constructor(private http:HttpClient) {}
}
