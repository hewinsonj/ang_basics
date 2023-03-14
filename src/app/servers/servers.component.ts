import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',
  // selector: '[app-servers]',
  selector: '.app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'testServer';
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000);
   }

  
    ngOnInit() {

    }
    onCreateServer() {
    this.serverCreationStatus='Server was created! Its name is ' + this.serverName ;
    console.log(this, "this is the button")
    }
    onUpdateServerName(event: any){
      console.log(event, 'this is the event dog')
      this.serverName = (<HTMLInputElement>event.target).value;
    }

}
 

