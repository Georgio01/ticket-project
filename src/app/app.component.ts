import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { serverStatusComponent } from './dashboard/server-status.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,serverStatusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'ticket_project';

  dummyTrafficData=[
   { id:'d1',
    value:433,
  },

  {
    id:'d2',
    value:260,
  },
  {id:'d3',
    value:290,
  },

  {
    id:'d4',
    value:410,
  },
  {
    id:'d5',
    value:397,
  },

  {id:'d6',
    value:488,
  },

  {
    id:'d47',
    value:589,
  }

];
maxTraffic=Math.max(...this.dummyTrafficData.map((data)=>data.value));
}
