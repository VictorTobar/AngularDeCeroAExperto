import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorGiphyComponent } from './buscador-giphy.component';

describe('BuscadorGiphyComponent', () => {
  let component: BuscadorGiphyComponent;
  let fixture: ComponentFixture<BuscadorGiphyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorGiphyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorGiphyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
