import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get-urls',
  templateUrl: './get-urls.component.html',
  styleUrls: ['./get-urls.component.css']
})
export class GetUrlsComponent implements OnInit {


	private urlStrings: any = [];

	constructor(private httpClient: HttpClient) {

	}

	ngOnInit() {
		this.httpClient.get('http://127.0.0.1:8000/urls').subscribe((res)=>{
			console.log(res);

			this.urlStrings = res;
		});
	}

}
