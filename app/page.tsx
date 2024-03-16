// pages/index.js

import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Page</title>
        <meta name="description" content="This is a simple Next.js page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <header>
          <h1>Welcome to Next.js</h1>
        </header>
        <main>
          <p>This is the first body section of the page. You can add your content here.</p>
        </main>
      </section>

      <section>
        <header>
          <h2>Second Header Section</h2>
        </header>
        <main>
          <p>This is the second body section of the page. You can add your content here.</p>
        </main>
      </section>

      <footer>
        <p>&copy; 2024 Next.js Example</p>
      </footer>
    </div>
  );
}

