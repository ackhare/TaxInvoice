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

  taxForm = new FormGroup({
    basicSalary: new FormControl('', [Validators.required]),
    houseRentAllowance: new FormControl('', [Validators.required]),
    specialAllowance: new FormControl('', [Validators.required]),
    fixedSalary: new FormControl('', Validators.required),
    exemptionUs10: new FormControl('', Validators.required),
    netSalary: new FormControl('', Validators.required),
    lessDeductionUs16: new FormControl('', Validators.required),
    professionalTax: new FormControl('', Validators.required),
    standardDeduction: new FormControl('', Validators.required),
    netTaxable: new FormControl('', Validators.required),
    incomeLossHouseProperty: new FormControl('', Validators.required),
    nsc: new FormControl('', Validators.required),
    incomeOtherSources: new FormControl('', Validators.required),
    intrestFromSavingsBank: new FormControl('', Validators.required),
    intrestsOnFixedDeposits: new FormControl('', Validators.required),
    grossTotalIncome: new FormControl('', Validators.required),
    lessChapter4A: new FormControl('', Validators.required),
    taxableIncome: new FormControl('', Validators.required),
    taxPayable: new FormControl('', Validators.required),
    taxAfterRebate: new FormControl('', Validators.required),
    lessRebate87: new FormControl('', Validators.required),
    addSurcharge: new FormControl('', Validators.required),
    taxAfterSurcharge: new FormControl('', Validators.required),
    addEduCess: new FormControl('', Validators.required),
    totalTaxPayable: new FormControl('', Validators.required),
    lessTdsPreviousMonth: new FormControl('', Validators.required),
    lessTdsPreviousEmp: new FormControl('', Validators.required),
    esop: new FormControl('', Validators.required),
    balanceTaxPayable: new FormControl('', Validators.required),
    oneTimeTax: new FormControl('', Validators.required),
    avgMonthlyTax: new FormControl('', Validators.required),
    finalTaxDeduction: new FormControl('', Validators.required)
  
  });

  onSubmit(): void {
    const val = this.taxForm.value;
    let bodyString = JSON.stringify({  basicSalary: val.basicSalary,  houseRentAllowance: val.houseRentAllowance,  specialAllowance: val.specialAllowance, 
      fixedSalary:val.fixedSalary,exemptionUs10:val.exemptionUs10,netSalary:val.netSalary,lessDeductionUs16:val.lessDeductionUs16,
      professionalTax:val.professionalTax,standardDeduction:val.standardDeduction,netTaxable:val.netTaxable,
      incomeLossHouseProperty:val.incomeLossHouseProperty,nsc:val.nsc,incomeOtherSources:val.incomeOtherSources,
      intrestFromSavingsBank:val.intrestFromSavingsBank,intrestsOnFixedDeposits:val.intrestsOnFixedDeposits,
      grossTotalIncome:val.grossTotalIncome,lessChapter4A:val.lessChapter4A,taxableIncome:val.taxableIncome,
      taxPayable:val.taxPayable,taxAfterRebate:val.taxAfterRebate,lessRebate87:val.lessRebate87,
      addSurcharge:val.addSurcharge,taxAfterSurcharge:val.taxAfterSurcharge,addEduCess:val.addEduCess,
      totalTaxPayable:val.totalTaxPayable,lessTdsPreviousMonth:val.lessTdsPreviousMonth,
      lessTdsPreviousEmp:val.lessTdsPreviousEmp,esop:val.lessTdsPreviousEmp,balanceTaxPayable:val.balanceTaxPayable,
      oneTimeTax:val.oneTimeTax,avgMonthlyTax:val.avgMonthlyTax,finalTaxDeduction:val.finalTaxDeduction
    });
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
   this.http.post('https://tax-invoice-service.onrender.com/income-tax/calculate-tax', bodyString, { headers })
      .subscribe(response => {
          console.info(response);
      });
  }

}
