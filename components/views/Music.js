import html from "html-literal";

export default () => html`
  <section id="music">
        <h1>Music</h1>
        <p>Listen to Holiday Songs</p>
        <div>
          <h3>Songs</h3>
          ${store.Home.userCalender}
        </div>
        <div>
          <h3>Poems</h3>
          ${store.Home.userCalender}
        </div>
        <div>
          <h3>Recommended Books</h3>
          ${store.Home.userCalender}
        </div>
      </body>

  </section>
`;
