import { Component, Input } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultComponent } from './investment-result/investment-result.component';
import { AnnualData } from './investment-result/annual-data.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultComponent],
})
export class AppComponent {
  displayResults: boolean = false;
  annualData?: AnnualData[];

  onDataCalculated(data: AnnualData[]) {
    this.annualData = data;
  }
  onDisplayResults(display:boolean){
    this.displayResults = display
  }
}
