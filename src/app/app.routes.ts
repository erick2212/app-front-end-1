// Imports Angular
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
// Imports Components
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './pages/product/product.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CarsComponent} from './pages/products/cars/cars.component';
import { CategoriesComponent } from './pages/products/categories/categories.component';
import { SearchComponent } from './pages/search/search.component';
import { CountrysComponent } from './pages/countrys/countrys.component';

const routes: Routes = [
    { path: 'home', component:  HomeComponent, data:{tittle: "Inicio", icon: ''}},
    { path: 'about', component: AboutComponent, data:{tittle: "About", icon: ''} },
    { path: 'Countrys', component: CountrysComponent, data:{tittle: "Countrys", icon: ''} },
    { 
        path: 'products', 
        component: ProductsComponent,
        children: [
            {path: 'cars', component: CarsComponent},
            {path: 'categories/:category', component: CategoriesComponent},
            {path: '', redirectTo: 'categories/Cars', pathMatch: 'full'},
            {path: '**', redirectTo: 'categories/Cars', pathMatch: 'full', }/////
        ] ,  data:{tittle: "Productos", icon: ''}
    },
    { path: 'product/:code/:category', component: ProductComponent },
    { path: '', redirectTo:'/home', pathMatch:'full' },
    { path: 'search/:criterio', component: SearchComponent},
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)], // el snippet pone forChild (rutas protegidas por contraseña), hay que cambiarlo por forRoot (publicas)
    exports: [RouterModule]
})
export class AppRoutingModule {}
