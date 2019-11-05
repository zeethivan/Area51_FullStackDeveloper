import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AppComponent } from '../app.component';

@Component({

// tslint:disable-next-line: component-selector
selector: 'login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent extends AppComponent {

signupForm: FormGroup;


constructor(

    private _builder: FormBuilder
  ) {
  super();
  this.signupForm = this._builder.group({
  email: ['', Validators.compose([Validators.email, Validators.required])],
  password: ['', Validators.required, ],
  });
  }

  get email() { return this.signupForm.get('email'); }
  get password() { return this.signupForm.get('password'); }

@Input() headline;
// tslint:disable-next-line: no-output-on-prefix
@Output() onLogging = new EventEmitter();


loguearse() {
// tslint:disable-next-line: semicolon
this.onLogging.emit() }


valorIngresado(evt) {
// tslint:disable-next-line: semicolon
console.log(evt.target.value)}


enviar(values) {
  console.log(values);
}

validForm() {

  // tslint:disable-next-line: triple-equals
  if (this.email.value == 'ivan@gmail.com' && this.password.value == '123456' ) {
    this.cambiarVisibilidad();
    console.log('valid');
  } else {
    console.log('error');
    this.signupForm.reset();
  }

}
}
