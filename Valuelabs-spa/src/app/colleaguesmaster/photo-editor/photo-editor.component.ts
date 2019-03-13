import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/_services/User.service';
import { AuthService } from './../../_services/auth.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
import { Photo } from 'src/app/_models/Photo';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.css']
})
export class PhotoEditorComponent implements OnInit {
@Input() photos: Photo[];
@Output() getMemberPhotoChange = new EventEmitter<string>();
  uploader: FileUploader;
  hasBaseDropZoneOver = false;
  baseUrl = environment.apiUrl;
  currentMain: Photo;


  constructor(private authservice: AuthService, private userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.intializeUploader();
  }
 fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
  intializeUploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl + 'users/' + this.authservice.decodedToken.nameid + '/photos',
      authToken : 'Bearer ' + localStorage.getItem('token'),
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024
    });
    this.uploader.onAfterAddingFile = (file) => {file.withCredentials = false; };
    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if(response) {
        const res: Photo = JSON.parse(response);
        const photo ={
          id: res.id,
          url: res.url,
          dateAdded: res.dateAdded,
          description: res.description,
          isMain: res.isMain
        };
        this.photos.push(photo);
      }
    }
  }
  setMainPhoto(photo: Photo) {
    this.userService.setMainPhoto(this.authservice.decodedToken.nameid, photo.id).subscribe(() => {
      this.toastr.success("Successfully set as Profile");
      this.currentMain = this.photos.filter(p => p.isMain === true)[0];
      this.currentMain.isMain = false;
      this.authservice.changeMemberPhoto(photo.url);
      this.authservice.currentUser.photoUrl = photo.url;
      localStorage.setItem('user', JSON.stringify(this.authservice.currentUser));
      photo.isMain = true;
    },error => {
      this.toastr.error(error);
    });
  }
  deletePhoto(id: number)
  {
    if(confirm("Are you sure to delete ")) {
      this.userService.DeletePhoto(this.authservice.decodedToken.nameid, id).subscribe(() =>
      {
        this.photos.splice(this.photos.findIndex(p =>p.id ===id),1);
        this.toastr.success("Photo has been Deleted");
      },error => {
        this.toastr.error("Failed to delete");
      }
      );
    }
  }
}
