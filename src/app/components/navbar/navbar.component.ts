import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  breadcrumb: any = {}
  constructor(private router: Router) { 
    this.getBreadcrumbs().subscribe(event => {
      this.breadcrumb = event;  
    });
  }

  ngOnInit() {
  }

  search(Criterio: string){
    this.router.navigate(['/search', Criterio])
  }

  getBreadcrumbs(){
    return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      map((event: ActivationEnd) => event.snapshot.data)
    )
  }
}
