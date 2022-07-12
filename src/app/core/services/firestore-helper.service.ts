import { Injectable } from '@angular/core';
import {
  Firestore,
  docSnapshots,
  doc,
  DocumentSnapshot,
  collection,
  query,
  QueryConstraint,
  collectionSnapshots,
  setDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreHelper {

  constructor(private db: Firestore) { }
  
  async setDoc(params: {
    path: string,
    data: Object,
    merge?: boolean,
  }) {
    await setDoc(
      doc(this.db, params.path),
      params.data,
      { merge: params.merge ?? false },
    );
  }

  getDocObservable<T>(params: {
    path: string,
    builder: (data: any, docId: string) => T,
  }): Observable<T> {
    const docRef = doc(this.db, params.path);
    return docSnapshots(docRef).pipe(
      map<DocumentSnapshot, T>((snap, _) => params.builder(snap.data() as Object, snap.id)),
    );
  }

  getCollectionObservable<T>(params: {
    path: string,
    builder: (data: any, docId: string) => T,
    queryConstraints?: QueryConstraint[],
  }): Observable<T[]> {
    const _query = query(collection(this.db, params.path), ...(params.queryConstraints ?? []));
    return collectionSnapshots(_query).pipe(
      map((snapArray, _) => (snapArray) 
        ? snapArray.map(snap => params.builder(snap.data(), snap.id)) 
        : [],
      )
    );
  }
}
