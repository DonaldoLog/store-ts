import { Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  DoCheck,
  OnDestroy
} from '@angular/core';
import { Product } from './../product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();
  today = new Date();
  constructor() {
    console.log('1-constructior');
  }

  /* ngOnChanges(changes: SimpleChanges): void {
    console.log('2-ngonchange');
    console.log(changes);
  } */

  ngOnInit(): void {
    console.log('3-onInit');
  }

  ngDoCheck(): void {
    console.log('4-docheck');
  }

  ngOnDestroy(): void {
    console.log('5-destroy');
  }

  addCart() {
    this.productClicked.emit(this.product.id);
    console.log('Agregar al carrito');
  }
}
