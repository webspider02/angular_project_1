import { Component } from '@angular/core'
import { DisplayDataComponent } from './display-data/display-data.component';
import { AddPatientComponent } from './add-patient/add-patient.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DisplayDataComponent, AddPatientComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
}
