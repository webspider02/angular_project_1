import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-patients-layout',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './patients-layout.component.html',
  styleUrl: './patients-layout.component.scss'
})
export class PatientsLayoutComponent {

}
