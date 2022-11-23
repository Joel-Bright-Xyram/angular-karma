import { ParseSourceFile } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  sum = 0;
  studentResult = '';
  result: any;
  constructor(public service: StudentService) {}

  ngOnInit(): void {}

  calculate(num1: number, num2: number) {
    this.sum = num1 + num2;
    return this.sum;
  }

  saveData() {
    let info = {
      sumVal: this.calculate(5, 5),
      name: 'Joel Bright',
    };
    this.SaveDataIntoConsol(info);
    this.service.SaveDetails(info).subscribe((response) => {
      this.result = response;
    });
  }

  StudentResult() {
    if (this.calculate(10, 20) >= 40) {
      return 'Pass';
    } else {
      return 'Fail';
    }
  }

  StudentSchoolResult() {
    if (this.calculate(10, 20) >= 40) {
      this.studentResult = 'Pass';
    } else {
      this.studentResult = 'Fail';
    }
    return this.studentResult;
  }

  SaveDataIntoConsol(info: { sumVal: number; name: string }) {
    console.log(info);
  }
}
