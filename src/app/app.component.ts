import {Component, ViewChild} from '@angular/core';
import {RightMenuComponent} from './pages/right-menu/right-menu.component';
import {WorkBookService} from './modals/workbook-modal/work-book.service';
import {Router, NavigationEnd} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {BuyModalService} from './modals/buy-modal/buy-modal.service';
import {StepDescriptionService} from './modals/step-description-modal/step-description.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mainTitle = 'استاد شهید مطهری';

  @ViewChild('rightMenu')
  private rightMenuComponent: RightMenuComponent;

  constructor(private workBookService: WorkBookService,
              private router: Router,
              private buyModalService: BuyModalService,
              private stepDescriptionService: StepDescriptionService,
              private title: Title) {
    /*this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };*/

    /*this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.router.navigated = false;
        window.scrollTo(0, 0);
      }
    });*/

    this.title.setTitle(this.mainTitle);
  }

  public removeModal() {

  }

  removeWorkbookModal() {
    this.workBookService.destroy();
  }

  clickOnMenu() {
    this.rightMenuComponent.openMenu();
  }

  removeBuyModal() {
    this.buyModalService.destroy();
  }

  removeDescription() {
    this.stepDescriptionService.destroy();
  }

  removeInvitationCode() {

  }
}
