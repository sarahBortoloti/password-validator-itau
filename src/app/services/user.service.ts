import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@/environment/environment';
import { User } from '../models/user.model';
import { BehaviorSubject, delay, finalize, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly API = `${environment.API}users`;
  loading = true;
  private loadingSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient) {}

  get loading$(): Observable<boolean> {
    return this.loadingSubject.asObservable();
  }

  create(user: User) {
    this.loadingSubject.next(true);
    return this.httpClient.post(this.API, user).pipe(
      delay(2000),
      finalize(() => this.loadingSubject.next(false))
    );
  }
}
