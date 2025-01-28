import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="favicon.ico" type="image/x-icon" />
        </Head>
        <body
          className="bg-gray-100 antialiased selection:bg-violet-300 selection:text-violet-900
        dark:bg-gradient-to-tr from-zinc-900 to-gray-800 dark:selection:bg-violet-300 dark:selection:text-violet-900"
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
