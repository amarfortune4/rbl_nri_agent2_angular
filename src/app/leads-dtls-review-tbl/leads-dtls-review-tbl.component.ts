import { Component, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { AgentDataServiceService } from '../services/agent-data-service.service';
import { AgentCommonServiceService } from '../services/agent-common-service.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';


@Component({
  selector: 'app-leads-dtls-review-tbl',
  templateUrl: './leads-dtls-review-tbl.component.html',
  styleUrls: ['./leads-dtls-review-tbl.component.css']
})
export class LeadsDtlsReviewTblComponent implements OnInit {
  agentListData: any;
  agentsCreateDate: any;
  accntType: number = 1;
  newLeads: string = '';
  leadsUnderProcess: string = '';
  reviewedLeads: string = '';
  agentListDataArr: Array<any> = [];
  constructor(private agentDataServiceService: AgentDataServiceService, private agentCommonServiceService: AgentCommonServiceService, private rt: Router) { }


  ngOnInit(): void {



    // $('#datatable').DataTable();

   



    // this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((resp: Response) => {
    //   this.empData = resp;
    //   this.temp = true;
    // });

    // $('#dataTable tfoot th').each(function () {
    //   var title = $(this).text();
    //   $(this).html('<input type="text" placeholder="Search ' + title + '" />');
    // });

    // var table = $('#dataTable').DataTable({
    //   initComplete: function () {
    //     this.api()
    //       .columns()
    //       .every(function () {
    //         var that = this;

    //         $('input', this.footer()).on('keyup change clear', function () {
    //           if (that.search() !== this.value) {
    //             that.search(this.value).draw();
    //           }
    //         });
    //       });
    //   },
    // });




    let Obj = {
      //agent_id: this.agentCommonServiceService.getUserFromLocalStorage()?.user_id
      agent_id: this.agentCommonServiceService.getUserFromLocalStorage()?.user_id,
      lead_type: 'agent_review'
    }

    this.agentDataServiceService.getReviewLeadList(Obj).subscribe((data) => {

      this.agentListData = data?.data;

      this.agentListData.map((data: any) => {
        console.log('This is agent data', data)
        let agentDate = new Date(data?.created_on);
        let agentDateAppliedOn = `${agentDate.getDate()}/${agentDate.getMonth()}/${agentDate.getFullYear()}  ${agentDate.getHours()}:${agentDate.getMinutes()}:${agentDate.getSeconds()}`;
        let Obj = Object.assign(data, { 'created_on': agentDateAppliedOn })
        this.agentListDataArr.push(Obj)

      })

    })

  

  }


  veiwReviewLeads(applicantID: number, leadID: number) {
    this.agentCommonServiceService.storeInLocalStorage('agentData', { customerUserID: leadID })
    this.rt.navigate(['/dashboard', 'lead-dtls1', applicantID]);

  }


}
