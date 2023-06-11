import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  images!: any[];
  id!: any;
  product!: IProduct;
  responsiveOptions!: any[];
  constructor(private ps: ProductsService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((param) => {
      this.id = param.get('id')!;
      this.ps.getproduct(this.id).subscribe((data: any) => {
        // Sản phẩm dựa theo ID
        this.product = data.product;
      });
    });
  }

  ngOnInit() {
    this.ps
      .getproduct(this.id)
      .subscribe((product) => (this.images = product.image));
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5,
      },
      {
        breakpoint: '768px',
        numVisible: 3,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
      },
    ];
  }
}
