import {Component, ElementRef, ViewChild} from '@angular/core';
import {TopicInfo} from '../reusableComponent/topic-info/topic-info';

@Component({
  selector: 'app-modal-popup',
  imports: [TopicInfo],
  templateUrl: './modal-popup.html',
  styleUrl: './modal-popup.css'
})
export class ModalPopup {

  @ViewChild('myModal') forModal!:ElementRef

  addNew(){
    if(this.forModal){

      this.forModal.nativeElement.style.display='block'

    }
  }

  close(){
    if(this.forModal){

      this.forModal.nativeElement.style.display='none'

    }

  }

}
