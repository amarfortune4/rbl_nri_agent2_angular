import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot, 
  UrlTree
} from '@angular/router';
import { Observable, of } from 'rxjs';
//import { CustomerDataService} from '../services/customer-data.service';
import { AgentDataServiceService } from '../services/agent-data-service.service';

@Injectable()
export class AgentAuthGuard implements CanActivate {
  constructor(private agentDataServiceService: AgentDataServiceService,private rt:Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
   |boolean 
   | UrlTree
   | Observable<boolean 
   | UrlTree> 
   | Promise<boolean 
   | UrlTree>
   {

    if (!this.agentDataServiceService.agentAuthentication()) {
      //this.rt.navigate(['/login']);
      this.rt.navigate(['/']);
      return false;
    }
    return true;
  
    }
}
