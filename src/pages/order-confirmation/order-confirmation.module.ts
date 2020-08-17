import { OrderConfirmationPage } from './order-confirmation';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { PedidoService } from '../../services/domain/pedido.service';

@NgModule({
  declarations: [
    OrderConfirmationPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderConfirmationPage),
  ],
  providers: [
    PedidoService
  ]
})
export class OrderConfirmationPageModule {}