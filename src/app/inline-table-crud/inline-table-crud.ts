import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-inline-table-crud',
  imports: [FormsModule],
  templateUrl: './inline-table-crud.html',
  styleUrl: './inline-table-crud.css'
})
export class InlineTableCrud {

  depList=signal<any>([
    {
      "departmentId": 15556,
      "departmentName": "Salgfdgdfd",
      "departmentLogo": "ppp.pngdgfgfd"
    },
    {
      "departmentId": 15557,
      "departmentName": "Marketing",
      "departmentLogo": "mark.jpg"
    },
    {
      "departmentId": 15558,
      "departmentName": "Business",
      "departmentLogo": "ba.png1"
    },
    {
      "departmentId": 15559,
      "departmentName": "Information Technology",
      "departmentLogo": "it.jpg"
    },
    {
      "departmentId": 15561,
      "departmentName": "HR",
      "departmentLogo": "hr.jpg"
    },
    {
      "departmentId": 15562,
      "departmentName": "Electrical ",
      "departmentLogo": "elec.png"
    },
    {
      "departmentId": 15563,
      "departmentName": "Engineering",
      "departmentLogo": "eng.png"
    },
    {
      "departmentId": 15564,
      "departmentName": "Demo",
      "departmentLogo": "demo.png"
    },
    {
      "departmentId": 15565,
      "departmentName": "Development",
      "departmentLogo": "dev.png"
    },
    {
      "departmentId": 15566,
      "departmentName": "BCA",
      "departmentLogo": "testt"
    }
  ])


  checkedIdsList=signal<number[]>([]);

addNew(){

    const newObj={
      "departmentId": 0,
      "departmentName": "",
      "departmentLogo": ""
    };
    this.depList.update(oldData=>[newObj,...oldData])


}

saveAll(){
const data=this.depList();
debugger;
}



  addCheckedItem(event:any,id:number){
  debugger;
  if(event.target.checked){
    this.checkedIdsList.update(oldList=>[...oldList,id])
  }else{
    const elementIndexes= this.checkedIdsList().findIndex(m=>m==id);
    this.checkedIdsList().splice(elementIndexes,1);
  }


  }

  selectAll(event:any){

  if(event.target.checked){

    this.depList().forEach((element:any)=>{
      this.checkedIdsList.update(oldList=>[...oldList,element.departmentId])
    });

  }else{
    this.checkedIdsList.set([])
  }

  debugger


  }

  getCheckedStatus(id:number){
  return this.checkedIdsList().includes(id)

  }

}
