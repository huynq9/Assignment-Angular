import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { IProduct } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MessageService],
})
export class HomeComponent implements OnInit {
  products!: IProduct[];
  constructor(
    private ps: ProductsService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.ps.getproducts().subscribe(({ products }) => {
      this.products = products.filter((product) => product.isNew === true);
      console.log(products);
    });
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
  // getSeverity(status: string) {
  //   switch (status) {
  //     case 'INSTOCK':
  //       return 'success';
  //     case 'LOWSTOCK':
  //       return 'warning';
  //     case 'OUTOFSTOCK':
  //       return 'danger';
  //   }
  // }
}
