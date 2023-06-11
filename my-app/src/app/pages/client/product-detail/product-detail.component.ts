import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { IProduct } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [MessageService],
})
export class ProductDetailComponent implements OnInit {
  images!: any[];
  id!: any;
  product!: IProduct;
  responsiveOptions!: any[];
  constructor(
    private ps: ProductsService,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) {
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
  onCarouselClick(product: IProduct) {
    this.toggleFavorite(product);
    if (product.isFavorited) {
      this.showError();
    } else {
      this.show();
    }
  }
  // onHandleClick(product: IProduct) {
  //   this.toggleFavorite(product);
  //   this.show();
  // }
  toggleFavorite(product: IProduct) {
    console.log(product.isFavorited);

    const productId = product._id;
    const newFavoriteStatus = !product.isFavorited;

    this.ps
      .updateProductFavoriteStatus(productId, newFavoriteStatus)
      .subscribe(() => {
        // Cập nhật giá trị isFavorite trong sản phẩm sau khi cập nhật thành công trong cơ sở dữ liệu
        product.isFavorited = newFavoriteStatus;
      });
  }

  show() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Favorited',
    });
  }
  showError() {
    this.messageService.add({
      severity: 'error',
      summary: 'Success',
      detail: 'UnFavorited',
    });
  }
  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Message Content',
    });
  }
}
