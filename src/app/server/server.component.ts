import { templateSourceUrl } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'online';

  getServerStatus(): string {
    return this.serverStatus;
  }
}
