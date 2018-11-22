import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Router, NavigationCancel } from '@angular/router';
import { URLSearchParams, } from '@angular/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  access_token:string;
  token_type:string;

  constructor(private route: Router) { }

  ngOnInit() {
    this.route.events
    .subscribe((test) => {
        if (test instanceof NavigationCancel) {
          let params = new URLSearchParams(test.url.split('#')[1]);
          this.access_token = params.get('access_token');
          this.token_type = params.get('code');
          console.log(this.access_token);
          console.log(this.token_type);
        }
      });
  }
}
