import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOreditIntegrantesComponent } from './add-oredit-integrantes.component';

describe('AddOreditIntegrantesComponent', () => {
  let component: AddOreditIntegrantesComponent;
  let fixture: ComponentFixture<AddOreditIntegrantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddOreditIntegrantesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddOreditIntegrantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
