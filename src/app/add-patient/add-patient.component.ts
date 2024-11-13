import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {  patientData } from '../data';
import { Patient } from '../models';

@Component({
  selector: 'app-add-patient',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatButtonModule, FormsModule ],
  templateUrl: './add-patient.component.html',
  styleUrl: './add-patient.component.scss'
})
export class AddPatientComponent {
  patientList: Patient[] = patientData;

  fullName: string = '';
  amka: string = '';
  address: string = '';
  city: string = '';
  admissionDate: string = '';

  addPatient(): void {
    if (this.fullName && this.amka && this.address && this.city && this.admissionDate) {
      const newPatient: Patient = {
        id: this.patientList.length + 1,
        fullName: this.fullName,
        amka: this.amka,
        address: {
          street: this.address,
          city: this.city,
        },
        admissionDate: this.admissionDate,
      };

      this.patientList.push(newPatient);
      this.resetForm();
    } else {
      alert("Please fill out all fields.");
    }
  }

  private resetForm(): void {
    this.fullName = '';
    this.amka = '';
    this.address = '';
    this.city = '';
    this.admissionDate = '';
  }
}
