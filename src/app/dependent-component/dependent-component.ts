import {Component, OnInit, signal} from '@angular/core';
import {TopicInfo} from "../reusableComponent/topic-info/topic-info";
import {HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-dependent-component',
    imports: [
      FormsModule

    ],
  templateUrl: './dependent-component.html',
  styleUrl: './dependent-component.css'
})
export class DependentComponent implements OnInit{


  stateList: IState[]=[
    {stateId:123,stateName:'Maharastra'},
    {stateId:345,stateName:'Rjistan'},
    {stateId:456,stateName:'Goa'}

  ]

  cityList:ICity[]=[
    {cityId:11,cityName:'Jaipur',stateId:345},
    {cityId:12,cityName:'Mirjapur',stateId:345},
    {cityId:13,cityName:'Jharna',stateId:345},
    {cityId:14,cityName:'Khola',stateId:345},


    {cityId:11,cityName:'HiraPur',stateId:123},
    {cityId:11,cityName:'Sonapur',stateId:123},
    {cityId:11,cityName:'GangaJamuna',stateId:123},
    {cityId:11,cityName:'MotuPatluPur',stateId:123},


    {cityId:11,cityName:'AAA',stateId:456   },
    {cityId:11,cityName:'BBB',stateId:456   },
    {cityId:11,cityName:'CC',stateId:456  },
    {cityId:11,cityName:'DD',stateId:456   },
  ]

  filteredCityList: ICity[]=[]



  constructor(private http: HttpClient) {

  }


  depId:string='';
  deptList=signal<any[]>([])
  designationList=signal<any[]>([])

  ngOnInit() {

    this.getDept()
    this.designationList();
  }


  getDesignationById(){
    this.http.get('https://api.freeprojectapi.com/api/EmployeeApp/GetDesignationsByDeptId?deptId='+ this.depId).subscribe({
      next:(res:any)=>{

        this.designationList.set(res);

      }
    })

  }

  getDept(){

    this.http.get('https://api.freeprojectapi.com/api/EmployeeApp/GetDepartments').subscribe(
      {
        next:(res:any)=>{
          this.deptList.set(res)

        }
      }
    )


  }




onStateChange(event:any){
debugger;
const stateId=event.target.value;
const  stateCity=this.cityList.filter(m=>m.stateId==stateId)
  this.filteredCityList=stateCity

}


}

interface IState{

  stateName: string,
  stateId: number

}

interface ICity{

  cityName: string,
  stateId: number,
  cityId: number


}
