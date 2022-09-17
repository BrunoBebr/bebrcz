import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

@Component({
  selector: 'app-webdev',
  templateUrl: './webdev.component.html',
  styleUrls: ['./webdev.component.scss']
})
export class WebdevComponent implements OnInit {
  
  age : string;
  constructor() { 
    AOS.init();
    const today = new Date();
    const born = new Date('2004-11-07');
    const msBetweenDates = today.getTime() - born.getTime();
        

        
    function padTo2Digits(num: number) {
      return num.toString().padStart(2, '0');
    }

    function convertMsToTime(milliseconds: number) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    let years = Math.floor(days / 365);

    seconds = seconds % 60;
    minutes = minutes % 60;

    // 👇️ If you want to roll hours over, e.g. 00 to 24
    // 👇️ uncomment the line below
    // uncommenting next line gets you `00:00:00` instead of `24:00:00`
    // or `12:15:31` instead of `36:15:31`, etc.
    // 👇️ (roll hours over)
    //hours = hours % 24;

    return `${padTo2Digits(years)}`;
    }
    this.age = convertMsToTime(msBetweenDates);
        
  }

  scrollToElement($element :any): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

ngOnInit(): void {
    
}
  
}
