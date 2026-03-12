import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { ProductService } from '../../Services/product.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  product: Product | undefined;

  saved =false ;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductsById(id);
  }

  goBack(): void {
    this.router.navigate(['/prodlist']);
  }

  save(): void{
    if(this.product){
      this.productService.updateProduct(this.product)
      this.saved = true;
      setTimeout(() => (this.saved=false)), 2500;
    }
  }

}