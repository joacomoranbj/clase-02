import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      footer works!
    </footer>
  `,
  //stylesUrls: ['footer.component.scss']
  styles: [
    `
    footer {
      background-color: orange;
    }
    `
  ],
})
export class FooterComponent {

}
