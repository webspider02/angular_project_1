import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, Router } from '@angular/router';
import { PatientService } from '../patient.service';
import { AddPatientComponent } from '../add-patient/add-patient.component';
import { PatientDetailComponent } from '../patient-detail/patient-detail.component';
import  { patientData }  from '../data';
import { Patient } from '../models';

@Component({
  selector: 'app-display-data',
  standalone: true,
  imports: [
    RouterModule,
    RouterLink,
    MatTableModule,
    MatListModule,
    CommonModule,
    MatDividerModule,
    PatientDetailComponent,
    AddPatientComponent
  ],
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss']
})
export class DisplayDataComponent {
  patientData: Patient[] = patientData;

  selectedPatient: Patient | null = null;

  @Input() searchTerm: string = '';
  filteredPatients: Patient[] = [...this.patientData]; 

  currentPage: number = 1; // Current page
  itemsPerPage: number = 5; // Items per page

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchTerm']) {
      this.filterPatients();
    }
  }

  get paginatedPatients(): Patient[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredPatients.slice(startIndex, startIndex + this.itemsPerPage);
  }

  filterPatients(): void {
    const lowercasedTerm = this.searchTerm.toLowerCase();
    this.filteredPatients = this.patientData.filter(patient =>
      patient.fullName.toLowerCase().includes(lowercasedTerm)
    );
    this.currentPage = 1;
  }

  openModal(patient: Patient): void {
    this.selectedPatient = patient;
    const modal = document.getElementById('edit-modal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  closeModal(): void {
    const modal = document.getElementById('edit-modal');
    if (modal) {
      modal.style.display = 'none';
    }
    this.selectedPatient = null;
  }

  delete(patient: Patient): void {
    const index = this.patientData.findIndex(p => p.id === patient.id);
    if (index !== -1) {
      this.patientData.splice(index, 1);
    }
  }

  goToPage(page: number): void {
    this.currentPage = page;
  }

  get totalPages(): number {
    return Math.ceil(this.filteredPatients.length / this.itemsPerPage);
  }
}
