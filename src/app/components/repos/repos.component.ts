import { Component, OnInit, Input, OnChanges, ChangeDetectorRef } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { collection } from 'firebase/firestore';


@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit, OnChanges {

  @Input() repoUrl: string = ''
  repos: any

  constructor(private githubService: GithubService, private ref:ChangeDetectorRef ){}



  ngOnChanges(): void {
    if(this.repoUrl){
      this.githubService.getUserRepos(this.repoUrl).subscribe((repos) => {
        this.repos = repos
        this.ref.detectChanges()
      },
      (err) => {
        console.log(err);
      }
      )
    }
  }

  ngOnInit(): void {

  }

}
