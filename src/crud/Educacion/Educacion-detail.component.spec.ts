import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EducacionDetailComponent} from './Educacion-detail.component';
 
describe('EducacionDetailComponent', () => {
  let component: EducacionDetailComponent;
  let fixture: ComponentFixture<EducacionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});