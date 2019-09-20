import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/firebase.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private firebase: FirebaseService, private router: Router) { }

  updateproduct(product) {
    this.firebase.selectedproduct = product;
    this.router.navigateByUrl('product'); //with this we can navigate sto the product page
  }

  deleteproduct(product) {
    this.firebase.deleteData(product).subscribe(resData => {
      console.log(resData);
      this.firebase.getData();
    })
  }
  ngOnInit() {
    this.firebase.getData();
    console.log(this.firebase.details);
  }
}

