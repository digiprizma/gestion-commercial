import { Component, OnInit } from '@angular/core';
import {GestionProduitService} from '../gestion-produit.service';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {

  currentCategorie;
  categories;
  node='list';

  constructor(private gestionProductService:GestionProduitService,private loginService:LoginService) { }

  ngOnInit() {
  this.onGetAllCategories();
  }

  onGetAllCategories(){
    this.gestionProductService.getAllCategories().subscribe(data=>{
      this.categories=data;
    }, err=>{
      console.log(err);
    });
  }

  onDelete(c) {
    let confir= confirm("Etes vous sure de vouloir supprimer la categorie :"+c.name);
    if(!confir) return;
    this.gestionProductService.deleteRessource(c._links.self.href).subscribe(data=>{
      this.onGetAllCategories();
    },err=>{
      console.log(err);
    });
  }

  onNewCategories() {
    this.node="newcat";
  }

  onSaveCategorie(cat) {
    console.log(cat);
    let url = this.gestionProductService.uri+"/categories";
    this.gestionProductService.postRessource(url,cat).subscribe(data=>{
      this.node='list';
      this.onGetAllCategories();
    },err=>{

    });
  }

  onEdit(cat) {
    this.gestionProductService.getRessource(cat._links.self.href).subscribe(data=>{
      this.currentCategorie=data;
      this.node='editcat';
    },err=>{
      console.log(err);
    });
  }

  onEditCategorie(cat) {
    console.log(cat);
    let url = this.currentCategorie._links.self.href;
    this.gestionProductService.patchRessource(url,cat).subscribe(data=>{
      this.node='list';
      this.onGetAllCategories();
    },err=>{

    });
  }

  isAuthenticated(){
    return this.loginService.isAuthenticated();
  }
}
