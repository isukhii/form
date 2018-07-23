import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  quesno='first';
  disabledbutton=false;
  abledbutton=true;
  val:string;
  countno:number;
  count:string='';
  myStyle={
    'display': 'flex',
    'height': '3px',
    'overflow': 'hidden',
    'font-size': '.75rem',
    'width':'100px',
    'transition': 'width .6s ease'
  };
  next()
  {
    this.val='';
    this.disabledbutton=true;
    this.quesno='second';
    this.abledbutton=false;
    this.countno=100-this.val.length;
    this.count=this.countno+' chars more to go...';
    this.myStyle= 
  { 
    'display': 'flex',
    'height': '3px',
    'overflow': 'hidden',
    'font-size': '1rem',
    'width':'300px',
    'transition': 'width .6s ease'
  };
  }
  
  prev()
  {
    this.myStyle={
      'display': 'flex',
      'height': '3px',
      'overflow': 'hidden',
      'font-size': '.75rem',
      'width':'100px',
      'transition': 'width .6s ease'
    };
    this.val='';
    this.disabledbutton=false;
    this.quesno='first';
    this.abledbutton=true;
    this.count='';

  }
 cc()
 {
   if(this.disabledbutton)
   {
  this.countno=100-this.val.length;
  this.count=this.countno+' chars more to go...';
   }
 }
}
