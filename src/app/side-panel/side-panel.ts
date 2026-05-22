import {Component,WritableSignal, signal} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-side-panel',
  imports: [NgClass],
  templateUrl: './side-panel.html',
  styleUrl: './side-panel.css'
})
export class SidePanel {

  isSidePanelOpen: WritableSignal<boolean>=signal<boolean>(true);

  openSidePanel(){
    this.isSidePanelOpen.set(true);
  }

  closeSidePanel(){

    this.isSidePanelOpen.set(false)

  }

}
