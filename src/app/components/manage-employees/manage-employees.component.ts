import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee'

@Component({
  selector: 'app-manage-employees',
  templateUrl: './manage-employees.component.html',
  styleUrls: ['./manage-employees.component.css']
})


export class ManageEmployeesComponent implements OnInit {
  employees: Employee[] = [];
  newEmployee: Employee;
  editIndex: number;

  constructor() { }


  ngOnInit() {
    var pat = new Employee();
    this.employees = [];

    pat.firstName = 'Test';
    pat.lastName = 'Budgie';
    pat.active = true;
    pat.id = 5;

    this.employees.push(pat);

    this.newEmployee = new Employee;
    this.editIndex = -1;
  }

  addNewEmployee() {
    var add: Employee = this.newEmployee;
    this.employees.push(add);
    var newEmp: Employee = new Employee;
    this.newEmployee = newEmp;
  }

  editEmployee(person: Employee) {
    this.editIndex = person.id;
  }

  cancelEmployee() {
    this.editIndex = -1;
  }

  updateEmployee(person: Employee) {
    this.editIndex = -1;
  }

}
