import {Component, OnInit} from '@angular/core';
import {ConfigurationService} from '../../services/configuration.service';
import {RestService} from '../../services/rest.service';
import {InvitationCodeModalService} from './invitation-code-modal.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-invitation-code',
  templateUrl: './invitation-code-modal.component.html',
  styleUrls: ['./invitation-code-modal.component.scss']
})
export class InvitationCodeModalComponent implements OnInit {

  invitationCode;
  errorMessage = null;

  constructor(private configService: ConfigurationService,
              private restService: RestService,
              private router: Router,
              private invitationCodeModalService: InvitationCodeModalService) {
  }

  ngOnInit() {

  }

  cancel() {
    this.invitationCodeModalService.destroy();
  }

  submitCode() {
    if (this.invitationCode !== undefined && this.invitationCode !== null && this.invitationCode.length !== 0) {
      this.errorMessage = null;
      let body = {
        invitationCode: this.invitationCode
      };
      this.restService.makeRequest(this.configService.post, 'api/user/invite/code', body, true, response => {
        this.cancel();
        this.router.navigate([this.router.url]);
        this.router.navigateByUrl(this.router.url, {skipLocationChange: true}).then(() =>
          this.router.navigate([this.router.url]));
      }, error => {
        this.errorMessage = error;
      });
    }
  }
}
