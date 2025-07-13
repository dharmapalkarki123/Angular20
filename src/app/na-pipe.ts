import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'na'
})
export class NaPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if(value !==null && value !=="" && value!==undefined){
      return value
    }else {

    return "--";
    }
  }

}
