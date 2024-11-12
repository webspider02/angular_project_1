import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import  { patientData }  from '../data';
import { Patient } from '../models';

@Component({
  selector: 'app-display-data',
  standalone: true,
  imports: [MatListModule, CommonModule, MatDividerModule],
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss']
})
export class DisplayDataComponent {
  patientData: Patient[] = patientData;

  trackById(index: number, patient: Patient): number {
    return patient.id;
  }

  isLast(patient: Patient): boolean {
    return this.patientData[this.patientData.length - 1] === patient;
  }
}
