import { Component, ViewEncapsulation } from '@angular/core';
import { DashboardComponent } from './dashboard';

@Component({
  selector: 'app-root', // <app-root>
  templateUrl: 'app.component.html',
  styleUrls: ['bootstrap.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [DashboardComponent]
})
export class AppComponent {
  title = 'app works!';
  message = 'Wann ist Angular 2 endlich stabil? :)';
}
