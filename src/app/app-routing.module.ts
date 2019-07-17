import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoryIssuesComponent } from './components/repository-issues/repository-issues.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/404/not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientComponent } from './components/client/client.component';
import { LoanComponent } from './components/loan/loan.component';
import { LoanDetailsComponent } from './components/loan-details/loan-details.component';
import { DocumentsComponent } from './components/documents/documents.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'clients',
    component: ClientComponent
  },
  {
    path: 'loans',
    component: LoanComponent
  },
  {
    path: 'loans/:clientId',
    component: LoanDetailsComponent
  },
  {
    path: 'documents',
    component: DocumentsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'repository-issues/:repositoryName',
    component: RepositoryIssuesComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
