import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {

  bevrages=['Tea','Coffee','Milk','Boost'];

  option:number=5;

  json=[
  {'name':'Rahul','age':18,'salary':233434},
  {'name':'Manju','age':80,'salary':73434},
  {'name':'Sagar','age':45,'salary':3134},
  {'name':'Charan','age':68,'salary':93344}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
