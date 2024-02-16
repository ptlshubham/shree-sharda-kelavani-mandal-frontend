import { Component } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrl: './alumni.component.css'
})
export class AlumniComponent {
  Menuoption = 'center';
  Settingicon = true;
  years: number[] = [];
  validationForm!: FormGroup;
  isUpdate: boolean = false;
  resigtrationmodel: any = {};

  constructor(
    public formBuilder: UntypedFormBuilder
  ) {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 1963; year--) {
      this.years.push(year);
    }
  }

  ngOnInit(): void {
    this.validationForm = this.formBuilder.group({
      yourname: ['', [Validators.required]],
      alumni: ['', [Validators.required]],
      course: ['', [Validators.required]],
      year: ['', [Validators.required]],
      email: ['', [Validators.required]],
      call: ['', [Validators.required]],
    });

  }

  get f() { return this.validationForm.controls; }

}
