import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { HeroSectionComponent } from "./hero-section/hero-section.component";

@Component({
  selector: 'app-dashboard',
  imports: [NavbarComponent, HeroSectionComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
