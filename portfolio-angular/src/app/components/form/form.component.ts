import { Component } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { MailService } from '../../services/mail.service';
import { access_key,personal } from '../../../environments/environment';

@Component({
  selector: 'app-form',
  imports: [CardModule,InputTextModule,TextareaModule,FloatLabelModule, ButtonModule, FormsModule, MessageModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  contactForm:any ={
    first:'',
    last:'',
    phone:'',
    email:'',
    message:''
  };
  person_phone=personal.phone;
  person_email=personal.mail;
  access:any=access_key;
  constructor(private mailService :MailService){

  }
  errmsg:string='';
  errcode:number | undefined;

  validemail(email:string)
  {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email)
  }
  validateData()
  {
    if(this.contactForm.first=='')
    {
      return {
        message:"Please Enter valid Name",
        code:0
      }
    }
    if(this.contactForm.last=='')
    {
      return {
        message:"Please Enter valid Last Name",
        code:1
      }
    }
    if(this.contactForm.phone.length!=10)
    {
      return {
        message:"Please Enter valid Phone Number Name",
        code:2
      }
    }
    if(!this.validemail(this.contactForm.email))
    {
      return {
        message:"Please Enter valid Email",
        code:3
      }
    }else{
      return{
        message:"Success",
        code:4
      }
    }
    
  }
  submitform(){
    const res = this.validateData();
    this.errmsg=res.message;
    this.errcode=res.code;
    if(this.errcode==4)
    {
      const formData = new FormData;
      formData.append('access_key', this.access); 
      formData.append('subject', 'New Contact Form Submission');
      formData.append('name', `${this.contactForm.first} ${this.contactForm.last}`);
      formData.append('email', this.contactForm.email);
      formData.append('phone', this.contactForm.phone);
      formData.append('message', this.contactForm.msg);
      this.mailService.sendEmail(formData).then(res=>{
        if(res.ok)
        {
          console.log("form submitted");
          this.clearform()
        }else{
          console.log("error occured");
        }
      })
    }
  }
  clearform(){
    this.contactForm={}
  }

}
