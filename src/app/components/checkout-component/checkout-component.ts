import { Component, signal, computed } from '@angular/core';
import { TicketItemComponent } from '../ticket-item-component/ticket-item-component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [TicketItemComponent, CommonModule],
  templateUrl: './checkout-component.html',
  styleUrl: './checkout-component.css',
})
export class CheckoutComponent {
  qtd = signal(1);
  mensagemStatus = signal('Aguardando finalização do pedido...');
  cancelado = signal(false);

  onCancelamento() {
    this.mensagemStatus.set('Pedido cancelado.');
    this.cancelado.set(true);
  }

  total() {
    return this.qtd() * 150;
  }
}