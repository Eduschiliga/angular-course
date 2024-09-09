import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBindingInterpolacaoComponent } from './property-binding-interpolacao.component';

describe('PropertyBindingInterpolacaoComponent', () => {
  let component: PropertyBindingInterpolacaoComponent;
  let fixture: ComponentFixture<PropertyBindingInterpolacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyBindingInterpolacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyBindingInterpolacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
