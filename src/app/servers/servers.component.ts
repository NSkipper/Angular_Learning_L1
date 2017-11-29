import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = true;
  serverCreationStatus: string = "No servers created yet!";
  serverName: string ='Test server';
  showNgIf:boolean=true;
  constructor() { 
  }
  
  ngOnInit() {
  }

  onCreationOfServer(){
    this.serverCreationStatus="A server was created. With name" + this.serverName;
    this.showNgIf=!this.showNgIf;
  }
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
