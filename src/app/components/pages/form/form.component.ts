import { CommonModule } from '@angular/common';
import { Component }from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule , CommonModule , FontAwesomeModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {

  // inputValue: any = undefined!;
  buttonSubmit: HTMLButtonElement = document.querySelector('#button') as HTMLButtonElement;
  
  // updateInputLength(event: any) {
  //   console.log(event);
  //   this.inputValue = event.target.value.length;
  // }
  
  password: string = '';
  passwordVisible: boolean = false;
  
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  loginForm!: FormGroup;
  library: FaIconLibrary = new FaIconLibrary();
  
  constructor (library: FaIconLibrary) {
    this.loginForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
      senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
    library.addIcons(faEye, faEyeSlash);
  }

  get nome() {
    return this.loginForm.get('nome')!;
  }

  get senha() {
    return this.loginForm.get('senha')!;
  }



  validationError: boolean = false;
  input :HTMLInputElement = document.querySelector('#input') as HTMLInputElement;

  resetForm () {
    this.validationError = true;

    setInterval(() => {
      this.validationError = false;
    },3000);

    this.loginForm.reset();
  }

  Submit () {
    console.log('Form submitted success!');
    
    let data = this.loginForm.value;
    console.table(data);

    this.loginForm.reset();
  }
}