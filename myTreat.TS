xport class MyTreatComponent implements OnInit {
  .
  .
  .
  .
  restaurantDetails:Restaurants;
  restaurantName = [];
  selectedRestaurant:string;


      
      this.restaurantDetails= await this.service.getRestaurantDetails().toPromise();//Get this service from my bracnh 206
      
      let i=0;
      for(let restaurant in this.restaurantDetails){
      let tempName:string = this.restaurantDetails[i].restaurantName;
      this.restaurantName.push(tempName);  
      i++;
      }
