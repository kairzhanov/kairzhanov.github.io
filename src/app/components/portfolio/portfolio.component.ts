import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/portfolio.model';
declare var $:any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projects: Project[] = [
    {
      title: "6inch University",
      description: "Developed an online learning platform for staff with video, text materials and exams",
      image: "assets/images/portfolio/6inch.png",
      years: [2021],
      technology: ["PHP", "Wordpress", "HTML&CSS", "Bootstrap"]
    },
    {
      title: "Qalumni",
      description: "Developed a voting plugin for charity projects and integrated payment system Paybox",
      image: "assets/images/portfolio/qalumni.png",
      years: [2020],
      technology: ["PHP", "Wordpress", "HTML&CSS", "Bootstrap"]
    },
    {
      title: "HappyCar.kz",
      description: "Developed an admin panel, personal account for merchants. Added other improvements in website functionality",
      image: "assets/images/portfolio/happycar.png",
      years: [2019,2020],
      technology: ["C#", "ASP.NET Core", "Angular", "Bootstrap", "PostgreSQL"]
    },
    {
      title: "Electronic Queue Management System (EQMS)",
      description: "Developed 4 modules of EQMS (Server, Terminal, Operator, Display) to easily manage queue in the local store, to track performance of the managers using C# and .NET framework.",
      image: "assets/images/portfolio/eqms.png",
      years: [2018],
      technology: ["C#", ".NET Framework"]
    },
    {
      title: "MiningInvest",
      description: "Developed a landing page for company",
      image: "assets/images/portfolio/mininginvest.png",
      years: [2019],
      technology: ["HTML&CSS", "Bootstrap"]
    }
  ]


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
