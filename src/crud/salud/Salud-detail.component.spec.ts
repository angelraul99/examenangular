import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaludDetailComponent} from './Salud-detail.component';
 
describe('SaludDetailComponent', () => {
  let component: SaludDetailComponent;
  let fixture: ComponentFixture<SaludDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaludDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaludDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});