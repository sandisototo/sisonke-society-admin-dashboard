import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { RepositoryService } from '../../services/repository/repository.service';
import { MatRadioChange } from '@angular/material';
import { ISSUE_STATES } from './../../shared/constants';

@Component({
  selector: 'app-repository-issues',
  templateUrl: './repository-issues.component.html',
  styleUrls: ['./repository-issues.component.css']
})
export class RepositoryIssuesComponent implements OnInit, OnDestroy {
  _issues: Array<any>;

  sub: Subscription;
  processing: boolean;

  selectedIssueState: string;
  issueStates: string[] = ISSUE_STATES;
  filteredIssues: Array<any>;
  repositoryName: string;

  // Piechart inputs
  pieChartLabels: string[] = ['Open', 'Closed'];
  pieChartData: number[];
  pieChartType: string = 'pie';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private repositoryService: RepositoryService
  ) {
  }

  ngOnInit() {
    this.processing = true;
    this.sub = this.route.params.subscribe(params => {
      this.repositoryName = params['repositoryName'];
      if (this.repositoryName) {
        this.repositoryService.getRepositoryIssues(this.repositoryName).subscribe((data: any) => {
          if (data && typeof data !== 'undefined') {
            this._issues = data;
            this.filteredIssues = this._issues;
            this.selectedIssueState = this.issueStates[0];

            this.pieChartData = this.prepareChartData();          
          } else {
            console.log(`Repository with name '${this.repositoryName}' not found, returning to search results`);
            this.gotoSearchResults();
          }
        });
      }
      this.processing = false;
    });
  }

  stateChange(event: MatRadioChange) {
    const state = event.value.toLowerCase();
    if (state !== 'all') {
      this.filteredIssues = this._issues.filter((issue) => issue.state === state);
    } else { 
      this.filteredIssues = this._issues;
    }
  }

  stateCount(state: string) {
    return this._issues.filter((issue) => issue.state === state).length;
  }

  private formatAsPercentage(stateCount, total) {
    return (stateCount * 100 / (total)).toFixed(2);
  }

  prepareChartData() {
    const openedTotal = this.stateCount('open');
    const closedTotal = this.stateCount('closed');

    let total = openedTotal + closedTotal;
    let openedPercentage = parseFloat(this.formatAsPercentage(openedTotal, total));
    let closedPercentage = parseFloat(this.formatAsPercentage(closedTotal, total));

    const pieValues = [openedPercentage, closedPercentage];
    return pieValues;
  }

  gotoSearchResults() {
    this.router.navigate(['/home']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
