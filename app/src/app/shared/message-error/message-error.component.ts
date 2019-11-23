import { Component, Input } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-message-error',
  templateUrl: './message-error.component.html',
  styleUrls: ['./message-error.component.css']

})
export class MessageErrorComponent  {
  @Input() error: string;
  @Input() control: FormControl;
  @Input() message: string;

  temErro(): boolean {
    return this.control.hasError(this.error) && this.control.dirty;
  }
}
