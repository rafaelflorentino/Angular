import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypecodeComponent } from './typecode.component';

describe('TypecodeComponent', () => {
  let component: TypecodeComponent;
  let fixture: ComponentFixture<TypecodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypecodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
