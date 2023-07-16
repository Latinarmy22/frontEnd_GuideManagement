import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  userMostGuides: string = 'Pablo Rada'
  totalGuidesUser: string  = '7'

  vehicleMostUsed: string = 'Moto'
  vehicleMostUsedTotal: string = '4'
}
