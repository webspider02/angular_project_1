import { Component } from '@angular/core'
import { DisplayDataComponent } from './display-data/display-data.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { SearchPatientComponent } from "./search-patient/search-patient.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DisplayDataComponent, AddPatientComponent, SearchPatientComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
}
