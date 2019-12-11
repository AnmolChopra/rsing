import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { IncomeComponent } from './income/income.component';
import { LoginComponent } from './login/login.component';
import { MemberComponent } from './member/member.component';
import { MemberProfileComponent } from './member-profile/member-profile.component';
import { MyDirectComponent } from './my-direct/my-direct.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { NewMemberComponent } from './new-member/new-member.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { SendFreeLinkComponent } from './send-free-link/send-free-link.component';
import { UserComponent } from './user/user.component';
import { WalletComponent } from './wallet/wallet.component';


@NgModule({
  declarations: [
    AppComponent,
    IncomeComponent,
    DashboardComponent,
    LoginComponent,
    MemberComponent,
    MemberProfileComponent,
    MyDirectComponent,
    MyTeamComponent,
    NewMemberComponent,
    PaymentHistoryComponent,
    SendFreeLinkComponent,
    UserComponent,
    WalletComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
