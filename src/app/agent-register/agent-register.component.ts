import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import { AgentDataServiceService } from '../services/agent-data-service.service';

@Component({
  selector: 'app-agent-register',
  templateUrl: './agent-register.component.html',
  styleUrls: ['./agent-register.component.css']
})
export class AgentRegisterComponent implements OnInit {
  form:any;
  loginFailedErrMsg:string|undefined='';
  constructor(private rt: Router,private fb:FormBuilder,private agentDataServiceService:AgentDataServiceService) { }

  ngOnInit(): void {

    this.form=this.fb.group(
      {
      username:['',[Validators.required,Validators.required,Validators.pattern(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,4})+$/)]],
      firstName:['',Validators.required],
      middleName:['',Validators.required],
      lastName:['',Validators.required],
      mobileNo:['',Validators.required]

      })

    
      
      
  }

  get username(){return this.form.get('username')}
  get firstName(){return this.form.get('firstName')}
  get middleName(){return this.form.get('middleName')}
  get lastName(){return this.form.get('lastName')}
  get mobileNo(){return this.form.get('mobileNo')}



  submitLogin()
  {

    this.form.get('firstName')
    this.form.get('middleName')
    this.form.get('lastName')
    this.form.get('mobileNo')
    if(this.form.valid)
    {

      let Obj={
        email:this.form.get('username').value,
        user_type:"agent",
        first_name:this.form.get('firstName').value,
        middle_name:this.form.get('middleName').value,
        last_name:this.form.get('lastName').value,
        mobile_no:this.form.get('mobileNo').value,
        email_address:this.form.get('username').value,
        user_id:1
      }


      this.agentDataServiceService.postRegisterAgent(Obj).subscribe((data)=>{

        console.log("Agents Registered",data)
        this.rt.navigate(['/']);
      }) 
     
        
    }else
    {
      this.rt.navigateByUrl('/');
     
    }
    
  }

}
