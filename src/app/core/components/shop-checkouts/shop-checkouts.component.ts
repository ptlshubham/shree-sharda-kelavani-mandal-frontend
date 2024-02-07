import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shop-checkouts',
  templateUrl: './shop-checkouts.component.html',
  styleUrls: ['./shop-checkouts.component.css']
})

/**
 * Shop Checkout Component
 */
export class ShopCheckoutsComponent implements OnInit {

  // Set Topbar
  Menuoption = 'shop'
  footerVariant = 'footer-two';
  submit!: boolean;
  formsubmit!: boolean;

  //  Validation form
  validationform!: UntypedFormGroup;
  /***
   * Header button list show
   */
  shopPages = true;

  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {

    /**
   * Bootstrap tooltip validation form data
   */
    this.validationform = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      userName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      address: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      country: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      state: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      zip: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      cardName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      cardNo: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      expiredate: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      cvv: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    });

  }

  /**
* Bootsrap validation form submit method
*/
  validSubmit() {
    this.submit = true;
  }

  /**
   * Returns form
   */
  get form() {
    return this.validationform.controls;
  }
  
}
