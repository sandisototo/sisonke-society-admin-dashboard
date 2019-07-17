import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class RepositoryService {
  private _repositories: any;
  public _repositories$ = new Subject<any>();

  private _issues: any;
  public _issues$ =  new Subject<any>();

  constructor(private httpClient: HttpClient) { }

  searchByRepositoryName (searchString): Observable<any> {
    return this.httpClient.get(`/search/repositories?q=${searchString}`).pipe(
      map((body: any) => {
        this.setRepositories(body);
        return body;
      })
    );
  }

  getAllRepositories(): Observable<any> {
    return this.httpClient.get('/repositories').pipe(
      map((body: any) => {
        this.setRepositories(body);
        return body;
      })
    );
  }

  getRepositoryIssues(githubUrl: string) {
    return this.httpClient.get(`/repos/${githubUrl}/issues?state=all`).pipe(
      map((body: any) => {
        this.setIssues(body);
        return body;
      })
    );
  }

  private setRepositories(repositories?: any) {
    this._repositories = repositories || null;
    if (repositories) {
      this._repositories$.next(this._repositories);
    }
  }

  getRepositories(): Observable<any> {
    return this._repositories$.asObservable();
  }

  private setIssues(issues?: any) {
    this._issues = issues || null;
    if (issues) {
      this._issues$.next(this._issues);
    }
  }

  getIssues(): Observable<any> {
    return this._issues$.asObservable();
  }
}
