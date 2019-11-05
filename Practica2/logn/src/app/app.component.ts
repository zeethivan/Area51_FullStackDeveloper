import { Component, Input, Output } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { EventEmitter} from 'events';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  // tslint:disable-next-line: ban-types
  visible: Boolean = true;
  // tslint:disable-next-line: ban-types
  titulo: String = 'LOG IN';




  constructor() {

  }

  cambiarVisibilidad() {
    this.visible = !this.visible;
  }

  login() {

  }

}
