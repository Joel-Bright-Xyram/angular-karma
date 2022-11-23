import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './student.service';

import { StudentComponent } from './student.component';
import { of } from 'rxjs';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;
  let h1: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentComponent],
      providers: [StudentService],
      imports: [HttpClientModule], // imports: [AppRoutingModule, HttpClientModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    h1 = fixture.nativeElement.querySelector('h1');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('SpyOn method - original', () => {
    spyOn(component, 'calculate');
    component.saveData();
    expect(component.calculate).toHaveBeenCalled();
  });

  it('SpyOn method - 1', () => {
    spyOn(component, 'calculate').and.returnValues(10, 20);
    let result = component.StudentResult();
    expect(result).toEqual('Fail');
  });

  it('SpyOn method - 2', () => {
    spyOn(component, 'calculate').and.returnValues(40, 20);
    let result = component.StudentResult();
    expect(result).toEqual('Pass');
  });

  it('SpyOn method - 3', () => {
    let service = fixture.debugElement.injector.get(StudentService);
    spyOn(service, 'SaveDetails').and.callFake(() => {
      return of({
        result1: 200,
      });
    });
    component.saveData();
    expect(component.result).toEqual({
      result1: 200,
    });
  });

  it('Verify the h1 element Value', () => {
    component.StudentSchoolResult();
    fixture.detectChanges();
    expect(h1.textContent).toBe(component.studentResult);
  });
});
