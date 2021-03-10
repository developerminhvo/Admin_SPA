import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UniversityService } from 'src/app/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-university-modal',
  templateUrl: './create-university-modal.component.html',
  styleUrls: ['./create-university-modal.component.scss']
})
export class CreateUniversityModalComponent implements OnInit {

  createUniversityForm: FormGroup;


  constructor(
    private _fb: FormBuilder,
    private _modalRef: NzModalRef,
    private _uniService: UniversityService
  ) { 
    
  }

  ngOnInit() {
    this.initCreateUniversityForm();
  }

  initCreateUniversityForm(): void {
    this.createUniversityForm = this._fb.group({
      'name': ['', Validators.required],
      'code': ['', Validators.required],
      'address': [''],
      'tuition': [''],
      'infomation': [''],     
    })
  };

  cancel(): void {
    this.closeModal();
  }
  
  closeModal(): void {
    this._modalRef.close();
  }

  submitForm(): void {
    if(this.createUniversityForm.valid){      
      this._uniService.createUniversity({} as any).pipe(
        catchError((err) => {
          Swal.fire('Lỗi', 'Thêm mới trường đại học thất bại', 'error');
          return of(undefined);          
        })
      ).subscribe();
      this.closeModal();
    } 
    
  }

  config = {
    uiColor: '#ffffff',
    toolbarGroups: [{ name: 'clipboard', groups: ['clipboard', 'undo'] },
    { name: 'editing', groups: ['find', 'selection', 'spellchecker'] },
    { name: 'links' }, { name: 'insert' },
    { name: 'document', groups: ['mode', 'document', 'doctools'] },
    { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
    { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align'] },
    { name: 'styles' },
    { name: 'colors' }],
    skin: 'kama',
    resize_enabled: false,
    removePlugins: 'elementspath,save,magicline',
    extraPlugins: 'divarea,smiley,justify,indentblock,colordialog',
    colorButton_foreStyle: {
       element: 'font',
       attributes: { 'color': '#(color)' }
    },
    height: 188,
    removeDialogTabs: 'image:advanced;link:advanced',
    removeButtons: 'Subscript,Superscript,Anchor,Source,Table',
    format_tags: 'p;h1;h2;h3;pre;div'
 }
}
