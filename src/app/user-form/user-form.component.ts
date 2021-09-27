import {
  Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../services/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnChanges {
  constructor() {}
  @Input() user: User;
  @Output() submitted = new EventEmitter();

  userForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]+$'),
    ]),
    age: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]+$'),
    ]),
    email: new FormControl('', [
      Validators.required, 
      Validators.email]),
  });

  onSubmit() {
    if (this.userForm.valid) {
      this.submitted.emit(this.userForm.value);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.user) {
      this.userForm.setValue(this.user);
    }
  }
}
