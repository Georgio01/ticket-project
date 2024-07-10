import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { serverStatusComponent } from './dashboard/server-status/server-status.component';
import { TrafficComponent } from './traffic/traffic.component';
import { TicketsComponent } from './tickets/tickets.component';
import { DashboardItemComponent } from './dashboard-item/dashboard-item.component';
import { DashboardNewTicketComponent } from './tickets/new-ticket/new-ticket.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    serverStatusComponent,
    TrafficComponent,
    TicketsComponent,
    DashboardItemComponent,
    DashboardNewTicketComponent,
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'ticket_project';

}
