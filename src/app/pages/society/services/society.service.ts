import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { getStorage, ref, listAll } from 'firebase/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class SocietyService {
  constructor(private afs: AngularFirestore) {}

  getAllSoc() {
    return this.afs.collection('/Companies').snapshotChanges();
  }
}
