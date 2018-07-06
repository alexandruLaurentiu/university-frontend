import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getStudents() {
    const students = [
      {
        id: 1,
        firstName: 'Popescu',
        lastName: 'Ionel',
        age: 18,
        city: 'Cluj'
      },
      {
        id: 2,
        firstName: 'Georgescu',
        lastName: 'Stefan',
        age: 19,
        city: 'Timisoara'
      },
      {
        id: 3,
        firstName: 'Stan',
        lastName: 'Ghita',
        age: 18,
        city: 'Bucuresti'
      },
      {
        id: 4,
        firstName: 'Serban',
        lastName: 'Constantin',
        age: 19,
        city: 'Targu-Mures'
      },
      {
        id: 5,
        firstName: 'Castan',
        lastName: 'Ciprian',
        age: 18,
        city: 'Timisoara'
      }
    ];

    return students;
  }

  getProfessors() {
    const professors = [
      {
        id: 1,
        firstName: 'Cojocariu',
        lastName: 'Dan',
        course: 'Sisteme distribuite',
        age: 42
      },
      {
        id: 2,
        firstName: 'Pop',
        lastName: 'Grigore',
        course: 'Istoria informaticii',
        age: 34,
      },
      {
        id: 3,
        firstName: 'Gherasim',
        lastName: 'Daniel',
        course: 'Limbaje formale',
        age: 27,
      },
      {
        id: 4,
        firstName: 'Front',
        lastName: 'Andreea',
        course: 'Inteligenta artificiala',
        age: 30,
      },
      {
        id: 5,
        firstName: 'Porumbescu',
        lastName: 'Georgian',
        course: 'Analiza matematica',
        age: 44,
      }
    ];

    return professors;
  }

  getCourses() {
    const courses = [
      {
        id: 1,
        name: 'Sisteme distribuite',
        faculty: 'Informatics',
      },
      {
        id: 2,
        name: 'Istoria informaticii',
        faculty: 'Informatics',
      },
      {
        id: 3,
        name: 'Limbaje formale',
        faculty: 'Informatics',
      },
      {
        id: 4,
        name: 'Inteligenta artificiala',
        faculty: 'Informatics',
      },
      {
        id: 5,
        name: 'Analiza matematica',
        faculty: 'Informatics',
      }
    ];

    return courses;
  }

  getStudentsDetails() {
    var studentsDetails = [
      {
        id: 1,
        studentId: 1,
        motherName: 'Maria',
        fatherName: 'Dan',
      },
      {
        id: 2,
        studentId: 2,
        motherName: 'Georgiana',
        fatherName: 'Paul',
      },
      {
        id: 3,
        studentId: 3,
        motherName: 'Andreea',
        fatherName: 'Bogdan',
      },
      {
        id: 4,
        studentId: 4,
        motherName: 'Carolina',
        fatherName: 'Laurentiu',
      },
      {
        id: 5,
        studentId: 5,
        motherName: 'Carina',
        fatherName: 'David',
      }
    ];

    return studentsDetails;
  }

  getProfessorsDetails() {
    var professorsDetails = [
      {
        id: 1,
        professorId: 1,
        city: 'Timisoara',
      },
      {
        id: 2,
        professorId: 2,
        city: 'Timisoara',
      },
      {
        id: 3,
        professorId: 3,
        city: 'Petrosani',
      },
      {
        id: 4,
        professorId: 4,
        city: 'Resita',
      },
      {
        id: 5,
        professorId: 5,
        city: 'Timisoara',
      }
    ];

    return professorsDetails;
  }

  getStudent(studentId) {
    let student;

    student = this.getStudents().find(student => student.id == studentId);
    student.motherName = this.getStudentsDetails().find(details => details.studentId == studentId).motherName;
    student.fatherName = this.getStudentsDetails().find(details => details.studentId == studentId).fatherName;
    
    return student;
  }

  getProfessor(professorId) {
    let professor;

    professor = this.getProfessors().find(professor => professor.id == professorId)
    professor.city = this.getProfessorsDetails().find(details => professorId == details.professorId).city;

    return professor;
  }
}
