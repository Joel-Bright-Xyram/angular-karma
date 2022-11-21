import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Addition } from './Calculator';

describe('AppComponent', () => {
  let component = new AppComponent();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-karma'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-karma');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'angular-karma app is running!'
    );
  });

  it('should check if true equals true', () => {
    expect(true).toBe(true);
  });

  it('should check the alert message', () => {
    var msg = 'Hello World!';
    expect(component.ShowMessage(msg)).toBe(msg);
  });

  it('should test the Addition result', () => {
    expect(Addition(10, 20)).toBeGreaterThanOrEqual(20);
  });

  it('should validate ToBe and toEqual correctly for numbers', () => {
    var num1 = 1;
    var num2 = 1;
    expect(num1).toBe(num2);
    expect(num1).toEqual(num2);
  });
  it('should validate ToBe and toEqual correctly for strings', () => {
    var a = 'Hello';
    var b = 'Hello';
    expect(a).toBe(b);
    expect(a).toEqual(b);
  });
  it('should validate ToBe and toEqual correctly for arrays', () => {
    var arr1 = [1];
    var arr2 = [1];
    expect(arr1).not.toBe(arr2);
    expect(arr1).toEqual(arr2);
  });
  it('should validate ToBe(true) and ToBeTrue() correctly', () => {
    var a = true;
    var b = false;
    expect(a).toBe(true);
    expect(a).toBeTrue();
    expect(b).toBeFalse();
  });
  it('should validate ToBeFalsy() and ToBeTruthy() correctly', () => {
    var a = true;
    var b = false;
    expect(a).toBeTruthy();
    expect('1').toBeTruthy();
    expect(1).toBeTruthy();
    expect(b).toBeFalsy();
    expect(0).toBeFalsy();
    expect(NaN).toBeFalsy();
    expect(undefined).toBeFalsy();
  });
  it('shoud check toBeGreater set of Matchers', () => {
    var a = 5;
    expect(a).toBeGreaterThan(4);
    expect(a).not.toBeGreaterThan(5);
    expect(a).toBeGreaterThanOrEqual(5);
  });
  it('shoud check toBeLesser set of Matchers', () => {
    var a = 5;
    expect(a).toBeLessThan(6);
    expect(a).not.toBeLessThan(5);
    expect(a).toBeLessThanOrEqual(5);
  });
  it('shoud check toMatch Jasmine Matcher', () => {
    var input = 'Some YouTube video tutorial';
    var strPhoneNo = '001-425-777-8000';
    expect(input).toMatch(/YouTube/);
    expect(input).toMatch(/YouTube/i);
    expect(input).not.toMatch(/Yout/);
    expect(strPhoneNo).toMatch(/\d{3}-\d{3}-\d{3}-\d{4}/);
  });
});
