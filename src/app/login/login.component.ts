import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import { AgentDataServiceService } from '../services/agent-data-service.service';
import { AgentCommonServiceService } from '../services/agent-common-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:any;
  loginFailedErrMsg:string|undefined='';
  constructor(private rt: Router,private fb:FormBuilder,private agentDataServiceService:AgentDataServiceService,private agentCommonServiceService:AgentCommonServiceService) { }

  ngOnInit(): void {

    
    // if(this.agentDataServiceService.agentAuthentication()===true)
    // {

    //   this.rt.navigate(['/dashboard']);
    // }

    this.form=this.fb.group(
      {
      username:['',[Validators.required,Validators.required,Validators.pattern(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,4})+$/)]],
      password:['',[Validators.required,/*Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g)*/]]  
      })

    
      
      
  }

  get username(){return this.form.get('username')}

  get password(){return this.form.get('password')}


  submitLogin()
  {
    if(this.form.valid)
    {

      let Obj={
        username:this.form.get('username').value,
        password:this.form.get('password').value
      }

      this.agentDataServiceService.postAgentLogin(Obj).subscribe((data)=>
      {
        if(data?.message==='Logged in successfully')
        {
          this.agentCommonServiceService.storeInLocalStorage('agentData',data?.user)
          this.rt.navigate(['/dashboard']);
        }
      },(err)=>{
        this.loginFailedErrMsg="Email Or Password is incorrect";
        //this.rt.navigate(['/dashboard']);
      })
    
        
    }else
    {
      this.rt.navigateByUrl('/');
     
    }
    
  }

}
