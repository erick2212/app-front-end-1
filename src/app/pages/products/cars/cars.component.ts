import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/models';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styles: []
})
export class CarsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  redirect(precio: number){
    //validar
  }

}