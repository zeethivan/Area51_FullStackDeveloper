import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
// tslint:disable-next-line: component-selector
selector: 'login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent {

@Input() headline;
// tslint:disable-next-line: no-output-on-prefix
@Output() onLogging = new EventEmitter();

loguearse() {
// tslint:disable-next-line: semicolon
this.onLogging.emit() }

valorIngresado(evt) {
// tslint:disable-next-line: semicolon
console.log(evt.target.value)}

}
