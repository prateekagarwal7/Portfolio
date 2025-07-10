import { Component } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-form',
  imports: [CardModule,InputTextModule,TextareaModule,FloatLabelModule, ButtonModule, FormsModule, MessageModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  first:string='';
  last:string='';
  phone:string='';
  email:string='';
  msg:string='';
  errmsg:string='';
  errcode:number=1;

  
  validateData()
  {
    if(this.first=='')
    {
      return {
        message:"Please Enter valid Name",
        code:0
      }
    }
    if(this.last=='')
    {
      return {
        message:"Please Enter valid Last Name",
        code:0
      }
    }
    if(this.email=='')
    {
      return {
        message:"Please Enter valid Email",
        code:0
      }
    }
    if(this.phone.length==10)
    {
      return {
        message:"Please Enter valid Phone Number Name",
        code:0
      }
    }else{
      return{
        message:"Success",
        code:1
      }
    }
    
  }
  submitform(){
    const res = this.validateData();
    this.errmsg=res.message;
    this.errcode=res.code;
  }

}
