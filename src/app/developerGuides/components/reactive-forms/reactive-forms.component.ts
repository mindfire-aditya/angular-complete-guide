import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent implements OnInit {
  //single form control or field
  formName = new FormControl();

  //grouping form controls using FormGroup
  personalDetails = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  //nested FormGroup
  personalInfo = new FormGroup({
    name: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      country: new FormControl(''),
    }),
  });

  //generete form using formbuilder service; better than using formControl and FormGroup
  profile = this.formBuilder.group({
    name: ['', Validators.required],
    experience: [''],
    education: this.formBuilder.group({
      undergrad: [''],
      grad: [''],
    }),
  });

  //grouping form controls using FormArray
  friendsList = this.formBuilder.group({
    friends: this.formBuilder.array([this.formBuilder.control('Alok')]),
  });

  //FormBuilder service to generate form control, group and array
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    console.log(this.formName);
    this.formName.valueChanges.subscribe((change) => {
      console.log('values Changes in formName:', change);
    });

    //method to set the control's value programmatically
    //if fails then throws error
    this.formName.setValue('Aditya');

    //patchValue() to replace a property in the form model
    //if fails then no errors are thrown
    this.personalDetails.patchValue({ firstName: 'ADitya' });

    //formGroup
    console.log(this.personalDetails.controls);

    console.log(this.profile);

    console.log(this.friendsList);
  }

  onSubmit() {
    console.log(this.personalDetails.value);
  }

  addFriend() {
    this.friends.push(this.formBuilder.control(''));
  }

  get friends() {
    return this.friendsList.get('friends') as FormArray;
  }
}
