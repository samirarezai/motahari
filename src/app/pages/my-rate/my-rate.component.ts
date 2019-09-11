import {Component, OnInit} from '@angular/core';
import {ConfigurationService} from '../../services/configuration.service';
import {RestService} from '../../services/rest.service';

@Component({
  selector: 'app-my-rate',
  templateUrl: './my-rate.component.html',
  styleUrls: ['./my-rate.component.scss']
})
export class MyRateComponent implements OnInit {

  rateHistoryList;
  totalRate = 0;
  showLoading = true;

  constructor(private configService: ConfigurationService, private restService: RestService) {
  }

  ngOnInit() {
    this.callService();
  }

  callService() {
    this.showLoading = true;
    let body = {
      size: 1000,
      offset: 0
    };

    this.restService.makeRequest(this.configService.post, 'api/user/rate/history', body, true, response => {
      this.showLoading = false;
      this.rateHistoryList = response.result;
      for (let i = 0; i < this.rateHistoryList.length; i++) {
        this.totalRate += this.rateHistoryList[i].rate;
      }
    }, error => {
      this.showLoading = false;
    });
  }

}
