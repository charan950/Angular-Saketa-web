import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabetsComponent } from './alphabets.component';

describe('AlphabetsComponent', () => {
  let component: AlphabetsComponent;
  let fixture: ComponentFixture<AlphabetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphabetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlphabetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
