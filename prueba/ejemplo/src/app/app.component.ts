import { Component, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


signupForm: FormGroup;


constructor(
  private _builder: FormBuilder
) {
this.signupForm = this._builder.group({
email: ['', Validators.compose([Validators.email, Validators.required])],
clave: ['', Validators.required, ],
});
}

enviar(values) {
  console.log(values);
}

}
