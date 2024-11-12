import { Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { IApiResponse, Icourse } from '../../model/master.model';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SlicePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  courseList = signal<Icourse[]>([]);
  masterService = inject(MasterService)
  @ViewChild('courseModal') modal: ElementRef | undefined;


  ngOnInit(): void {
    this.loadCourses();
  }
  loadCourses(){
    this.masterService.getAllCourses().subscribe((res:IApiResponse)=>{
      this.courseList.set(res.data);
      console.log(this.courseList)
    },error=>{

    })
  }
  openModal(courseId: number){
    if(this.modal){
      this.modal.nativeElement.style.display = 'block';
      this.getCourseVideos(courseId);
    }
  }
  getCourseVideos(courseId: number){
    this.masterService.getCourseVideosbyCourseId().
  }
}
