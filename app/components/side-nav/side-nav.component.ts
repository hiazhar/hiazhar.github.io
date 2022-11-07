
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MatSidenav,MatSidenavContainer,MatSidenavContent} from '@angular/material/sidenav'

import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html' ,
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  public menu='</>'

  

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  submenu(menuitem:string) {
    if (menuitem=='articles'){
      
    }
    
  }    
}
