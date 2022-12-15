import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarDetailComponent} from './Registrar-detail.component';
 
describe('RegistrarDetailComponent', () => {
  let component: RegistrarDetailComponent;
  let fixture: ComponentFixture<RegistrarDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});