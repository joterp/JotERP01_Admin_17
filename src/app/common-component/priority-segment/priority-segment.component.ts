import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';


import { ListColumn } from '../../../@fury/shared/list/list-column.model';
import { fadeInRightAnimation } from '../../../@fury/animations/fade-in-right.animation';
import { fadeInUpAnimation } from '../../../@fury/animations/fade-in-up.animation';


// service
import { ApiService } from '../../providers/services/ApiService';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'priority-segment',
  templateUrl: './priority-segment.component.html',
  styleUrls: ['./priority-segment.component.scss'],
  animations: [fadeInRightAnimation, fadeInUpAnimation]
})
export class PrioritySegment implements OnInit {

  
  langText: Array<object> = [];
  Segments: string[] = [];
  segmentCodes: string[] = [];

  constructor(
    private dialogRef:MatDialogRef<PrioritySegment>,
    private dialog: MatDialog, private api: ApiService, private snackbar: MatSnackBar) {
  
  }

  ngOnInit() {
    this.GetAllSegments();
  }

  ngAfterViewInit() {
    
  }

  GetAllSegments(){
    this.api.GetDataService('system/segments').subscribe( (res: object) => {
      if(res['code'] === 2000 && res['message'] === "SUCESS") {
        this.Segments = Object.values(res['result']);
      } 
    })
  }

  AddLang(){
    this.langText.push({
      key: '',
    });
  }

  RemoveLang(b: object, i: number){
    this.langText.splice(i, 1);
  }

  CloseModal(){
    this.dialogRef.close(null);
  }

  Save(){
    this.dialogRef.close(this.segmentCodes);
  }

}