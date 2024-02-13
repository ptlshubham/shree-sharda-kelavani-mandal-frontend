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
  yournameModel: any= {};
  
  constructor(
    public formBuilder: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    this.validationForm = this.formBuilder.group({
      yourname: ['',[Validators.required]],
      alumni: ['',[Validators.required]],
      subject: ['',[Validators.required]],
      year: ['',[Validators.required]],
      email: ['',[Validators.required]],
      call: ['',[Validators.required]],
    });
    const currentYear = new Date().getFullYear();
    const startYear =1955;
    for (let year = startYear; year <= currentYear; year++) {
      this.years.push(year);
    }
  }

  get f() {return this.validationForm.controls;}
  populateYearDropdown(): void {
    const select = document.getElementById("yearDropdown") as HTMLSelectElement;
    const currentYear = new Date().getFullYear();
    const startYear = 1955;

    for (let i = currentYear; i >= startYear; i--) {
        const option = document.createElement("option");
        option.text = i.toString();
        option.value = i.toString();
        select.add(option);
    }
}
}
