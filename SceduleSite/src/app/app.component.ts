import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SceduleSite';

  scheduleEvent!: any[];
  formData: any={};
  selectEvent: any;

  constructor(private http:HttpClient) {}

  ngOnInit(){
    this.getscheduleEvent();
  }

  onSelect(scheduleEvent: any) {
    this.selectEvent = scheduleEvent;
  }

  removeEvent(id: string){
    const postData = {"scheduleEvent" : id}
    this.http.post('http://localhost:3000/api/scheduleEvent/destroy', postData).subscribe(res =>{
      console.log(res)
    }, err =>{
      console.log(err)
    })
  }
}

addNewEvent(formData){
  this.http.post('http://localhost:3000/api/scheduleEvent/store', formData).subscribe(res => {
    console.log(res)
  }, err =>{
    console.log(err)
  })
}


getSelectEvent (){
  this.http.get('http://localhost:3000/api/scheduleEvent')
}