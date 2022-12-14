import html from "html-literal";

export default () => html`
  <section id="contact">
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
        <h1>Contact</h1>
        <form action="https://formspree.io/f/moqbzodo" method="POST">
          <label>
            Your email:
            <input type="email" name="email" />
          </label>
          <label>
            Your message:
            <textarea name="message"></textarea>
          </label>
          <button type="submit">Send</button>
        </form>

        <p>Send all correspondence to:</p>
        <a href="https://www.linkedin.com/in/leamanbrown/">LinkedIN</a>
        <a href="https://github.com/LeamanB">Github</a>
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
