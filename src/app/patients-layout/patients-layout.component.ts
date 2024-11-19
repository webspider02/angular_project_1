import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-patients-layout',
  standalone: true,
  imports: [MatCardModule, MatSidenavModule, MatSelectModule, MatFormField, MatInput],
  templateUrl: './patients-layout.component.html',
  styleUrl: './patients-layout.component.scss'
})
export class PatientsLayoutComponent {

}
