import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

  studentId$: Object;
  student$: Object;  

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe(params => this.studentId$ = params.id);
  }

  ngOnInit() {    
    this.student$ = this.data.getStudent(this.studentId$);
  }

}
