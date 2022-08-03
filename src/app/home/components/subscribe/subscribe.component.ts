import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'fieldset[app-subscribe]',
  template: `
    <input
      type="email"
      [formControl]="control"
      (keyup.enter)="submit()"
      placeholder="Acompanhe nossa programação"
    />
    <button type="button" (click)="submit()">Registrar</button>
  `,
  styles: [
    `
      :host {
        display: inline-flex;
      }
    `,
  ],
})
export class SubscribeComponent {
  @Output() valueChange = new EventEmitter<string | null>();
  @Output() formSubmit = new EventEmitter<string | null>();

  control = new FormControl<string>('', [
    Validators.required,
    Validators.email,
  ]);

  ngOnInit() {
    this.control.valueChanges.subscribe((email) => {
      return this.valueChange.emit(email);
    });
  }

  submit() {
    this.formSubmit.emit(this.control.value);
  }
}
