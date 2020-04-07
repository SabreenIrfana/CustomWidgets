import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpGoogleDiectionMapComponent } from './gp-google-diection-map.component';

describe('GpGoogleDiectionMapComponent', () => {
  let component: GpGoogleDiectionMapComponent;
  let fixture: ComponentFixture<GpGoogleDiectionMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpGoogleDiectionMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpGoogleDiectionMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
