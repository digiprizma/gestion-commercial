import { Component, OnInit } from '@angular/core';
import {GestionProduitService} from '../gestion-produit.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories;
  products;
  currentGategories;
  constructor(private gestionProduitService: GestionProduitService, private router:Router) { }

  ngOnInit() {
    this.gestionProduitService.getAllCategories().subscribe( data => {
      this.categories = data;
    }, err=> {
      console.log(err);
    } );
  }

  onGetProduct(c){
    this.currentGategories=c;
    let url=c._links.products.href
   this.router.navigateByUrl("products/"+btoa(url));

  }


}
