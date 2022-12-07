import { Component, OnInit,Input, OnChanges } from '@angular/core';

import { formatDateTitle,getAllDaysInMonth } from '../../../utils'

@Component({
  selector: 'app-date-calendar',
  templateUrl: './date-calendar.component.html',
  styleUrls: ['./date-calendar.component.css']
})
export class DateCalendarComponent implements OnInit, OnChanges {

  constructor() { }

  weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']



  showDateObj: string
  dateObjs: Array<Date>
 


  @Input() showingDate: Date
  @Input() leftArrow: Boolean
  @Input() rightArrow: Boolean

  ngOnInit(): void {
    
  }

  ngOnChanges() {
    this.showDateObj = formatDateTitle(this.showingDate)
    this.dateObjs =  getAllDaysInMonth(this.showingDate)

  }

 




 

}
