import { Routes } from '@angular/router';
import { DisplayDataComponent } from './display-data/display-data.component';
import { SearchPatientComponent } from './search-patient/search-patient.component';
import { AddPatientComponent } from './add-patient/add-patient.component';

export const routes: Routes = [
    {
        path: 'display-data',
        // redirectTo: '/display-data',
        component: DisplayDataComponent,
    },
    {
        path: 'search-patient',
        // redirectTo: '/search-patient',
        component: SearchPatientComponent,
    },
    {
        path: 'add-patient',
        // redirectTo: '/add-patient',
        component: AddPatientComponent,
    },
];

