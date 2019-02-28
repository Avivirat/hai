import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/User.service';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-colleagueDetailed',
  templateUrl: './colleagueDetailed.component.html',
  styleUrls: ['./colleagueDetailed.component.css']
})
export class ColleagueDetailedComponent implements OnInit {
  user : User;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];


  constructor(private userService:UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });


    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false
      }
    ];
    this.galleryImages = this.getImages();
   }
 getImages() {
   const imagesUrls = [];
   for(let i=0; i< this.user.photos.length; i++) {
     imagesUrls.push({
       small: this.user.photos[i].url,
       medium: this.user.photos[i].url,
       big: this.user.photos[i].url,
       description: this.user.photos[i].description
     });
   }
   return imagesUrls;
 }
}
