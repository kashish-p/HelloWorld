import { Component } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router) {  }

  
  ngOnInit() {
  }

fill() {
  //code for loggin in user goes here
  this.router.navigate(['/input']);

}
}