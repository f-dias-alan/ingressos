import { Component, input, output, model, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

const CUPONS_VALIDOS: Record<string, number> = {
  'ANGULAR10': 10,
  'CONF2026': 20,
  'DESCONTO50': 50,
};

@Component({
  selector: 'app-ticket-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket-item-component.html',
  styleUrl: './ticket-item-component.css',
})
export class TicketItemComponent {
  nomedoEvento = input.required<string>();
  quantidade = model<number>(1);
  cancelar = output<void>();
  cupomMsg = signal('');

  incrementar() {
    this.quantidade.update(q => q + 1);
  }

  decrementar() {
    this.quantidade.update(q => q > 1 ? q - 1 : 1);
  }

  solicitarCancelamento() {
    this.cancelar.emit();
  }

  buscarCupom(event: Event) {
    const input = event.target as HTMLInputElement;
    this.aplicarCupom(input.value);
  }

  buscarCupomClick(input: HTMLInputElement) {
    this.aplicarCupom(input.value);
  }

  private aplicarCupom(valor: string) {
    const codigo = valor.trim().toUpperCase();
    if (!codigo) {
      this.cupomMsg.set('⚠️ Digite um código de cupom.');
      return;
    }
    if (CUPONS_VALIDOS[codigo]) {
      this.cupomMsg.set(`✅ Cupom aplicado! ${CUPONS_VALIDOS[codigo]}% de desconto.`);
    } else {
      this.cupomMsg.set('❌ Cupom inválido ou expirado.');
    }
  }
}