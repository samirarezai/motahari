import {Component, OnDestroy, OnInit} from '@angular/core';
import {ConfigurationService} from '../../services/configuration.service';
import {RestService} from '../../services/rest.service';
import {ActivatedRoute} from '@angular/router';
import {ResultQuizModalService} from '../../modals/quiz-result-modal/result-quiz-modal.service';
import {QuizResultComponent} from '../../modals/quiz-result-modal/quiz-result.component';
import {LocalStorageService} from '../../services/local-storage.service';
import {interval, Subscription} from 'rxjs';
import {NotificationService} from '../../modals/notification-modal/notification.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit, OnDestroy {

  quizId: any;
  courseId: any;
  stepId: any;
  questionList: any;
  questionCount: number;
  quiz: any;
  answerCount = 0;
  isCourse = false;
  answer: any = {};
  width: any = 0;
  initNumber = 1;
  intervalId;
  quizDurationTime = 0;
  isCallQuizResult = false;
  isLoading = true;

  constructor(private configService: ConfigurationService,
              private restService: RestService,
              private route: ActivatedRoute,
              private notificationService: NotificationService,
              private quizModalService: ResultQuizModalService) {
  }

  ngOnInit() {
    this.quizId = this.route.snapshot.paramMap.get('quizId');
    this.courseId = this.route.snapshot.paramMap.get('courseId');
    this.stepId = this.route.snapshot.paramMap.get('stepId');
    this.answer.courseId = this.courseId;
    this.answer.stepId = this.stepId;
    this.answer.quizId = this.quizId;
    this.answer.answerList = [];
    this.callQuiz();
  }

  callTypeCourse() {
    let body = {
      courseId: this.courseId
    };
    this.restService.makeRequest(this.configService.post, 'course/type', body, false, response => {
      this.isCourse = response.result !== 'MATCH';
    }, error => {

    });
  }

  private callQuiz() {
    let body = {
      quizId: this.quizId
    };
    this.restService.makeRequest(this.configService.post, 'api/quiz/get', body, true, response => {
      this.quiz = response.result;
      this.quizDurationTime = this.quiz.durationTime;
      this.callQuizService();
      this.callTypeCourse();
    }, error => {

    });
  }

  private callQuizService() {
    let body = {
      quizId: this.quizId
    };
    this.restService.makeRequest(this.configService.post, 'api/question/list', body, true, response => {
      this.isLoading = false;
      this.questionList = response.result;
      this.questionCount = this.questionList.length;
      for (let init of this.questionList) {
        for (let initOption of init.options) {
          initOption.isSelect = false;
        }
      }
      if (this.quiz.durationTime !== 0) {
        this.callInterval();
      }
    }, error => {
      this.notificationService.showNotification(error, this.configService.notifyErrorType);
      this.isLoading = false;
    });
  }

  public selectOption(option, options) {
    for (let i = 0; i < options.length; i++) {
      options[i].isSelect = option.id === options[i].id;
    }
    let totalAnswer = 0;
    for (let question of this.questionList) {
      for (let initOption of question.options) {
        if (initOption.isSelect) {
          totalAnswer++;
        }
      }
    }
    this.answerCount = totalAnswer;
  }

  public quizResult() {
    this.isLoading = true;
    this.isCallQuizResult = true;
    for (let question of this.questionList) {
      for (let option of question.options) {
        if (option.isSelect) {
          let obj = {
            answerId: option.id,
            questionId: question.id
          };
          this.answer.answerList.push(obj);
        }
      }
    }
    this.restService.makeRequest(this.configService.post, 'api/question/answer/list', this.answer, true, response => {
      this.isLoading = false;
      clearInterval(this.intervalId);
      this.width = 100;
      this.quizDurationTime = 0;
      let result = {
        rightPoint: response.result.rightPoint,
        wrongPoint: response.result.wrongPoint,
        quizResult: response.result.quizResult,
        quizCount: this.questionList.length,
        courseId: this.courseId,
        isCourse: this.isCourse
      };
      this.openQuizResultModal(result);
    }, error => {
      this.isLoading = false;
    });
  }

  private openQuizResultModal(input) {
    this.quizModalService.init(QuizResultComponent, input, input);
  }

  onFinishTime() {
    if (!this.isCallQuizResult) {
      clearInterval(this.intervalId);
      this.width = 100;
      this.quizResult();
    }
  }

  calculateWidthProgress() {
    this.width = ((this.initNumber * 100) / (this.quiz.durationTime * 60));
    this.initNumber++;
  }

  private callInterval() {
    this.intervalId = setInterval(() => {
      this.calculateWidthProgress();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

}
