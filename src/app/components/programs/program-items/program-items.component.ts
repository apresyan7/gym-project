import { Component, OnInit,Input, Renderer2, ViewChild, ViewChildren, ElementRef } from '@angular/core';
import { ProgramModel, ProgramTitle } from 'src/app/shared/model/program-model';
import { ProgramServiceService } from 'src/app/shared/service/program-service.service';

@Component({
  selector: 'app-program-items',
  templateUrl: './program-items.component.html',
  styleUrls: ['./program-items.component.scss']
})
export class ProgramItemsComponent implements OnInit {

  programListTitle: ProgramTitle[];
  programContent:ProgramModel[]
  programObject:ProgramTitle

  active:string = 'active'

  clicked:string = 'all'

  constructor(private program: ProgramServiceService, private renderer: Renderer2,private elRef: ElementRef) { }

  ngOnInit(): void {
    this.programContent = this.program.programService

    this.programListTitle = this.program.programTitle
  }


  ChangeClass(object):void{
    // this.renderer.removeClass(activeEl,this.active)
    // this.renderer.addClass(e.target,this.active)    
    this.programObject = object
    this.clicked = this.programObject.title
    let programDiv = this.elRef.nativeElement.querySelectorAll('section')

    programDiv.forEach((programItem)=>{

      if(programItem.getAttribute('class') === this.clicked || this.clicked === 'all'){
        // this.renderer.removeClass(programItem,'hide')
        // this.renderer.addClass(programItem,'show')
        this.renderer.setStyle(programItem,'display','inline-block')
        
      }
      else{
        // this.renderer.addClass(programItem,'hide')
        // this.renderer.removeClass(programItem,'show')
        this.renderer.setStyle(programItem,'display','none')
        

      }
    })
    
  }

  // getElement(e:Event):void{
  //   console.log(e.target);
    
  // }

}
