import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-persist-selection',
  imports: [CommonModule],
  templateUrl: './persist-selection.html',
  styleUrl: './persist-selection.css'
})
export class PersistSelection {

  skills = [
    'Angular', 'React', 'Vue', 'TypeScript', 'JavaScript',
    'RxJS', 'Node.js', 'GraphQL', 'Docker',
    'MongoDB', 'PostgreSQL', 'AWS', 'Figma', 'Python', 'Git'
  ];

  selectedSkills: string[] = [];

  toggleSkill(skill: string) {
    if (this.selectedSkills.includes(skill)) {
      this.selectedSkills = this.selectedSkills.filter(s => s !== skill);
    } else {
      this.selectedSkills.push(skill);
    }
  }



  selectedFilter: string = 'ALL';

  employees = [
    { name: 'Riya Sharma', role: 'Angular Developer', team: 'FRONTEND', status: 'Active' },
    { name: 'Arjun Mehta', role: 'Node.js Developer', team: 'BACKEND', status: 'Active' },
    { name: 'Priya Nair', role: 'UI Designer', team: 'DESIGN', status: 'On Leave' },
    { name: 'Rahul Verma', role: 'DevOps Engineer', team: 'DEVOPS', status: 'Active' },
    { name: 'Sneha Pillai', role: 'React Developer', team: 'FRONTEND', status: 'Active' },
    { name: 'Karan Joshi', role: 'Django Developer', team: 'BACKEND', status: 'Inactive' },
    { name: 'Meera Reddy', role: 'UX Researcher', team: 'DESIGN', status: 'Active' },
    { name: 'Amit Patil', role: 'Vue Developer', team: 'FRONTEND', status: 'Active' }
  ];

  filteredEmployees = [...this.employees];

  filterData(team: string) {
    this.selectedFilter = team;

    if (team === 'ALL') {
      this.filteredEmployees = this.employees;
    } else {
      this.filteredEmployees = this.employees.filter(emp => emp.team === team);
    }
  }


}
