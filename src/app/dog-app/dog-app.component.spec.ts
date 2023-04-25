import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogAppComponent } from './dog-app.component';

describe('DogAppComponent', () => {
  let component: DogAppComponent;
  let fixture: ComponentFixture<DogAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
