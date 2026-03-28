import { Component, signal } from '@angular/core';
import { TicketItemComponent } from '../ticket-item-component/ticket-item-component.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [TicketItemComponent],
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent {

}