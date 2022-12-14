import html from "html-literal";

export default () => html`
  <section id="music">
    <a>
      <header>
        HHM
      </header>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
        <meta charset="UTF-8" />
        <title>Holiday, History, & Music</title>
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <nav>
          <a href="./index.html">Home</a>
          <a href="./history.html">History</a>
          <a href="./music.html">Music</a>
        </nav>
        <hr />
        <h1>Music</h1>
        <p>Listen to Holiday Songs</p>
        <div>
          <h3>Songs</h3>
        </div>
        <div>
          <h3>Poems</h3>
        </div>
        <div>
          <h3>Recommended Books</h3>
        </div>
      </body>

      <hr />
      <footer>
        <i>Listen, Learn, & Celebrate!</i>
        <nav>
          <a href="./about.html">About</a>
          <a href="./contact.html">Contact</a>
        </nav>
      </footer>
    </a>
  </section>
`;
