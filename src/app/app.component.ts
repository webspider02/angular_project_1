import { Component } from '@angular/core'
import { DisplayDataComponent } from './display-data/display-data.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { SearchPatientComponent } from "./search-patient/search-patient.component";
import { PatientsLayoutComponent } from './patients-layout/patients-layout.component';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DisplayDataComponent, AddPatientComponent, SearchPatientComponent, PatientsLayoutComponent, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
}
