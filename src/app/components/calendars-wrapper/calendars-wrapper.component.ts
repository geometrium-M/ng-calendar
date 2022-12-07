import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calendars-wrapper',
  templateUrl: './calendars-wrapper.component.html',
  styleUrls: ['./calendars-wrapper.component.css']
})
export class CalendarsWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() calendarToShowingDate: Date
  @Input() calendarFromShowingDate: Date

  func() {
    console.log(this.calendarToShowingDate)

    console.log(this.calendarFromShowingDate)
  }

  

}
