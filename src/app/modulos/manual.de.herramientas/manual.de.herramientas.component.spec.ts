import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualDeHerramientasComponent } from './manual.de.herramientas.component';

describe('ManualDeHerramientasComponent', () => {
  let component: ManualDeHerramientasComponent;
  let fixture: ComponentFixture<ManualDeHerramientasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManualDeHerramientasComponent]
    });
    fixture = TestBed.createComponent(ManualDeHerramientasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
