import { Component, Renderer, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-layout-emp-list',
  templateUrl: './emp.list.component.html',
  styleUrls: ['./emp.list.component.scss']
})
export class EmpListComponent {
    employeeId: number = 1134;
    editable: Array<boolean> = [];
    focus: Array<boolean> = [];
    constructor(private el: ElementRef, private renderer: Renderer) {
    }

    @ViewChild('empIdInput', null) input; 

    handleChange(e, index) {
        if (this.editable.length === 0) {
            this.editable.push(false);
            this.focus.push(false);
        }
            
        else {
            this.editable[index] = !this.editable[index];
            this.focus[index] = !this.focus[index];
        }
        this.renderer.invokeElementMethod(this.el.nativeElement, 'focus');

        // console.log(this.input.nativeElement.value, 'input')
        // if (this.editable[index] )
        //     this.input.nativeElement.focus();
        // let text = e.target.outerText.replace(/(\r\n|\n|\r)/gm,"");
        //alert(e.keyCode)
        // if (text.length === 1) {
        //     e.preventDefault();
        //     return;
        // }
        // if(e.keyCode === 13) {
        //     e.preventDefault();
        //     return;
        // }
           
        //e.preventDefault();
        // remove extra lines
        // this.sendMessage();
        // let el = e;
        // let el = e, el2, range, sel;

        // el = e.target;
        // range = document.createRange();
        // sel = window.getSelection();
        // if (el.childNodes.length > 0) {
        // el2 = el.childNodes[el.childNodes.length - 2];
        // range.setStartAfter(el2);
        // } else {
        // range.setStartAfter(el);
        // }
        // range.collapse(true);
        // sel.removeAllRanges();
        // sel.addRange(range);
        
        // this.employeeId = parseInt(text);
    }

    formalCell(e) {
        e.target.blur();
    }
}