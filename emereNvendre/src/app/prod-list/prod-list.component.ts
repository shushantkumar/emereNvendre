import { Component, OnInit } from '@angular/core';
import { AllpostsService } from './../allposts/allposts.service';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.scss']
})
export class ProdListComponent implements OnInit {

  allpostsdata={};
  particular;
  constructor(
    private allpostsService:AllpostsService
  ) { }

  ngOnInit() {
    this.getAllPosts(); 
  }

  getAllPosts(){
    console.log("Something is going on!");
    this.allpostsService.getAllPosts().subscribe(
      (res) =>{
          console.log(res.products);
          let response = res.products;
         
          this.allpostsdata=response;
         
          // console.log(this.allpostsdata);
          
          // let response=JSON.parse(res);
        //   let x,y;
        //   for (x in response){
        //     var z = response[x];
        //   for( y in z) {
        //     console.log(z[y]);
        // }}
                  
        }, 
      (err) => console.log(err),
      () => console.log('done!')
  );

  }
  gomodal(something){
    console.log(something);
    this.particular=something;
    console.log(this.particular);
  }

}
