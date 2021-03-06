import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../restaurants/restaurants.service';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
})
export class RestaurantDetailComponent implements OnInit {

  constructor(private restaurantsService:RestaurantsService, private rout: ActivatedRoute) { }

  restaurant:Restaurant

  ngOnInit() {
      this.restaurantsService.restaurantById(this.rout.snapshot.params['id'])
      .subscribe(restaurant => this.restaurant = restaurant)
  }

}
