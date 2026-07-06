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


}
