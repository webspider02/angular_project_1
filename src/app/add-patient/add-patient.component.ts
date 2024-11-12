import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { patientData } from '../data';
import { Patient } from '../models';

@Component({
  selector: 'app-add-patient',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatButtonModule],
  templateUrl: './add-patient.component.html',
  styleUrl: './add-patient.component.scss'
})
export class AddPatientComponent {
  patient: Patient[] = patientData;
}
