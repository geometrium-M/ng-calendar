import { Component, OnInit, Input, OnChanges, AfterViewInit, SimpleChanges } from '@angular/core';

import { DateInterval } from 'src/app/models/types';

import { formatDateTitle, formatDateFull } from 'src/utils';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements  OnInit, OnChanges {

  constructor() { 
 
  }

  ngOnInit(): void {
    
  }



@Input() showTime: Boolean
@Input() showTypeDayMonth: Boolean
@Input() showTypeMode: Boolean





date = new Date()


dateInterval: DateInterval = {
    from: this.date,
    to: this.date
}


  // currentDateString = this.showTypeDayMonth ? (this.dateInterval.from === this.dateInterval.to ? formatDateTitle(this.date) : 
  // `${formatDateTitle(this.dateInterval.from)} - ${formatDateTitle(this.dateInterval.to)}` ) :

  // this.dateInterval.from === this.dateInterval.to ? formatDateFull(this.date, {hideTime: !this.showTime}) :

  // `${formatDateFull(this.dateInterval.from, {hideTime: !this.showTime})} -
  //  ${formatDateFull(this.dateInterval.to, {hideTime: !this.showTime})}`



  


  calendarToShowingDate = this.date

  calendarFromShowingDate: any

  currentDateString: any



 

  



ngOnChanges() {
  let el = new Date(this.calendarToShowingDate)
    if(this.showTypeDayMonth) {
      el.setFullYear(this.calendarToShowingDate.getFullYear() - 1)
    }
    else {
      el.setMonth(this.calendarToShowingDate.getMonth() - 1)

    }
    this.calendarFromShowingDate = el


    
  this.currentDateString = this.showTypeDayMonth ? (this.dateInterval.from === this.dateInterval.to ? formatDateTitle(this.date) : 
  `${formatDateTitle(this.dateInterval.from)} - ${formatDateTitle(this.dateInterval.to)}` ) :

  this.dateInterval.from === this.dateInterval.to ? formatDateFull(this.date, {hideTime: !this.showTime}) :

  `${formatDateFull(this.dateInterval.from, {hideTime: !this.showTime})} -
   ${formatDateFull(this.dateInterval.to, {hideTime: !this.showTime})}`

    
  
}



 

  



}
