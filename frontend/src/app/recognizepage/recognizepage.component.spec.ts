import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecognizepageComponent } from './recognizepage.component';

describe('RecognizepageComponent', () => {
  let component: RecognizepageComponent;
  let fixture: ComponentFixture<RecognizepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecognizepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecognizepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
