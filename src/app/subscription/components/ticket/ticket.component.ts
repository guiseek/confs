import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TicketFacade } from '../../facades';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html'
})
export class TicketComponent {
  constructor(_route: ActivatedRoute, readonly facade: TicketFacade) {
    const { username } = _route.snapshot.params;
    facade.loadGithubUser(username);
  }
}
