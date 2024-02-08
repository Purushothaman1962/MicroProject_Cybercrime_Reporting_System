import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crs';
  flag:boolean=true;
  flag1:boolean=false;
  constructor(private router:Router){

  }

  // isExpanded = true;
  // showSubmenu: boolean = false;
  // isShowing = false;
  // showSubSubMenu: boolean = false;

  // mouseenter() {
  //   if (!this.isExpanded) {
  //     this.isShowing = true;
  //   }
  // }

  // mouseleave() {
  //   if (!this.isExpanded) {
  //     this.isShowing = false;
  //   }
  // }

  route(){
    this.flag=!this.flag;
    this.flag1=!this.flag1;
    this.router.navigate(['/Login'])
  }

  route1(){
    this.flag=!this.flag;
    this.flag1=!this.flag1;
    this.router.navigate(['/Register'])
  }
}
