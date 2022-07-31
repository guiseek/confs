import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: string | null

  constructor(
    private _route: ActivatedRoute
  ) {
    this.user = this._route.snapshot.paramMap.get('username')
  }

  ngOnInit(): void {
  }

}
