import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecognizePageComponent } from './recognize-page.component';

describe('RecognizepageComponent', () => {
  let component: RecognizePageComponent;
  let fixture: ComponentFixture<RecognizePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecognizePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecognizePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
