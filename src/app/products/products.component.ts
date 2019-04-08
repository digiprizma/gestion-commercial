import { Component, OnInit } from '@angular/core';
import {GestionProduitService} from '../gestion-produit.service';
import {ActivatedRoute, NavigationEnd, Route, Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products;
  constructor(private gestionProduitService:GestionProduitService, private route:ActivatedRoute, private router:Router) {

   router.events.subscribe(event=>{
     if(event instanceof  NavigationEnd){
       let url=atob(route.snapshot.params.cat);
       this.getProducts(url);
     }
   });

  }

  ngOnInit() {
  }

  getProducts(url){
    this.gestionProduitService.getRessource(url).subscribe(data=>{
      this.products=data;
    }, err=> {
      console.log(err);
    });
  }

}
