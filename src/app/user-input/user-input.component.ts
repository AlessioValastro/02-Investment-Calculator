import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInputService } from './user-input.service';
import { AnnualData } from '../investment-result/annual-data.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestment = 0;
  annualInvestment = 0;
  expectedReturn = 0;
  duration = 0;
  private UserInputService = inject(UserInputService);
  @Output() data = new EventEmitter<AnnualData[]>();
  @Output() displayResults = new EventEmitter<boolean>();

  calculateInvestmentResults() {
    const display = true;
    const annualData = this.UserInputService.calculateInvestmentResults({
      initialInvestment: this.initialInvestment,
      annualInvestment: this.annualInvestment,
      expectedReturn: this.expectedReturn,
      duration: this.duration,
    });
    this.data.emit(annualData);
    this.displayResults.emit(display);
  }
}
