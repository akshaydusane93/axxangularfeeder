import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-url',
  templateUrl: './add-url.component.html',
  styleUrls: ['./add-url.component.css']
})
export class AddUrlComponent implements OnInit {

	public addurlform: FormGroup;

	constructor(private httpClient: HttpClient) {

	}

	ngOnInit() {

		this.addurlform = new FormGroup({
	      txturl: new FormControl(''),
	    });
	}

	addUrl() {
		// console.log(this.addurlform.value.txturl)

		this.httpClient.post('http://127.0.0.1:8000/urls', {
			"urltext": this.addurlform.value.txturl
		}).subscribe((res)=>{
            alert("URL Added successfully")
        });
	}

}
