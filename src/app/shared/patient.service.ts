import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  // Using BehaviorSubject to store and share the selected name
  private selectedPatientName = new BehaviorSubject<string | null>(null);

  // Observable to allow components to listen for changes
  selectedPatientName$ = this.selectedPatientName.asObservable();

  // Method to update the name
  setSelectedPatientName(name: string): void {
    this.selectedPatientName.next(name);
  }
}
