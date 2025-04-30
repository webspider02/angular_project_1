import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component'; // {path: 'details', component: DetailsComponent}
import { AddPatientComponent } from './add-patient/add-patient.component';
import { PatientsComponent } from './main-content/patients/patients.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { SettingsComponent } from './main-content/settings/settings.component';
import { DashboardComponent } from './main-content/dashboard/dashboard.component';
import { FinancialTradeFormComponent } from './main-content/financial-trade-form/financial-trade-form.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'financial', component: FinancialTradeFormComponent },
    { path: 'patients', component: PatientsComponent },
    { path: 'patient-detail/:id', component: PatientDetailComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'add-patient', component: AddPatientComponent },
    { path: 'details', component: DetailsComponent },
];

