import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGiphyComponent } from './lista-giphy.component';

describe('ListaGiphyComponent', () => {
  let component: ListaGiphyComponent;
  let fixture: ComponentFixture<ListaGiphyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaGiphyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaGiphyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
