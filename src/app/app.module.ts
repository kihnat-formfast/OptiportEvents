import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {SuiModule} from 'ng2-semantic-ui';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ManageEmployeesComponent } from './components/manage-employees/manage-employees.component';
import { ViewHistoryComponent } from './components/view-history/view-history.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';


const appRoutes: Routes = [
  { path: '', component: UpcomingComponent },
  { path: 'manage', component: ManageEmployeesComponent },
  { path: 'history', component: ViewHistoryComponent },
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
