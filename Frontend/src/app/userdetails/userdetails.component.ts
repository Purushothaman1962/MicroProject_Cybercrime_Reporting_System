import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/User';
import { RegisterService } from '../register.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialoguserComponent } from '../dialoguser/dialoguser.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent {

  displayedColumns: string[] = ['userId', 'userName', 'userType', 'mobileNumber', 'eMailId', 'location','action'];
  dataSource!: MatTableDataSource<any>;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private dialog : MatDialog, private api : RegisterService,private router:Router){


  }
  ngOnInit():void{
    this.getAllDetails();
  }
  openDialog() {
    this.dialog.open(DialoguserComponent, {
      width: '30%'
    }).afterClosed().subscribe(val=>
      {
        if(val=== 'save'){
          this.getAllDetails();
        }
      })
  }
  getAllDetails(){
    this.api.getAllDetails()
    .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:(err)=>{
        alert("Error while fetching the Records!!")
      }
    })
  }
  edit(row : any){
    this.dialog.open(DialoguserComponent,{
      width : '30%',
      data:row
    }).afterClosed().subscribe(val=>
      {
        if(val=== 'update'){
          this.getAllDetails();
        }
      })
  }


  delete(data:any){
    this.api.deleteUser(data)
    .subscribe({
      next:(res)=>{
        alert("User Deleted Successfully");
        this.getAllDetails();
      },
      error:()=>{
        alert('Unable to Delete (user have registered complaints)');
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();


    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  route(){
    this.router.navigate(['/AdminComplaint'])
   }

   route1(){
    this.router.navigate([''])
   }
}

