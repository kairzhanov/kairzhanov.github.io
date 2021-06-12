import { Component, OnInit } from '@angular/core';
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
  
  constructor(private windowService: WindowService) { }

  ngOnInit(): void {
    this.resizeSubscription = this.windowService.onResize$
      .subscribe(win => {
        if (win.innerWidth < 991) {
          this.showNavigation = false;
        } else {
          this.showNavigation = true;
        }
      });

    // if (window.innerWidth < 756) {
    //   this.showNavigation = false;
    // }
  }

  ngOnChanges() {
  }

  ngAfterViewInit() {
    // $('[data-toggle="collapsible-nav"]').on('click', function(e: any){
    //   var target = ($(e.target).data('target'));
    //   $('#' + target).toggleClass('show');
    // });
  }

  ngOnDestroy() {
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }

}
