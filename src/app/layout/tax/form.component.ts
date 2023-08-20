import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent {
    constructor(private http: HttpClient) {
    }
    is80Cvisible= false;
    taxForm = new FormGroup({
      basicSalary: new FormControl(''),
      fixedSalary: new FormControl('',[Validators.required]),
      houseRentAllowance: new FormControl('', [Validators.required]),
      leaveTravelAllowance: new FormControl(''),
     
      dearnessAllowance: new FormControl(''),
      flexiSalary: new FormControl(''),
      age: new FormControl('',Validators.required),
      nationalPensionScheme: new FormControl(''),
      taxRegimeOption : new FormControl('', Validators.required),
      taxPayer : new FormControl('', Validators.required)
  ,
  //80 c 
      investment80C : new FormControl(''),
      insurancePremium80CCC : new FormControl(''),
      pensionContribution80CCD : new FormControl(''),
      interestOnSavingAccount80TTA : new FormControl(''),
       houseRentPaid80GG  : new FormControl(''),
      interestOnEducationLoan80E : new FormControl(''),
  
      interestOnHomeLoan80EE : new FormControl(''),
  
      medicalInsurance80D : new FormControl(''),
  
      disabledDependent80DD : new FormControl(''),
  
       medicalExpenditure80DDB : new FormControl(''),
  
       physicalDisability80U : new FormControl(''),
  
       donations80G : new FormControl(''),
  
       companyContribution80GGB : new FormControl(''),
  
      contributionToPoliticalParties80GGC : new FormControl(''),
  
      royaltyOfPatent80RRB : new FormControl(''),
  
       interestIncome80TTB : new FormControl(''),
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
      let bodyString = JSON.stringify({  basicSalary: parseFloat(val.basicSalary!),  houseRentAllowance:  parseFloat(val.houseRentAllowance!),  flexiSalary:  parseFloat(val.flexiSalary!), 
        fixedSalary: parseFloat(val.fixedSalary!),leaveTravelAllowance: parseFloat(val.leaveTravelAllowance!),dearnessAllowance: parseFloat(val.dearnessAllowance!),age:parseFloat(val.age!),
        nationalPensionScheme:parseFloat(val.nationalPensionScheme!),taxRegimeOption:val.taxRegimeOption ,taxPayer:val.taxPayer,
        investment80C:parseFloat(val.investment80C!),
        insurancePremium80CCC : parseFloat(val.insurancePremium80CCC!),
        pensionContribution80CCD : parseFloat(val.pensionContribution80CCD!),
        interestOnSavingAccount80TTA : parseFloat(val.interestOnSavingAccount80TTA!),
         houseRentPaid80GG  : parseFloat(val.houseRentPaid80GG!),
        interestOnEducationLoan80E : parseFloat(val.interestOnEducationLoan80E!),
    
        interestOnHomeLoan80EE : parseFloat(val.interestOnHomeLoan80EE!),
    
        medicalInsurance80D : parseFloat(val.medicalInsurance80D!),
    
        disabledDependent80DD : parseFloat(val.disabledDependent80DD!),
    
         medicalExpenditure80DDB : parseFloat(val.medicalExpenditure80DDB!),
    
         physicalDisability80U : parseFloat(val.physicalDisability80U!),
    
         donations80G : parseFloat(val.donations80G!),
    
         companyContribution80GGB : parseFloat(val.companyContribution80GGB!),
    
        contributionToPoliticalParties80GGC : parseFloat(val.contributionToPoliticalParties80GGC!),
    
        royaltyOfPatent80RRB : parseFloat(val.royaltyOfPatent80RRB!),
    
         interestIncome80TTB : parseFloat(val.interestIncome80TTB!),
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
  