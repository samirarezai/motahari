import {Component, OnInit} from '@angular/core';
import {ResultQuizModalService} from './result-quiz-modal.service';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result-modal.component.html',
  styleUrls: ['./quiz-result-modal.component.scss']
})
export class QuizResultComponent implements OnInit {
  rightPoint: any;
  wrongPoint: any;
  quizResult: any;
  quizCount: any;
  courseId: any;
  isCourse: any;

  constructor(private resultQuizModalService: ResultQuizModalService) {
  }

  ngOnInit() {

  }


  public close() {
    this.resultQuizModalService.destroy();
  }
}
