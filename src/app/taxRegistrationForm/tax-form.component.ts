import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'tax-form',
  templateUrl: './tax-form.component.html',
  styleUrls: ['./tax-form.component.css']
})
export class TaxFormComponent  {
  constructor(private http: HttpClient) {
  }
  is80Cvisible= false;
  taxForm = new FormGroup({
    basicSalary: new FormControl('', [Validators.required]),
    fixedSalary: new FormControl('', Validators.required),
    houseRentAllowance: new FormControl('', [Validators.required]),
    leaveTravelAllowance: new FormControl('', [Validators.required]),
   
    dearnessAllowance: new FormControl('', Validators.required),
    flexiSalary: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    nationalPensionScheme: new FormControl('', Validators.required),
    taxRegimeOption : new FormControl('', Validators.required),
    taxPayer : new FormControl('', Validators.required)
,
//80 c 
    investment80C : new FormControl('', Validators.required),
    insurancePremium80CCC : new FormControl('', Validators.required),
    pensionContribution80CCD : new FormControl('', Validators.required),
    interestOnSavingAccount80TTA : new FormControl('', Validators.required),
     houseRentPaid80GG  : new FormControl('', Validators.required),
    interestOnEducationLoan80E : new FormControl('', Validators.required),

    interestOnHomeLoan80EE : new FormControl('', Validators.required),

    medicalInsurance80D : new FormControl('', Validators.required),

    disabledDependent80DD : new FormControl('', Validators.required),

     medicalExpenditure80DDB : new FormControl('', Validators.required),

     physicalDisability80U : new FormControl('', Validators.required),

     donations80G : new FormControl('', Validators.required),

     companyContribution80GGB : new FormControl('', Validators.required),

    contributionToPoliticalParties80GGC : new FormControl('', Validators.required),

    royaltyOfPatent80RRB : new FormControl('', Validators.required),

     interestIncome80TTB : new FormControl('', Validators.required),
    // standardDeduction: new FormControl('', Validators.required),
    // netTaxable: new FormControl('', Validators.required),
    // incomeLossHouseProperty: new FormControl('', Validators.required),
    // nsc: new FormControl('', Validators.required),
    // incomeOtherSources: new FormControl('', Validators.required),
    // intrestFromSavingsBank: new FormControl('', Validators.required),
    // intrestsOnFixedDeposits: new FormControl('', Validators.required),
    // grossTotalIncome: new FormControl('', Validators.required),
    // lessChapter4A: new FormControl('', Validators.required),
    // taxableIncome: new FormControl('', Validators.required),
    // taxPayable: new FormControl('', Validators.required),
    // taxAfterRebate: new FormControl('', Validators.required),
    // lessRebate87: new FormControl('', Validators.required),
    // addSurcharge: new FormControl('', Validators.required),
    // taxAfterSurcharge: new FormControl('', Validators.required),
    // addEduCess: new FormControl('', Validators.required),
    // totalTaxPayable: new FormControl('', Validators.required),
    // lessTdsPreviousMonth: new FormControl('', Validators.required),
    // lessTdsPreviousEmp: new FormControl('', Validators.required),
    // esop: new FormControl('', Validators.required),
    // balanceTaxPayable: new FormControl('', Validators.required),
    // oneTimeTax: new FormControl('', Validators.required),
    // avgMonthlyTax: new FormControl('', Validators.required),
    // finalTaxDeduction: new FormControl('', Validators.required)
  
  });

  onSubmit(): void {
    const val = this.taxForm.value;
    let bodyString = JSON.stringify({  basicSalary: val.basicSalary,  houseRentAllowance: val.houseRentAllowance,  flexiSalary: val.flexiSalary, 
      fixedSalary:val.fixedSalary,leaveTravelAllowance:val.leaveTravelAllowance,dearnessAllowance:val.dearnessAllowance,age:val.age,
      nationalPensionScheme:val.nationalPensionScheme,taxRegimeOption:val.taxRegimeOption ,taxPayer:val.taxPayer,
      investment80C:val.investment80C,
      insurancePremium80CCC : val.insurancePremium80CCC,
      pensionContribution80CCD : val.pensionContribution80CCD,
      interestOnSavingAccount80TTA : val.interestOnSavingAccount80TTA,
       houseRentPaid80GG  : val.houseRentPaid80GG,
      interestOnEducationLoan80E : val.interestOnEducationLoan80E,
  
      interestOnHomeLoan80EE : val.interestOnHomeLoan80EE,
  
      medicalInsurance80D : val.medicalInsurance80D,
  
      disabledDependent80DD : val.disabledDependent80DD,
  
       medicalExpenditure80DDB : val.medicalExpenditure80DDB,
  
       physicalDisability80U : val.physicalDisability80U,
  
       donations80G : val.donations80G,
  
       companyContribution80GGB : val.companyContribution80GGB,
  
      contributionToPoliticalParties80GGC : val.contributionToPoliticalParties80GGC,
  
      royaltyOfPatent80RRB : val.royaltyOfPatent80RRB,
  
       interestIncome80TTB : val.interestIncome80TTB,
    });
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
   this.http.post('https://tax-invoice-service.onrender.com/income-tax/calculate-tax', bodyString, { headers })
      .subscribe(response => {
          console.info(response);
      });
  }
  open() {
   this.is80Cvisible=true;
  }
  close() {
    this.is80Cvisible=false;
   }
 
}
