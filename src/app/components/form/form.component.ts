import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {
  Enter() {
    console.log("Enter");
  }

  loginForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
}




// const inputText = document.getElementsByName('nome').values;
// let nome :string = "admin";
// const iconChecked :any = document.querySelector('#icon-checked');

// if (inputText != nome) {
//   alert("ERRO!");
//  } else {
//   alert("SUCESSO!");
// }

// if (inputText && iconChecked) {
//   inputText.addEventListener('input', () => {
    // const caracteres = inputText.length;

    // if (caracteres >= 6) {
    //   iconChecked.style.display = 'block';
    // } else {
    //   iconChecked.style.display = 'none';
    // }
//   });
// }