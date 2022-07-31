import { HttpClient } from '@angular/common/http';

import { TicketService } from './ticket.service';
import { GithubUser } from '../../shared';

export class TicketProdService implements TicketService {
  constructor(private _http: HttpClient) {}

  getGithubUser(username: string) {
    return this._http.get<GithubUser>(
      `https://api.github.com/users/${username}`
    );
  }
}
