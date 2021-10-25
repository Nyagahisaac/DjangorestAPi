import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConsumeService } from '../consume.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  DJANGO_SERVER = 'https://jsonplaceholder.typicode.com/comments';
  form!: FormGroup;
  response: any;
  imageURL: any;
  FormGroup: any;
  comments: any;

  constructor(private formBuilder: FormBuilder, private consumeService: ConsumeService) { }

  ngOnInit(): void {
    this.comments= this.consumeService.getComments(
     );
  }

  onChange(event: { target: { files: string | any[]; }; }) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.FormGroup.get('profile').setValue(file);
    }
  }

 
  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.FormGroup.get('profile').value);

    this.consumeService.subscribe(
      (res: { file: any; }) => {
        this.response = res;
        this.imageURL = `${this.consumeService}${res.file}`;
        console.log(res);
        console.log(this.comments);
      },
      (err: any) => {  
        console.log(err);
      }
    );
  }

}
