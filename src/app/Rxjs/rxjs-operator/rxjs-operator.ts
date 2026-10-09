import {Component, inject} from '@angular/core';
import {
  concatMap,
  exhaustMap,
  filter,
  forkJoin,
  from,
  interval,
  map,
  mergeMap,
  of,
  Subject,
  switchMap,
  take
} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Master} from '../../services/master';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-rxjs-operator',
  imports: [ReactiveFormsModule],
  templateUrl: './rxjs-operator.html',
  styleUrl: './rxjs-operator.css'
})
export class RxjsOperator {


  http=inject(HttpClient)

  masterService =inject(Master);

  districtData$=of(["morang,ktm,lalitput"])
  cityData$=of(["Biratnaghar","Balkhu","Sanepa"])

  rollList$=from([11,12,13,14,15,16,17,18,19,20]);

  RollList$=of([11,12,13,14,15,16,17,18,19,20])

  timeInterval$= interval(1000)

  searchControl=new FormControl()

  LoginBtn$=new Subject<void>()

  constructor() {



      this.LoginBtn$.pipe(exhaustMap(()=>{
        return this.http.get("http://jsonplaceholder.typicode.com/users")})).subscribe((res:any)=>{
        console.log(res)
      })


    const user$= this.http.get("http://jsonplaceholder.typicode.com/users")
    const post$=this.http.get("http://jsonplaceholder.typicode.com/pos")

    // this.searchControl.valueChanges.subscribe((search:string)=>{
    //  debugger;
    //   this.http.get("https://dummyjson.com/products/search?q="+search).subscribe((res:any)=>{
    //     console.log("user" +res);
    //   })
    //
    //
    //
    // })


    //switchMap
    // this.searchControl.valueChanges.pipe(switchMap((search:string)=>this.http.get("https://dummyjson.com/products/search?q=\"+search"))
    // ).subscribe((res:any)=>{
    //   console.log(res)
    // })



    //mergemap consider latest call only
    // this.searchControl.valueChanges.pipe(mergeMap((search:string)=>this.http.get("https://dummyjson.com/products/search?q=\"+search"))
    // ).subscribe((res:any)=>{
    //   console.log(res)
    // })



    //compete previous one and goes for next ie latest call
    this.searchControl.valueChanges.pipe(concatMap((search:string)=>this.http.get("https://dummyjson.com/products/search?q=\"+search"))
    ).subscribe((res:any)=>{
      console.log(res)
    })


    forkJoin([user$,post$]).subscribe((res:any)=>{
      // debugger;
    },error=>{
      // debugger
    })

    forkJoin([this.districtData$,this.cityData$]).subscribe((res:any)=>{
      // debugger
    })

    this.timeInterval$.pipe(
      take(6)
    ).subscribe((res:number)=>{
      console.log(res);
    })

    // this.searchControl.valueChanges.pipe(
    //   filter(searchText=>searchText.length>=3)).subscribe((res:any)=>{
    //   console.log(res);
    // })

    // this.timeInterval$.pipe(
    //   filter(num=>num%2==0)
    // ).subscribe((res:number)=>{
    //   console.log(res);
    // })





    this.masterService.getSingleUser().subscribe((res:any)=>{
      console.log(res)
    })

    this.masterService.getUsers().subscribe((res:any)=>{
      console.log(res);
    })

    // this.rollList$.subscribe((res:number)=>{
    //   console.log(res);
    // })


    // this.rollList$.pipe(filter(num=>num%2==0)).subscribe((res:number)=>{
    //   console.log(res);
    // })

    this.RollList$.pipe(map((result)=>result.filter(m=>m%2==0)))
      .subscribe((result)=>{
        console.log(result);
      })



  }

  btnClick(){


    this.LoginBtn$.next();
  }


}
