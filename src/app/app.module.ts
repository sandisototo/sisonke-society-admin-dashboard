import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule, MatExpansionModule, MatIconModule, MatFormFieldModule, MatRadioModule, MatGridListModule, MatMenuModule, MatSidenavModule, MatTableModule, MatPaginatorModule, MatSortModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';

import { HomeComponent } from './components/home/home.component';
import { RepositoryIssuesComponent } from './components/repository-issues/repository-issues.component';
import { NotFoundComponent } from './components/404/not-found.component';
import { PieChartComponent } from './components/reusable/piechart/piechart.component';

import { ApiPrefixInterceptor } from './services/http';
import { HeaderConfigService } from './services/http/header-config';
import { ErrorHandlerInterceptor } from './services/http/error-handler.interceptor';
import { MyErrorStateMatcher } from './services/form/my-error-state-matcher';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FormComponent } from './components/reusable/form/form.component';
import { MainNavComponent } from './components/reusable/main-nav/main-nav.component';
import { ClientComponent } from './components/client/client.component';
import { LoanComponent } from './components/loan/loan.component';
import { LoanDetailsComponent } from './components/loan-details/loan-details.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { TableComponent } from './components/reusable/table-default/table.component';
import { TableExpandableComponent } from './components/reusable/table-expandable/table-expandable.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RepositoryIssuesComponent,
    NotFoundComponent,
    PieChartComponent,
    DashboardComponent,
    MainNavComponent,
    ClientComponent,
    LoanComponent,
    LoanDetailsComponent,
    FormComponent,
    DocumentsComponent,
    TableComponent,
    TableExpandableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatListModule,
    MatToolbarModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatGridListModule,
    ChartsModule,
    MatMenuModule,
    LayoutModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [
    ApiPrefixInterceptor,
    ErrorHandlerInterceptor,
    HeaderConfigService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true
    },
    MyErrorStateMatcher
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
