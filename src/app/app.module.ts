import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ContactUsModule } from './features/contact-us/contact-us.module';
import { AboutModule } from './features/about/about.module';
import { AuthModule } from './features/auth/auth.module';
import { LeaderboardsModule } from './features/leaderboards/leaderboards.module';
import { HomeModule } from './features/home/home.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    SharedModule,
    AboutModule,
    ContactUsModule,
    AuthModule,
    LeaderboardsModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
