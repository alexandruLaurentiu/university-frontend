import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessorsComponent } from './professors/professors.component';
import { StudentsComponent } from './students/students.component';
import { CoursesComponent } from './courses/courses.component';
import { ProfessorDetailsComponent } from './professor-details/professor-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsComponent
  },
  {
    path: 'professors',
    component: ProfessorsComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'professors/professorDetails/:id',
    component: ProfessorDetailsComponent
  },
  {
    path: 'studentDetails/:id',
    component: StudentDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
