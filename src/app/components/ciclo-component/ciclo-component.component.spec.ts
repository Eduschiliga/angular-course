import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloComponentComponent } from './ciclo-component.component';

describe('CicloComponentComponent', () => {
  let component: CicloComponentComponent;
  let fixture: ComponentFixture<CicloComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CicloComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CicloComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
