import { product } from "./../product-view/productmodal";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "src/app/shared/api.service";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"],
})
export class ProductDetailComponent implements OnInit {
  productdata: any | product;
  showadd: boolean = true;
  showremove: boolean = false;

  constructor(
    private api: ApiService,
    private activatedroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let productid = this.activatedroute.snapshot.paramMap.get("productid");
    //console.log("product id is",productid)
    productid &&
      this.api.getproductbyid(productid).subscribe((res) => {
        this.productdata = res;
        console.log(res);
      });
  }
  addtocart(productdata: product) {
    this.showadd = false;
    this.showremove = true;
    this.api.addtocart(productdata);
  }
  removeitem(productdata: product) {
    this.showadd = true;
    this.showremove = false;
    this.api.removecartitem(productdata);
  }
}
