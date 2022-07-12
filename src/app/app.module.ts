import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ContactUsModule } from './features/contact-us/contact-us.module';
import { AboutModule } from './features/about/about.module';
import { AuthModule } from './features/auth/auth.module';
import { LeaderboardsModule } from './features/leaderboards/leaderboards.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    AboutModule,
    ContactUsModule,
    AuthModule,
    LeaderboardsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
