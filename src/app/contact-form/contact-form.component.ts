import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  /*template: `
      <form>
        <div class="form-group">
            <label for="lastName">Last Name</label>
            <input ngModel name="lastName" #lastName="ngModel" (change)="log(lastName)" class="form-control" id="lastName"
                type="text">
        </div>
        <div class="form-group">
            <label for="firstName">First Name</label>
            <input ngModel name="firstName" #firstName class="form-control" id="firstName" type="text">
        </div>
        <div class="form-group">
            <label for="comment">Comment</label>
            <textarea ngModel name="comment" #comment class="form-control" id="comment"></textarea>
        </div>
        <button class="btn btn-primary">Enregistrer</button>
    </form>
  `,*/
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contactMethods = [
    { id: 1, name: 'email' },
    { id: 2, name: 'telephone' },
    { id: 3, name: 'sms' }
  ];

  nom: string = 'salut';
  isValid: boolean = true;
  log(x) {
    if (x.value == "")
      this.isValid = false;
    else
      this.isValid = true;
  }


  submit(f) {
    console.log(f);
  }

}
