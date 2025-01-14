import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AddService } from '../add.service';
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
  fullName: string = '';
  amka: string = '';
  address: string = '';
  city: string = '';
  admissionDate: string = '';

  constructor(private patientService: AddService) {}

  addPatient(): void {
    if (this.fullName && this.amka && this.address && this.city && this.admissionDate) {
      const newPatient: Patient = {
        id: this.patientService.getPatients().length + 1,
        fullName: this.fullName,
        amka: this.amka,
        address: {
          street: this.address,
          city: this.city,
        },
        admissionDate: this.admissionDate,
      };

      this.patientService.addPatient(newPatient);

      this.resetForm();
      this.onCancel();
    } else {
      alert("Please fill out all fields.");
    }
  }

  removePatient(): void {
    const patientToRemove: Patient = {
      id: 0,
      fullName: this.fullName,
      amka: this.amka,
      address: {
        street: this.address,
        city: this.city,
      },
      admissionDate: this.admissionDate,
    };

    const removed = this.patientService.removePatient(patientToRemove);
    if (removed) {
      alert("Patient removed successfully.");
      this.resetForm();
    } else {
      alert("Patient not found.");
    }
  }

  private resetForm(): void {
    this.fullName = '';
    this.amka = '';
    this.address = '';
    this.city = '';
    this.admissionDate = '';
  }

  @Output() cancel=new EventEmitter<void>();

  onCancel(): void {
    this.cancel.emit();
  }
}
