import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'summary'})
export class summary implements PipeTransform {
  transform(value: string, exponent = 1): string {
    if(!value){
      return null;
    }else{
      return value.substr(0, 5)+' ...';
    }
  }
}