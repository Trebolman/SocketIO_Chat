import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioGuardComponent } from './usuario-guard.component';

describe('UsuarioGuardComponent', () => {
  let component: UsuarioGuardComponent;
  let fixture: ComponentFixture<UsuarioGuardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioGuardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
