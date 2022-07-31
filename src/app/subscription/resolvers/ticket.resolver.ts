import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { TicketService } from '../services';
import { GithubUser } from '../../shared';

@Injectable({
  providedIn: 'root',
})
export class TicketResolver implements Resolve<GithubUser> {
  constructor(private _service: TicketService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const username = route.paramMap.get('username');
    return this._service.getGithubUser(`${username}`);
  }
}
