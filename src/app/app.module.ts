import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* Routing lets display specific views of the application
  depending on the URL path
*/
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    HeroesListComponent,
    PageNotFoundComponent
  ],
  // Defining routes
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      // path is a string that specifies the URL path for the route.
      {path: 'crisis-list', component: CrisisListComponent},
      /*
        component, is a string that specifies what component the application
        should display for that path.
      */
      {path: 'heroes-list', component: HeroesListComponent},
      // Route that redirects the user to display the /heroes-list component.
      {path: '', redirectTo: '/heroes-list', pathMatch: 'full'},
      /*
        This path is how Angular identifies a wildcard route,
        any route that does not match an existing route
        in the configuration will use this route.
      */
      {path: '**', component: PageNotFoundComponent}
    ]),
  ],
  // End of defining routes
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
