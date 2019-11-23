import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-countrys',
  templateUrl: './countrys.component.html',
  styles: []
})
export class CountrysComponent implements OnInit {

  misdatos: any[] = [];

  constructor(private productsSvc: ProductsService) {
    this.productsSvc.getBypaises().subscribe((data: any[]) => {
      this.misdatos = data;
  })
}

  ngOnInit() {
  }

}
