import { Component, OnInit,AfterViewInit} from '@angular/core';
import { AgentDataServiceService } from '../services/agent-data-service.service';
import { AgentCommonServiceService } from '../services/agent-common-service.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-leads-dtls-tbl',
  templateUrl: './leads-dtls-tbl.component.html',
  styleUrls: ['./leads-dtls-tbl.component.css']
})
export class LeadsDtlsTblComponent implements OnInit {

  agentListData: any;
  agentsCreateDate: any;
  accntType: number = 1;
  newLeads: string = '';
  leadsUnderProcess: string = '';
  reviewedLeads: string = '';
  agentListDataArr: Array<any> = [];
  agentListDataArr$: Observable<any> = of();
  superAgentListDataArr: Array<any> = [];
  roleID: number = 0;
  displayAssignLeads: string = 'none';
  displayAssignLeadSuccess:string= 'none';
  currentLeadID: number = 0;
  currentLeadName: string = '';
  allAgentList: any = '';
  agentID: number = 0;


  constructor(private agentDataServiceService: AgentDataServiceService, private agentCommonServiceService: AgentCommonServiceService, private rt: Router) { }

  ngOnInit(): void {

    this.agentDataServiceService.getSuperAgentAllAgentsList().subscribe((data) => {
      this.allAgentList = data?.agent_list;
      console.log('This is agent List', this.allAgentList);
    })



    let Obj = {
      agent_id: this.agentCommonServiceService.getUserFromLocalStorage()?.user_id,
      lead_type: 'lead'
    }


    this.roleID = this.agentCommonServiceService.getUserFromLocalStorage()?.role_id

    if (this.roleID === 2) {
      this.agentDataServiceService.getSuperAgentLeadList().subscribe((data) => {
        this.superAgentListDataArr = data?.data;
        console.log('This is super agent data', this.superAgentListDataArr);
      })
    } else {

      this.agentDataServiceService.getNewLeadList(Obj).subscribe((data) => {

        this.agentListData = data?.data;

        this.agentListData.map((data: any) => {
          console.log('This is agent data', data);
          let agentDate = new Date(data?.created_on);
          let agentDateAppliedOn = `${agentDate.getDate()}/${agentDate.getMonth()}/${agentDate.getFullYear()}  ${agentDate.getHours()}:${agentDate.getMinutes()}:${agentDate.getSeconds()}`;
          let Obj = Object.assign(data, { 'created_on': agentDateAppliedOn })
          this.agentListDataArr.push(Obj);

        })

      })
    }

    // let Obj={
    //   //agent_id: this.agentCommonServiceService.getUserFromLocalStorage()?.user_id
    //   agent_id: this.agentCommonServiceService.getUserFromLocalStorage()?.user_id,
    //   lead_type:'lead'
    // }

    // this.agentListDataArr$=this.agentDataServiceService.getNewLeadList(Obj);

    // console.log(this.agentListDataArr$);

    // this.agentDataServiceService.getNewLeadList(Obj).subscribe((data)=>{

    //   this.agentListData=data?.data;

    //   this.agentListData.map((data:any)=>{
    //     console.log('This is agent data',data)
    //     let agentDate=new Date(data?.created_on);
    //     let agentDateAppliedOn=`${agentDate.getDate()}/${agentDate.getMonth()}/${agentDate.getFullYear()}  ${agentDate.getHours()}:${agentDate.getMinutes()}:${agentDate.getSeconds()}`;
    //     let Obj=Object.assign(data,{'created_on':agentDateAppliedOn})
    //     this.agentListDataArr.push(Obj);

    //   })

    // })


  }

  // ngAfterViewInit(): void {


  //   let Obj = {
  //     agent_id: this.agentCommonServiceService.getUserFromLocalStorage()?.user_id,
  //     lead_type: 'lead'
  //   }


  //   this.roleID = this.agentCommonServiceService.getUserFromLocalStorage()?.role_id

  //   if (this.roleID === 2) {
  //     this.agentDataServiceService.getSuperAgentLeadList().subscribe((data) => {
  //       this.superAgentListDataArr = data?.data;
  //       console.log('This is super agent data', this.superAgentListDataArr);
  //     })
  //   } else {

  //     this.agentDataServiceService.getNewLeadList(Obj).subscribe((data) => {

  //       this.agentListData = data?.data;

  //       this.agentListData.map((data: any) => {
  //         console.log('This is agent data', data)
  //         let agentDate = new Date(data?.created_on);
  //         let agentDateAppliedOn = `${agentDate.getDate()}/${agentDate.getMonth()}/${agentDate.getFullYear()}  ${agentDate.getHours()}:${agentDate.getMinutes()}:${agentDate.getSeconds()}`;
  //         let Obj = Object.assign(data, { 'created_on': agentDateAppliedOn })
  //         this.agentListDataArr.push(Obj);

  //       })

  //     })
  //   }



  // }



  acceptLead(lead_id: number, applicantID: number) {
    let rejObj = this.agentCommonServiceService.getUserFromLocalStorage()
    let agentID = rejObj?.user_id;
    let Obj = {
      agent_id: agentID,
      lead_id: lead_id
    }

    this.agentCommonServiceService.storeInLocalStorage('agentData', { customerUserID: lead_id });

    this.agentDataServiceService.postAcceptAgentsLead(Obj).subscribe((data) => {
      console.log("Data is successfully accepted", data);

      this.rt.navigate(['/dashboard', 'lead-dtls1', applicantID]);
    })
  }


  superAgentAssignLeads() {
    let Obj = {
      agent_id: this.agentID,
      lead_id: this.currentLeadID
    }
    this.agentDataServiceService.postAssignSuperAgentLead(Obj).subscribe((data) => {
      console.log('This is assign leads agent', data);
      this.closeAssignLeadsModal();
      this.openSuccessLeadAssignLeadModal();

      setTimeout(()=>{
        this.closeSuccessLeadAssignLeadModal();
      },1000)
      //window.location.reload();
    })
  }


  openAssignLeadsOpenModal(id: number, firstName: string, lastName: string) {
    this.currentLeadID = id;
    this.displayAssignLeads = 'block';
    this.currentLeadName = `${firstName} ${lastName}`;
    console.log('THis is lead ID', id)
  }

  closeAssignLeadsModal() {
    this.displayAssignLeads = 'none';
  }

  getAgentID(event: any) {

    this.agentID = Number(event.target.value);
  }

  openSuccessLeadAssignLeadModal()
  {
    this.displayAssignLeadSuccess='block';
    
  }

  closeSuccessLeadAssignLeadModal()
  {
    this.displayAssignLeadSuccess='block';
    window.location.reload();
  }

}
