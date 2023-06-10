import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { IProduct } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [MessageService],
})
export class CarouselComponent implements OnInit {
  @Input() products!: IProduct[];
  @Output() handleClickEvent = new EventEmitter<IProduct>();

  handleClick(product: IProduct) {
    this.handleClickEvent.emit(product);
  }

  responsiveOptions!: any[];

  constructor(
    private ps: ProductsService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    // this.ps.getproducts().subscribe(({ products }) => {
    //   this.products = products.filter((product) => product.isNew === true);
    //   console.log(products);
    // });

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
  // onHandleClick(product: IProduct) {
  //   this.toggleFavorite(product);
  //   this.show();
  // }
  // toggleFavorite(product: IProduct) {
  //   console.log(product.isFavorited);

  //   const productId = product._id;
  //   const newFavoriteStatus = !product.isFavorited;

  //   this.ps
  //     .updateProductFavoriteStatus(productId, newFavoriteStatus)
  //     .subscribe(() => {
  //       // Cập nhật giá trị isFavorite trong sản phẩm sau khi cập nhật thành công trong cơ sở dữ liệu
  //       product.isFavorited = newFavoriteStatus;
  //     });
  // }

  // show() {
  //   this.messageService.add({
  //     severity: 'success',
  //     summary: 'Success',
  //     detail: 'Message Content',
  //   });
  // }
  // showError() {
  //   this.messageService.add({
  //     severity: 'error',
  //     summary: 'Error',
  //     detail: 'Message Content',
  //   });
  // }
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
