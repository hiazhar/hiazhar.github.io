import { MymessageComponent } from './../mymessage/mymessage.component';
import { ProfileCardComponent } from './../profile-card/profile-card.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public about='</about>';
  public icon='</>';

  constructor( private Mydialogue: MatDialog) { }

  
  ngOnInit(): void {
  }
  openMyDialogue(){
      this.Mydialogue.open(MymessageComponent);
  }
  openAboutDialogue(){
    this.Mydialogue.open(ProfileCardComponent);
}
}
