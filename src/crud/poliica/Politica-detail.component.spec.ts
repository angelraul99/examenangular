import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PoliticaDetailComponent} from './Politica-detail.component';
 
describe('PoliticaDetailComponent', () => {
  let component: PoliticaDetailComponent;
  let fixture: ComponentFixture<PoliticaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticaDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliticaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});