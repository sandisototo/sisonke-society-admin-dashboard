import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../../services/repository/repository.service';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/services/form/my-error-state-matcher';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchFormControl = new FormControl('', [
    Validators.required
  ]);
  matcher = new MyErrorStateMatcher();

  _repositories: Array<any>;
  processing: boolean;
  _searchStr: string;

  constructor(private repositoryService: RepositoryService) { }

  ngOnInit() {
    this.clearSearch();
  }

  clearSearch() {
    this.searchFormControl.reset();
  }

  search() {
    if (this.searchFormControl.valid) {
      this.searchByRepositoryName(this.searchFormControl.value);
    }
  }
  
  private async searchByRepositoryName(searchStr: string) {
    this.processing = true;
    this.repositoryService.searchByRepositoryName(searchStr).subscribe(data => {
      this._searchStr = searchStr;
      if (data && typeof data.items !== 'undefined') { 
        this._repositories = data.items;
      }
      this.processing = false;
    });
  }
}
