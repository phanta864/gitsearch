import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  getUser(){
    // this.GitService. updateGit(this.username);
    // this.GitService.getGitInfo().subscribe(Git => {
    //   console.log(Git);
    //   this.Git = Git;
    // });
    // this.GitService.getRepos().subscribe(repos => {
    //   console.log(repos);
    //   this.repos = repos;
    // });

  }

  ngOnInit() {
  }
}
