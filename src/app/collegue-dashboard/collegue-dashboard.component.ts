import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { collegueModal } from './collegue-dashboard.model';
@Component({
  selector: 'app-collegue-dashboard',
  templateUrl: './collegue-dashboard.component.html',
  styleUrls: ['./collegue-dashboard.component.css']
})
export class CollegueDashboardComponent implements OnInit {
  formValue !: FormGroup;
  collegueModelObj : collegueModal = new collegueModal();
  collegueData !: any;


  constructor( private formbuilder : FormBuilder,
    private api : ApiService) { }

  ngOnInit(): void {
    this.formValue =this.formbuilder.group({
      fname : [''],
      lname : [''],
      email : [''],
      mobile : [''],
      salary : [''],
    })
    this.getAllCollegue();
  }

  postCollegueDetails(){
    this.collegueModelObj.fname = this.formValue.value.fname;
    this.collegueModelObj.lname = this.formValue.value.lname;
    this.collegueModelObj.email = this.formValue.value.email;
    this.collegueModelObj.mobile = this.formValue.value.mobile;
    this.collegueModelObj.salary = this.formValue.value.salary;

    // this.api.postCollegue(this.collegueModelObj)
    // .subscribe(res=>{
    //   console.log(res);
    //   alert("Collegue Added Successfully")
    //   let ref = document.getElementById('cancel')
    //   ref?.click();
    //   this.formValue.reset();
    //   this.getAllCollegue();
    // },
    // err=>{
    //   alert("Something Went Wrong")
    // })

    this.api.postCollegue(this.collegueModelObj).subscribe(res=>{
      console.log(res);
      alert('Collegue added Successfully')
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllCollegue();
    },
    Error=>{
      alert('something went wrong')
    }
    )

  }

  getAllCollegue(){
    this.api.getCollegue().subscribe(res=>{
      this.collegueData = res;
    })
  }

  deleteCollegue(row : any){
    this.api.deleteCollegue(row.id)
    .subscribe(res=>{
      alert("Employee Deleted");
      this.getAllCollegue();
    })
  }

  onEdit(row : any){
    this.collegueModelObj.id = row.id
    this.formValue.controls['fname'].setValue(row.fname);
    this.formValue.controls['lname'].setValue(row.lname);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['mobile'].setValue(row.mobile);
    this.formValue.controls['salary'].setValue(row.salary);
  }
  updateCollegueDetails(){
    this.collegueModelObj.fname = this.formValue.value.fname;
    this.collegueModelObj.lname = this.formValue.value.lname;
    this.collegueModelObj.email = this.formValue.value.email;
    this.collegueModelObj.mobile = this.formValue.value.mobile;
    this.collegueModelObj.salary = this.formValue.value.salary;
    this.api.updateCollegue(this.collegueModelObj,this.collegueModelObj.id)
    .subscribe(res=>{
      alert("updated Successfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllCollegue();
    })
  }
}
