import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username = '';


//on click
 resetUsername() {
   if(this.username){
    return this.username = ''
   }
 }
}
