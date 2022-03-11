import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  flag:boolean=true;
 change()
 {
   if(this.flag)
   {
     this.flag=!this.flag;
   }
   else{
     this.flag=!this.flag;
   }
 }


}
