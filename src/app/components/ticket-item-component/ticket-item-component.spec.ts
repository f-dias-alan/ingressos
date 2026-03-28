import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TicketItemComponent } from './ticket-item-component';
import { ComponentRef } from '@angular/core';

describe('TicketItemComponent', () => {
  let component: TicketItemComponent;
  let fixture: ComponentFixture<TicketItemComponent>;
  let componentRef: ComponentRef<TicketItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TicketItemComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;

    // 👇 obrigatório: setar o input required antes do detectChanges
    componentRef.setInput('nomedoEvento', 'Angular Conf 2026');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});