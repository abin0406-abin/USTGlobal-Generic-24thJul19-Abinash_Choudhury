import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabetDetailsComponent } from './alphabet-details.component';

describe('AlphabetDetailsComponent', () => {
  let component: AlphabetDetailsComponent;
  let fixture: ComponentFixture<AlphabetDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlphabetDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphabetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
