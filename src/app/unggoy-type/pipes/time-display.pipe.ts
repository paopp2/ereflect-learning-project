import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeDisplay'
})
export class TimeDisplayPipe implements PipeTransform {

  transform(deciSeconds: number): string {
    const minutes = Math.floor((deciSeconds / 6000) % 60);
    const seconds = Math.floor((deciSeconds / 100) % 60);
    const remDesiSeconds = deciSeconds % 100;
    return `${this.formatter(minutes)}:${this.formatter(seconds)}.${this.formatter(remDesiSeconds)}`;
  }
  
  // Format number to have 2 digits
  private formatter(num: number) {
    return num.toLocaleString('en-US', {
      minimumIntegerDigits: 2, 
      useGrouping: false,
    });
  }

}
