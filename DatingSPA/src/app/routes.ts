import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberComponent } from './Member/Member.component';
import { ListComponent } from './List/List.component';
import { MessageComponent } from './Message/Message.component';
import { AuthguardGuard } from './authguard.guard';

export const appRoutes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'member', component: MemberComponent, canActivate: [AuthguardGuard]},
{path: 'list', component: ListComponent},
{path: 'message', component: MessageComponent},
{path: '**', redirectTo: '/home', pathMatch: 'full'}
]