import { Component } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [CardModule,InputTextModule,TextareaModule,FloatLabelModule, ButtonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  first:string='';
  last:string='';
  phone:number=0
  email:string='';
  msg:string=''
  submitform(){
    if(this.first.length==0)
    {

    }else if(this.last.length==0)
    {

    }else if(this.phone.toString.length!=10)
    {

    }else if(this.email.length==0)
    {

    }else {
      
    }
  }

}
