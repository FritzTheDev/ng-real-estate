import { Component } from '@angular/core';
import { AngularFirestore } from '../../node_modules/angularfire2/firestore';
import { Observable } from '../../node_modules/rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Observable<any[]>
  constructor(db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();
  }
}
