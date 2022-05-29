import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { SocietyComponent } from './pages/society/society.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { MatIconModule } from '@angular/material/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { UserComponent } from './pages/user/user.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { UserDetailComponent } from './pages/user/user-detail/user-detail.component';
import { SocietyDetailsComponent } from './pages/society/society-details/society-details.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { SocietyAnnounceComponent } from './pages/society/society-announce/society-announce.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthComponent } from './pages/auth/auth.component';
import { SideNavComponent } from './pages/side-nav/side-nav.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FedyaComponent } from './fedya/fedya.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    SocietyComponent,
    ReportsComponent,
    UserComponent,
    UserDetailComponent,
    SocietyDetailsComponent,
    SocietyAnnounceComponent,
    ProfileComponent,
    AuthComponent,
    SideNavComponent,
    FedyaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    MatIconModule,
    NzTableModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    NzInputModule,
    NzPopconfirmModule,
    NzButtonModule,
    NzInputModule,
    NzModalModule,
    NzTabsModule,
    ReactiveFormsModule,
    NzFormModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
