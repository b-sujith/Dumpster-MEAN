import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubblogComponent } from './subblog.component';

describe('SubblogComponent', () => {
  let component: SubblogComponent;
  let fixture: ComponentFixture<SubblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubblogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
