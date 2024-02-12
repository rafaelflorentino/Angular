import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypecodeSingleComponent } from './typecode-single.component';

describe('TypecodeSingleComponent', () => {
  let component: TypecodeSingleComponent;
  let fixture: ComponentFixture<TypecodeSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypecodeSingleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypecodeSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
