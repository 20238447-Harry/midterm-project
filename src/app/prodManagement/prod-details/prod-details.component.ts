import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product';
import { ProductService } from '../../Services/product.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-prod-details',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './prod-details.component.html',
  styleUrl: './prod-details.component.css'
})
export class ProdetailsComponent implements OnInit{
    product: Product | undefined;
    saved =false ;
    errorMessage = '';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductsById(id);
  }


  
}
