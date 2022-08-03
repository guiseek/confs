import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TicketFacade } from 'src/app/subscription';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  date = new Date('05/11/2022').toLocaleDateString();

  emailControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(_route: ActivatedRoute, readonly facade: TicketFacade) {
    const defaultGithubUser = 'developerparana';
    const { username } = _route.snapshot.params;
    facade.loadGithubUser(username ?? defaultGithubUser);
  }

  emailChanges(email: string | null) {
    console.log(email);
  }

  formSubmit(event: Event) {
    console.log(event);
    event.preventDefault();
  }
}
