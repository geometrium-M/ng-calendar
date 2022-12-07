import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

showTimeType: Boolean = true;


showTypeDayMonth: Boolean = false

showTypeMode: Boolean = true

showTypeTheme: Boolean = true
 

  name :string = 'radioColor'

  optionsTheme: Array<string> =  ['light', 'dark']

 

  selectedTheme: string =  this.showTypeTheme ? 'light': 'dark'

  updateShowTypeTheme() {
    this.showTypeTheme = !this.showTypeTheme
    document.body.classList.toggle('dark');

    
  }

}
