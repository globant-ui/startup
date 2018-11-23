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
  arr:string[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.fragment
      .subscribe(params => {
        this.arr = params.split(/[=&]+/);
        this.access_token = this.arr[1];
        this.token_type = this.arr[3];
        console.log(this.access_token);
        console.log(this.token_type);
      })
  }
}
