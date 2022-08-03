import { Component, Input } from '@angular/core';
import { TicketUser } from '../../../shared';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
})
export class TicketComponent {
  @Input() ticketUser: TicketUser | null = null;
}
