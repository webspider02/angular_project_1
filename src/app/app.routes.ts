import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component'; 
import { AddPatientComponent } from './add-patient/add-patient.component';
import { PatientsComponent } from './main-content/patients/patients.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { SettingsComponent } from './main-content/settings/settings.component';
import { DashboardComponent } from './main-content/dashboard/dashboard.component';
import { FinancialTradeFormComponent } from './main-content/financial-trade-form/financial-trade-form.component';
import { FinancialTradesDetailsComponent } from './main-content/financial-trade-form/financial-trade-details/financial-trade-details.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent, title: 'Dashboard' },
    { 
        path: 'trader', 
        component: FinancialTradeFormComponent,
        // children: [
        //     { 
        //         path: 'trader/:id', 
        //         // loadComponent: () => import('./main-content/financial-trade-form/financial-trade-details/financial-trade-details.component'),
        //         component: FinancialTradesDetailsComponent 
        //     },
        // ],
        title: 'Trades'
    },
    { 
        path: 'trader/:id', 
        loadComponent: () =>
            import('./main-content/financial-trade-form/financial-trade-details/financial-trade-details.component')
              .then(m => m.FinancialTradesDetailsComponent),
        title: 'Trader Details'
        // component: FinancialTradesDetailsComponent 
    }, // { path: 'trader-detail/:id', }
    { path: 'patients', component: PatientsComponent },
    { path: 'patient-detail/:id', component: PatientDetailComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'add-patient', component: AddPatientComponent },
    { path: 'details', component: DetailsComponent },
];

