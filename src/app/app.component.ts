import { Component } from '@angular/core'
import { DisplayDataComponent } from './display-data/display-data.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DisplayDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
}
