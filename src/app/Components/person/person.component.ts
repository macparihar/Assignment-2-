import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { canadianProvinces } from '../../CA Provinces and Territories/canadian-provinces';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent {
  personForm!: FormGroup;
  provinces = canadianProvinces;

  constructor(private fb: FormBuilder) {this.createForm();}
 
  createForm() {
    this.personForm = this.fb.group({
      id: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      address: ['', Validators.required],
      city: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      province: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^\\(\\d{3}\\) \\d{3}-\\d{4}$')]],
      lastUpdated: ['', Validators.required]
    });
  }

  provinceValidator(control: any) {
    if (!this.provinces.includes(control.value)) {
      return { invalidProvince: true };
    }
    return null;
  }

  onSubmit() {
    if (this.personForm.valid) {
      console.log(this.personForm.value);
      alert("Your form has been Submitted");
      this.personForm.reset()
    }
  }
}