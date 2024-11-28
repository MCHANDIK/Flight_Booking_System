import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');

  }

  form: FormGroup=this.fb.group({


    from_name:'Traveller',

    to_name:'admin',

    email:'',

    subject:'',

    message:''

  });
 


  
  

  async send(){
    
    alert('Your Team will Connect soon')
    emailjs.init('KVYvCsEDcmQRmD5vS')
   
    
   
    
  let response=await emailjs.send("service_g6ycgwg","template_i855ydb",{
      from_name:  this.form.value.from_name,
      to_name: this.form.value.to_name,
      form_email: this.form.value.email ,
      subject: this.form.value.subject,
      message: this.form.value.message,
      });

  }

}
