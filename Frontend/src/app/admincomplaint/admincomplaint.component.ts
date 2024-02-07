import { Component, ViewChild } from '@angular/core';
import { Complaint } from '../model/Complaint';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ComplaintService } from '../complaint.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DialogcomplaintComponent } from '../dialogcomplaint/dialogcomplaint.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admincomplaint',
  templateUrl: './admincomplaint.component.html',
  styleUrls: ['./admincomplaint.component.css']
})
export class AdmincomplaintComponent {

  displayedColumns: string[] = ['complaintId', 'userName', 'complaintType', 'description', 'aadharCardNumber', 'complaintStatus','action'];
  dataSource!: MatTableDataSource<any>;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private dialog : MatDialog, private api : ComplaintService,private router:Router){


  }
  ngOnInit():void{
    this.getAllProducts();
  }
  openDialog() {
    this.dialog.open(DialogcomplaintComponent, {
      width: '30%'
    }).afterClosed().subscribe(val=>
      {
        if(val=== 'save'){
          this.getAllProducts();
        }
      })
  }
  getAllProducts(){
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
  editProduct(row : any){
    this.dialog.open(DialogcomplaintComponent,{
      width : '30%',
      data:row
    }).afterClosed().subscribe(val=>
      {
        if(val=== 'update'){
          this.getAllProducts();
        }
      })
  }


  deleteProduct(data:any){
    this.api.deleteComplaint(data)
    .subscribe({
      next:(res)=>{
        alert("Product Deleted Successfully");
        this.getAllProducts();
      },
      error:()=>{
        alert('Unable to Delete Product');
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
   this.router.navigate(['/UserDetails'])
  }
}


