import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Headers } from '@angular/http';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RepoComponent } from './repos/repos.component';
import { GitService } from './service/github.service';
import { RoutingModule } from './routing/routing.module';
// import { PriceDirective } from './price.directive';
// import { PipePipe } from './pipe.pipe';
// import { NgProgressModule } from '@ngx-progressbar/core';
// import { NgProgressHttpModule } from '@ngx-progressbar/http';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RepoComponent,
    // NotFoundComponent,
    // PriceDirective,
    // PropPipe

  ],
  imports: [
    BrowserModule,
    HttpModule,
      RoutingModule,
      // NgProgressModule.forRoot(),// normal progress bar
      // NgProgressHttpModule // progress bar to load http requests
  ],
  providers: [GitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
