import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHeaderModule } from './../../shared';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule, FormRoutingModule, PageHeaderModule,FormsModule,ReactiveFormsModule],
    declarations: [FormComponent]
})
export class FormModule {}
