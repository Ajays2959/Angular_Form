import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  student: any = {
    name: '',
    email:'', 
    education:'',
    city:'',
    dob:'',
    gender:'',
    phone:''
  }

  showHeader:boolean=false;
  employeeList:any=[];
  submit(form,value){
    console.log(form);
    if(form.invalid){
      alert("Please Insert Required Feilds");
    }else{
      this.showHeader=true;
      this.employeeList.push(value);
      console.log(this.employeeList);
      this.student={
        name:'',
        email:'',
        education:'',
        city:'',
        dob:'',
        gender:'',
        phone:''
      }
    }
  }

  remove(index,data){
    this.employeeList.splice(index,1);
    alert(data.name+ "Removed Successfully");
    if(this.employeeList.length==0){
      this.showHeader=false;
    }
  }

  buttonshow:boolean=false;
  removeIndex:any;
  update(index, data){
    this.student.name = data.name;
    this.student.email = data.email;
    this.student.education = data.education;
    this.student.city = data.city;
    this.student.dob = data.dob;
    this.student.gender = data.gender;
    this.student.phone = data.phone;
    this.buttonshow=true;
    this.removeIndex=index;
  }

  updatdata(){
    alert("Updated Successfully");
    this.employeeList.splice(this.removeIndex,1,this.student);
    this.buttonshow=false;
    this.student={
      name:'',
      email:'',
      education:'',
      city:'',
      dob:'',
      gender:'',
      phone:''
    }
  }




  // submit(form,value) {
  //   console.log(form);
  //   if(form.invalid){
  //     alert("Please insert required feilds");
  //   }else{
  //     console.log(value);
  //   }
  // }
  sum(){
    alert("Hi");
  }

}