
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/models/models';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styles: []
})
export class CategoriesComponent implements OnInit {

  misDatos: ProductModel[] = [];
  category: string = '';
  constructor(private router: ActivatedRoute, private productSvc: ProductsService, private route2: Router) { 
    this.router.params.subscribe(params => {
      this.category = params['category'];
      this.productSvc.getByCategory(this.category).subscribe((data: ProductModel[]) => {
        this.misDatos = data;
      })
      //console.log('PARAM', category);
    })
  }
  ngOnInit() {
  }
  metodoCat(event: number){
    console.log(event);
    this.route2.navigate(['/home']);
  }
}