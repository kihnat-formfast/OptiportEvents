import { Component, OnInit } from '@angular/core';
import { OfficeEvent } from '../../models/officeEvent';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {

  date: any;
  dateString: any;
  healthyFact: any;
  quote: any;
  song: any;
  showAddPart: boolean;
addEvent: OfficeEvent;

  constructor() {
  }

  ngOnInit() {
    console.log("Init");
    this.setDate();
    this.loadEmployees();
    this.showAddPart = false;
  }

  calculateDateString() {
    console.log("calculateDateString()");
    let d = this.date.getDate();
    let yyyy = this.date.getFullYear();

    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    this.dateString = monthNames[this.date.getMonth()] + ' ' + d + ', ' + yyyy;
  }

  setDate() {
    console.log("setDate()");
    const today = new Date();
    this.date = this.getMonday(today);
    this.calculateDateString();
  }

  getMonday(d) {
    console.log("getMonday()");
    d = new Date(d);
    let day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
    return new Date(d.setDate(diff));
  }

  changeWeek(n) {
    console.log("changeWeek() " + n);
    this.date.setDate(this.date.getDate() + n);
    this.calculateDateString();
    this.loadEmployees();
    this.showAddPart = false;
  }

  loadEmployees() {
    console.log("loadEmployees()");
    this.getHealthyFact();
    this.getQuote();
    this.getSong();
  }

  getHealthyFact() {
    console.log("getHealthyFact()");
    let today = new Date();
    if (this.date.getDate() == today.getDate() && this.date.getMonth() == today.getMonth() && this.date.getFullYear() == today.getFullYear()) {

      this.healthyFact = 'Christian';
    }
    else if (this.date > today) {
      this.healthyFact = null;
    }
    else {
      this.healthyFact = 'Kody';
    }
  }

  getQuote() {
    this.quote = 'Christian';
  }

  getSong() {
    this.song = 'Christian';
  }

  createEvent(n){
    console.log("createEvent() " + n);
    this.showAddPart = true;
  }

}
