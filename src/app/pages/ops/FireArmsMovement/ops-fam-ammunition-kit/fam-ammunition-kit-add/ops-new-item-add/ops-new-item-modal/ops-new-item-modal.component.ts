import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-ops-new-item-modal',
  templateUrl: './ops-new-item-modal.component.html',
  styleUrls: ['./ops-new-item-modal.component.scss']
})
export class OPSNewItemModalComponent implements OnInit {

  modeltitle:string="";
  modeltype:string;

  showItemCategory : boolean = false;
  showItemType :boolean = false;
  showItem :boolean = false;
  showItemModel:boolean = false;
  showItemMaker:boolean = false;

  ItemCategoryFormGroup: UntypedFormGroup;
  ItemTypeFormGroup :UntypedFormGroup;
  ItemFormGroup:UntypedFormGroup;
  ItemModelFormGroup : UntypedFormGroup;
  ItemMakerFormGroup : UntypedFormGroup;

  constructor(  private dialogRef: MatDialogRef<OPSNewItemModalComponent>,  
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,) { }

  ngOnInit(): void {
    this.ItemCategoryFormGroup = this._fb.group({
      txtItem_Category: ["", Validators.required],
    });

    this.ItemTypeFormGroup = this._fb.group({
      drpCategory: ["", Validators.required],
      txtItem_Type: ["", Validators.required],
    });

    this.ItemFormGroup = this._fb.group({
      drpCategory: ["", Validators.required],
      drpItem_Type: ["", Validators.required],
      txtItem: ["", Validators.required],
    });

    this.ItemModelFormGroup = this._fb.group({
      drpCategory: ["", Validators.required],
      drpItem_Type: ["", Validators.required],
      txtItem_Model: ["", Validators.required],
    });

    this.ItemMakerFormGroup = this._fb.group({
      txtItem_Maker: ["", Validators.required],
    });


    
    if(this.modeltype == 'add_item_category'){
      this.showItemCategory = true;
      this.showItemType = false;
    }
    else if (this.modeltype == 'add_item_type'){
      this.showItemCategory = false;
      this.showItemType = true;
    }

    else if (this.modeltype == 'add_item'){
      this.showItemCategory = false;
      this.showItemType = false;
      this.showItem = true;
    }

    else if (this.modeltype == 'add_item_model'){
      this.showItemCategory = false;
      this.showItemType = false;
      this.showItem = false;
      this.showItemModel = true;
    }

    else if (this.modeltype == 'add_item_maker'){
      this.showItemCategory = false;
      this.showItemType = false;
      this.showItem = false;
      this.showItemModel = false;
      this.showItemMaker = true;
    }
  }

  CloseModal() {
    this.dialogRef.close(true);
  }

}
