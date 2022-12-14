import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allowData = false;
  clicks = [];

  onToggle(){
    this.allowData = !this.allowData;
    this.clicks.push(new Date());
  }
}
