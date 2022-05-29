import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SocietyComponent} from "./pages/society/society.component";
import {ReportsComponent} from "./pages/reports/reports.component";
import {UserComponent} from "./pages/user/user.component";
import {UserDetailComponent} from "./pages/user/user-detail/user-detail.component";
import {SocietyDetailsComponent} from "./pages/society/society-details/society-details.component";
import {SocietyAnnounceComponent} from "./pages/society/society-announce/society-announce.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {AuthComponent} from "./pages/auth/auth.component";
import {SideNavComponent} from "./pages/side-nav/side-nav.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/auth' },
  { path: 'auth', component: AuthComponent },
  { path: 'sideNav', component: SideNavComponent ,children: [
      { path: '',  component: UserComponent },
      { path: 'User', component: UserComponent  },
      { path: 'SocietyComponent', component: SocietyComponent },
      { path: 'ReportsComponent', component: ReportsComponent },
      { path: 'userDetails', component: UserDetailComponent },
      { path: 'societyDetails', component: SocietyDetailsComponent },
      { path: 'societyAnnounce', component: SocietyAnnounceComponent },
      { path: 'Profile', component: ProfileComponent },
    ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
