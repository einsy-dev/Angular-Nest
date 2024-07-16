import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../widgets/header/header.component';
// import { SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header />
    <main class="">
      <router-outlet />
    </main>
  `,
  styles: `
    main {
      min-height: 100vh;
      width: 100%;
      max-width: 1440px;
      margin: 0 auto;
    }
  `,
})
export class AppComponent {
  // constructor(private swPush: SwPush) {}
  // ngOnInit() {
  //   this.swPush
  //     .requestSubscription({
  //       serverPublicKey:
  //         'BB-HmTaiFj1K_0JlxK5yEW_CGhpCokAe9-PkqQi9EizVji4bnlNy8M7hAmJ2rCAtN4woo-8sp6wfzZDZcRTxS34',
  //     })
  //     .then((sub) => console.log(sub));
  //   this.swPush.messages.subscribe((msg) => console.log('msg', msg));
  // }
}
