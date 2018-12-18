import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /*if(document.getElementById("footer").scrollTop < 50){
      console.log(document.getElementById("footer").scrollTop);
      document.getElementById("footer").style.setProperty("position", "absolute");
      document.getElementById("footer").style.setProperty("bottom", "0%");
    }
    document.addEventListener("scroll", function(){

    });*/
  }
  

}
