import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypecodeListComponent } from './typecode-list.component';

describe('TypecodeListComponent', () => {
  let component: TypecodeListComponent;
  let fixture: ComponentFixture<TypecodeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypecodeListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypecodeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
