import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input("child")
  fruits:string='apple';

  @Output() newFruit = new EventEmitter<String>();

  
  constructor() { }

  ngOnInit(): void {
  }

  sendData(value:string){
    this.newFruit.emit(value);
  }

}
