import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClipboardService } from 'ngx-clipboard';
import { Subscription } from 'rxjs';
import { WindowService } from 'src/app/services/window.service';
declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public showNavigation = true;
  private resizeSubscription!: Subscription;
  
  constructor(private windowService: WindowService, private clipboardApi: ClipboardService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.resizeSubscription = this.windowService.onResize$
      .subscribe(win => {
        if (win.innerWidth < 991) {
          this.showNavigation = false;
        } else {
          this.showNavigation = true;
        }
      });
  }

  copyUrl() {
    this.clipboardApi.copyFromContent(window.location.hostname);
  }

  ngOnChanges() {
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }

}
