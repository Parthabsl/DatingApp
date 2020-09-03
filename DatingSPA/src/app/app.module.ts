import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { ValuesComponent } from './values/values.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorConstantProvider } from './services/errorInterceptor';
import { MemberComponent } from './Member/Member.component';
import { ListComponent } from './List/List.component';
import { MessageComponent } from './Message/Message.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
@NgModule({
   declarations: [
      AppComponent,
      ValuesComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      MemberComponent,
      ListComponent,
      MessageComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      ErrorConstantProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
