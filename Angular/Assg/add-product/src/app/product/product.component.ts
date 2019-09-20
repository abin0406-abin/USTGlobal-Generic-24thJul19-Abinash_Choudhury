import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { FirebaseService } from 'src/firebase.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
@NgModule({
    imports:
    [
      FormsModule,
    ] 
})
export class ProductComponent implements OnInit {

  constructor(private firebase: FirebaseService, private router: Router) { }
  postProduct(productForm: NgForm) {
    if (productForm.value.id) {
      this.firebase.updateData(productForm.value).subscribe(resData => {
        console.log(resData);
        this.firebase.getData();
        productForm.reset();
        this.router.navigateByUrl('product-details');
      }, err => {
        console.log(err);
      })
    } else {
      this.firebase.postData(productForm.value).subscribe(data => {
        console.log(data);
        this.firebase.getData();
        productForm.reset();
        this.router.navigateByUrl('product-details');
      }, err => {
        console.log(err);
      })
    }
  }
  ngOnInit() {
  }

}