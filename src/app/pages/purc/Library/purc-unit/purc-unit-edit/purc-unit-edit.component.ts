import { Component, ElementRef, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import { MatDatepickerInputEvent } from "@angular/material/datepicker";

import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from "@angular/material-moment-adapter";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from "@angular/material/core";

import { Subject, ReplaySubject } from "rxjs";
import { takeUntil } from "rxjs/operators";

// service


import * as _moment from "moment";
import { UnitsService } from 'src/app/services/units.service';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

const moment = _moment;

@Component({
  selector: 'fury-purc-unit-edit',
  templateUrl: './purc-unit-edit.component.html',
  styleUrls: ['./purc-unit-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PURCUnitEditComponent implements OnInit {
  unitFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  IsEdit: boolean = false;



  @ViewChild('fileUploader') fileUploader: ElementRef;


  constructor(
    private dialogRef: MatDialogRef<PURCUnitEditComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    private _unitService: UnitsService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

    this.unitFormGroup = this._fb.group({
      txtUnit_Name: ["", Validators.required],
      txtUnit_Short_Name: [''],
      drpParent_Type: [''],
      txtConversion_Factor: ['']


    });
  }

  ngOnInit(): void {
    if (this.IsEdit) {
      this.unitFormGroup.patchValue(this.data);
    }


  }
  CloseModal() {
    this.dialogRef.close(true);
  }

  SaveUnitsForm(addNew = false) {
    this.ErrorMessage = "";
    if (this.submit) {
      return;
    }
    this.submit = true;
    var data: object = {};
    for (const elem in this.unitFormGroup.value) {
      data[elem] = this.unitFormGroup.value[elem];
    }

    this.submit = false;
    this.SaveUnits(data, this.IsEdit ? "units" + "/" + this.data.id : "units", addNew);

  }


  SaveUnits(data: object, path: string, addNew) {
    if (this.IsEdit) {
      this.api.PutDataService1(path, data).subscribe((res: object) => {
        console.log(res, "respost")
        this.submit = false;
        this.common.ShowMessage(
          "Unit updated successfully",
          "notify-success",
          3000
        );
        if (addNew) {
          this.unitFormGroup.reset();
        } else {

          this.dialogRef.close(true);
        }
      })
    }
    else {
      this.api.PostDataService1(path, data).subscribe((res: object) => {
        console.log(res, "respost")
        this.submit = false;
        this.common.ShowMessage(
          "Unit saved successfully",
          "notify-success",
          3000
        );
        if (addNew) {
          this.unitFormGroup.reset();
        } else {
          this.dialogRef.close(true);
        }
      })
    }
  }


}

