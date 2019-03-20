import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/User.service';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { TabsetComponent } from 'ngx-bootstrap';

@Component({
  selector: 'app-colleagueDetailed',
  templateUrl: './colleagueDetailed.component.html',
  styleUrls: ['./colleagueDetailed.component.css']
})
export class ColleagueDetailedComponent implements OnInit {
  @ViewChild('ColleagueTabs') ColleagueTabs: TabsetComponent;
  user: User;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];


  constructor(private userService:UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });

    this.route.queryParams.subscribe(params => {
      const selectedTab = params['tab'];
      this.ColleagueTabs.tabs[selectedTab > 0 ? selectedTab : 0].active = true;
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
   for(let i = 0; i < this.user.photos.length; i++) {
     imagesUrls.push({
       small: this.user.photos[i].url,
       medium: this.user.photos[i].url,
       big: this.user.photos[i].url,
       description: this.user.photos[i].description
     });
   }
   return imagesUrls;
 }
 selectTab(tabId: number) {
   this.ColleagueTabs.tabs[tabId].active = true;
 }
}
