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

  constructor() { }

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    // var newEmp: Employee = new Employee;
    // newEmp.active = true;
    // newEmp.firstName = "Kody";
    // newEmp.lastName = "LastName";
    // newEmp.Id = 0;
    // this.employees.push(newEmp);
    // this.employees = [newEmp];
  }

  addNewEmployee() {
    var add: Employee = this.newEmployee;
    this.employees.push(add);
    var newEmp: Employee = new Employee;
    this.newEmployee = newEmp;
  }
}
