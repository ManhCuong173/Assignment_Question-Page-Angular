import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { ListSubjectService } from './../service/list-subject.service'
import { CheckLoginService } from './../middleware/check-login.service'
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router, private _listSubjectService: ListSubjectService, private _checkLoginService: CheckLoginService) { }

  listSubject: any = [];

  ngOnInit() {
    this.listSubject = this._listSubjectService.listSubjects;
  }

  getIntoListSubject(){
    this.router.navigate(['/user/list']);
  }


}
