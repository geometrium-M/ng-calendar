import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-general-config',
  templateUrl: './general-config.component.html',
  styleUrls: ['./general-config.component.css']
})
export class GeneralConfigComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() showTime: Boolean = true
  @Input() showTypeDayMonth: Boolean = true
  @Input() showTypeMode: Boolean = true

  @Output() updateShowTime = new EventEmitter()
  @Output() updateTypeValue = new EventEmitter()
  @Output() updateTypeMode = new EventEmitter()

  radioTimeClick() {
    this.updateShowTime.emit()
  }

  radioTypeClick() {
    this.updateTypeValue.emit()
  }

  radioModeClick() {
    this.updateTypeMode.emit()
  }


selectedType = this.showTypeDayMonth ? 'Month': 'Day'
selectedShowTime = this.showTime ? 'Yes': 'No'
selectedMode = this.showTypeMode ? 'Multi': 'Single'

optionsTime = ['Yes', 'No']
optionsType = ['Month', 'Day']
optionsMode = ['Single', 'Multi']

}
