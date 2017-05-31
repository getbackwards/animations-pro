import { Component } from '@angular/core';
import {animateStateTrigger, showStateTrigger} from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    showStateTrigger,
    animateStateTrigger
  ]
})
export class AppComponent {
  isShown = false;
  width = 400;
  animate = false;
}
