import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public cartitems:number=0;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.products().subscribe(res=>{
      this.cartitems = res.length;
    })
  }

}
