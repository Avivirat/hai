import { ColleagueEditComponent } from './../colleaguesmaster/colleague-edit/colleague-edit.component';
import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";

@Injectable()

export class PreventUnsavedChanges implements CanDeactivate<ColleagueEditComponent> {
  canDeactivate(component: ColleagueEditComponent) {
    if(component.editForm.dirty)
    return confirm('Are you are sure you want to continue? Any unsaved changes will be lost');
    return true;
  }
}
