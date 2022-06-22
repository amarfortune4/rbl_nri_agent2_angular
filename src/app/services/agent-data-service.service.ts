import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgentDataServiceService {
  

  constructor(private http:HttpClient) {}

        

postAuthLogin(Obj:any):Observable<any>
{
  let url=`${environment.BASE_URL}/${environment.AGENT_URL}/`


  let emailID =Obj?.emailID;
  let pswd =Obj?.pswd;

  console.log("This is username and password object",Obj);

  if(emailID==='amar.s@fortune4.in' && pswd==='1234')
  {
    return of(true);
  }

  return of(false);
}


postAgentLogin(Obj:any):Observable<any>
{
  let url=`${environment.BASE_URL}/${environment.USER_URL}/login`

  return this.http.post<any>(url,Obj) 
}

postRegisterAgent(Obj:any):Observable<any>
{
  let url=`${environment.BASE_URL}/${environment.USER_URL}/register-it-agent`

  return this.http.post<any>(url,Obj)
}


agentAuthentication() {
  const userDataString = localStorage.getItem('agentData');
  if (userDataString) {
    const userData = JSON.parse(userDataString);
    return true;
  }
  return false;
}



removeObjecLocal(item: any) {
  //Get Object is null localstorage set inital data in localstorage
  if (localStorage.getItem(item) !== null || localStorage.getItem(item) !== undefined || localStorage.getItem(item) !== "undefined") {
    localStorage.removeItem(item);
    return;
  }
}



//////////////////////Fetch API /////////////////////////////////


fetchCountry(Obj: any): Observable<any> {
  let url = `${environment.BASE_URL}/customer/get_country_form`;
  return this.http.post<any>(url, Obj);
}


fetchAccntVariant(Obj: any): Observable<any> {
  let url = `${environment.BASE_URL}/customer/get_account_varient`;
  return this.http.post<any>(url, Obj);
}


fetchPersonalDtls1(Obj: any): Observable<any> {

  let url = `${environment.BASE_URL}/customer/personal_details_form_1`;
  return this.http.post<any>(url, Obj);

}

fetchPersonalDtls2(Obj: any): Observable<any> {

  let url = `${environment.BASE_URL}/customer/personal_details_form_2`;
  return this.http.post<any>(url, Obj);

}


fetchFatca(Obj: any): Observable<any> {
  let url = `${environment.BASE_URL}/customer/customer_fatca_form`;
  return this.http.post<any>(url, Obj);
}


fetchKycDtls1(Obj: any): Observable<any> {
  let url = `${environment.BASE_URL}/customer/customer_kyc_deatil`;
  return this.http.post<any>(url, Obj);
}


updateKycDtls1(Obj: any): Observable<any> {
  let url = `${environment.BASE_URL}/customer/update_kyc_details_1`;
  return this.http.post<any>(url, Obj);
}



fetchKycDtls2(Obj: any): Observable<any> {
  let url = `${environment.BASE_URL}/customer/customer_kyc_deatil_temp_visa_dec`;
  return this.http.post<any>(url, Obj);
}



fetchKycDtls4(Obj: any): Observable<any> {
  let url = `${environment.BASE_URL}/customer/customer_kyc_pio_dec`;
  return this.http.post<any>(url, Obj);
}


fetchContactDtls(Obj: any) {

  let url = `${environment.BASE_URL}/customer/customer_contact_details`;
  return this.http.post<any>(url, Obj);
}



fetchAddressDtls1(Obj: any) {

  let url = `${environment.BASE_URL}/customer/customer_overseas_current_address`;
  return this.http.post<any>(url, Obj);
}




fetchAddressDtls2(Obj: any) {

  let url = `${environment.BASE_URL}/customer/customer_permanent_Jurisdiction_address`;
  return this.http.post<any>(url, Obj);
}



fetchCustomerProfiler(Obj: any) {

  let url = `${environment.BASE_URL}/customer/customer_profile`;
  return this.http.post<any>(url, Obj);
}



fetchInternetBank1(Obj: any): Observable<any> {
  let url = `${environment.BASE_URL}/customer/customer_banking_facilities`;
  return this.http.post<any>(url, Obj);
}

fetchInternetBank2(Obj: any): Observable<any> {
  let url = `${environment.BASE_URL}/customer/customer_banking_facilities_1`;
  return this.http.post<any>(url, Obj);
}


fetchNomination1(Obj: any): Observable<any> {

  let url = `${environment.BASE_URL}/customer/nominee_details`;
  return this.http.post<any>(url, Obj);
}

fetchNomination2(Obj: any): Observable<any> {

  let url = `${environment.BASE_URL}/customer/nominee_details`;
  return this.http.post<any>(url, Obj);
}


fetchNomination3(Obj: any): Observable<any> {

  let url = `${environment.BASE_URL}/customer/gaurdian_details`;
  return this.http.post<any>(url, Obj);
}


fetchConcentDeclared(Obj:any): Observable<any> {
  
  let url = `${environment.BASE_URL}/customer/get_consent_declared`;
  return this.http.post<any>(url, Obj);
  //get_consent_declared
}



fetchAgentCommentSummary(Obj:any):Observable<any>
{
  let url = `${environment.BASE_URL}/agent/agent-lead-comment`;
  return this.http.post<any>(url, Obj);
}



//////////////////////////////Agents Comments API/////////////////////////////////

postAgentsComment(Obj:any):Observable<any>
{
  let url = `${environment.BASE_URL}/${environment.AGENT_URL}/add-comments`;
  return this.http.post<any>(url, Obj);
}

getNewLeadList(Obj:any):Observable<any>
{
  let url = `${environment.BASE_URL}/${environment.AGENT_URL}/lead-process-review-list`;
  return this.http.post<any>(url, Obj);
}


getProcessLeadList(Obj:any):Observable<any>
{
  let url=`${environment.BASE_URL}/${environment.AGENT_URL}/lead-process-review-list`
  return this.http.post<any>(url,Obj);
}


getReviewLeadList(Obj:any):Observable<any>
{
  let url=`${environment.BASE_URL}/${environment.AGENT_URL}/lead-process-review-list`
  return this.http.post<any>(url,Obj);
}

postAcceptAgentsLead(Obj:any):Observable<any>
{
  let url = `${environment.BASE_URL}/${environment.AGENT_URL}/accept_agent_leads`;
  return this.http.post<any>(url, Obj);
}


postAgentNewLeadsCount(Obj:any):Observable<any>
{
  let url = `${environment.BASE_URL}/${environment.AGENT_URL}/get-lead-count`;
  return this.http.post<any>(url, Obj);
}

postAgentProcessLeadsCount(Obj:any):Observable<any>
{
  let url = `${environment.BASE_URL}/${environment.AGENT_URL}/process-lead-count`;
  return this.http.post<any>(url, Obj);
}

postAgentReviewLeadsCount(Obj:any):Observable<any>
{
  let url = `${environment.BASE_URL}/${environment.AGENT_URL}/review-lead-count`;
  return this.http.post<any>(url, Obj);
}

postAgentRelativeAgent(Obj:any):Observable<any>
{
  let url = `${environment.BASE_URL}/${environment.CUSTOMER_URL}/customer-relative-details`;
  return this.http.post<any>(url, Obj);
}




//Get Customer Documents
postCustomerGetDoc(Obj:any):Observable<any>
{
    let url = `${environment.BASE_URL}/customer/get_document`;
    return this.http.post<any>(url, Obj);
  }



///Delete comment API
deleteComment(Obj:any):Observable<any>
{
  let url = `${environment.BASE_URL}/agent/delete-comments`;
  return this.http.post<any>(url, Obj);
}


//Approve Leads
approveLead(Obj:any):Observable<any>
{
  let url = `${environment.BASE_URL}/agent/forms-approved`;
  return this.http.post<any>(url, Obj);
}




/////Get Super Agents Leads///////////
getSuperAgentLeadList():Observable<any>
{
  let url=`${environment.BASE_URL}/${environment.SUPERAGENT_URL}/lead-list`
  return this.http.get<any>(url);
}

getSuperAgentAllAgentsList()
{
  let url=`${environment.BASE_URL}/${environment.SUPERAGENT_URL}/agent-list`
  return this.http.get<any>(url);
}


postAssignSuperAgentLead(Obj:any):Observable<any>
{
  let url=`${environment.BASE_URL}/${environment.SUPERAGENT_URL}/assigen-leads`
  return this.http.post<any>(url,Obj);
}






}
