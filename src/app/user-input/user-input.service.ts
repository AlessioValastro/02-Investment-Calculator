import { Injectable } from '@angular/core';
import { UserInput } from './user-input.model';

@Injectable({ providedIn: 'root' })
export class UserInputService {
  calculateInvestmentResults(input: UserInput) {
    const annualData = [];
    let investmentValue = input.initialInvestment;

    for (let i = 0; i < input.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (input.expectedReturn / 100);
      investmentValue += interestEarnedInYear + input.annualInvestment;
      const totalInterest =
        investmentValue -
        input.annualInvestment * year -
        input.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: input.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested:
          input.initialInvestment + input.annualInvestment * year,
      });
    }
    return annualData;
  }
}
