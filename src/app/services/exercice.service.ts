import { Injectable } from '@angular/core';
import { ExerciceParentService } from './exercice-parent.service';

@Injectable({
  providedIn: 'root'
})
export class ExerciceService extends ExerciceParentService {

  constructor() {
    super("myUrl2");
  }

}
