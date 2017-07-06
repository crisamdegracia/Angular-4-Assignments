import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  secret = true;
  hour = new Date().getHours()
  minute = new Date().getMinutes()
  date = new Date().toDateString()
  dateStamp = this.date + ' - ' + this.hour + ' : ' + this.minute

  arr = []
  //Button Clicks
  toggleFn(){
    this.arr.push(this.dateStamp)
    if(this.secret) {
      return this.secret = false ;
    }
    return this.secret = true ;
  }

  fifthLog() {
    return this.arr.length >= 5 ? 'blue' : 'green';

  }

}
