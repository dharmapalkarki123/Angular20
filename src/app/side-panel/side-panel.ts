import {Component,WritableSignal, signal} from '@angular/core';
import {NgClass} from '@angular/common';
import {TopicInfo} from '../reusableComponent/topic-info/topic-info';

@Component({
  selector: 'app-side-panel',
  imports: [NgClass,TopicInfo],
  templateUrl: './side-panel.html',
  styleUrl: './side-panel.css'
})
export class SidePanel {

  isSidePanelOpen: WritableSignal<boolean>=signal<boolean>(false);

  currentView=signal<string>('List')

  openSidePanel(){
    this.isSidePanelOpen.set(true);
  }

  closeSidePanel(){

    this.isSidePanelOpen.set(false)

  }

  toggleView(){

    this.currentView.set(this.currentView()=='List'?'Form':'List')

  }

}
