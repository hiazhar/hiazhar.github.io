import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
  }

 public emailshow='false'
  

  handleChange(evt:any) {
    if(evt.target.value=='Email'){
      this.emailshow='false'
    }
    else{
      this.emailshow='true'
    }


}
}
