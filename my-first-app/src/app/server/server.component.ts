import { Component } from "@angular/core";

@Component({
selector:'app-server',
templateUrl:'./server.component.html',
styles:[`
.online{
color:white;


}


`]

})
export class ServerComponent 
{
  serverId :number =8;
  serverStatus: string ='UP';

  constructor()
  {

    this.serverStatus =Math.random()>.5? 'online' :'ofline';
  }

  getColor()
  {
    return this.serverStatus==='online' ?'green' :'red';
  }

}