import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {SuiModule} from 'ng2-semantic-ui';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';
import { ViewHistoryComponent } from './view-history/view-history.component';
import { UpcomingComponent } from './upcoming/upcoming.component';


const appRoutes: Routes = [
  { path: '', component: UpcomingComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ManageEmployeesComponent,
    ViewHistoryComponent,
    UpcomingComponent
  ],
  imports: [
    BrowserModule,
    SuiModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
