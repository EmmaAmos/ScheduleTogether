import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SceduleSite';
  scheduleEvent: any[] = [];
  formData: any = {};
  selectEvent: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getscheduleEvent();  // Corrected the method call here
  }

  onSelect(scheduleEvent: any) {
    this.selectEvent = scheduleEvent;
  }

  removeEvent(id: string) {
    const postData = { "scheduleEvent": id };
    this.http.post('http://localhost:3000/api/scheduleEvent/destroy', postData).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  addEvent(formData) {
    this.http.post('http://localhost:3000/api/scheduleEvent/store', formData).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  getscheduleEvent() {
    this.http.get('http://localhost:3000/api/scheduleEvent').subscribe(
      data => {
        this.scheduleEvent = Object.values(data);
        this.scheduleEvent = this.scheduleEvent[0];
      }
    );
  }

  updateEvent(id: string) {
    const putData = {
      "eventID": id,
      "name": this.scheduleEvent.name,
      "event": this.scheduleEvent.event,
      "date": this.scheduleEvent.date,
    };
    this.http.post('http://localhost:3000/api/scheduleEvent/update', putData).subscribe(
      res => {
        this.selectEvent = null;
      },
      err => {
        console.log(err);
      }
    );
  }
}
