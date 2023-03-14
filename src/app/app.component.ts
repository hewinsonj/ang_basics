import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  // styleUrls: ['./app.component.css']
  styles: [`
    h1 {
      color: dodgerblue;
    }
    `]
})
export class AppComponent {
  title = 'ang_basics';
  username = '';
  showing = true;
  timesTried = 0;
  log: Date[] = [];
  toggleShowing() {
    this.showing === true ? this.showing = false : (this.showing = true) && (this.timesTried += 1);
    // this.log.push(this.log.length);
    this.log.push(new Date());
    
    }
  getColor() {
    return this.timesTried > 5 ? 'blue' : 'yellow'
  }
}
