import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  classNames: string[] = ['in-up', 'in-right', 'in-down', 'in-left', 'out-up', 'out-right', 'out-down', 'out-left']; // Animation classes.

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    $(document).ready(function(){
      if ($('.hover-box').length) {
          setHoverBoxPerspective();
      }
    });

    $(window).resize(
      function() {
          if ($('.hover-box').length) {
              setHoverBoxPerspective();
          }
      }
    );

    function setHoverBoxPerspective() {
      $('.hover-box').css({
          'perspective': function () {
              return Math.max( $(this).width(), $(this).height() ) * 2 + 50;
          }
      });
    }

    // TODO: Rewrite to native Angular animations
    $('.hover-box').hover(
       (event: any) => {
         let direction = "up";
          // if(JQuery.fn.entry){ //Check if entry js file is loaded.
              direction = $(event.target).entry({ e: event }); // Get mouse in direction.
          // }
  
          $(event.target).removeClass(this.classNames.join(" ")); // Remove existing animation classes.
          $(event.target).addClass("in-" + direction); //Add mouse in animation
      }, 
      
      (event: any) => {
        var direction = "up";
          // if(jQuery.fn.entry){
        direction = $(event.target).entry({ e: event }); // Get mouse out direction.
        // }
        $(event.target).removeClass(this.classNames.join(" "));
        $(event.target).addClass("out-" + direction); //Add mouse out animation
      }
    );
  }
}
