import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
static async getInitialProps(ctx: DocumentContext) {
const initialProps = await Document.getInitialProps(ctx)
return initialProps
}

render() {
return (
<Html lang="en">

<Head>
  <link rel="icon" href="favicon.ico" type="image/x-icon" />
</Head>

<body className="bg-gray-100 antialiased selection:bg-green-300 selection:text-green-900
        dark:bg-gray-900/95 dark:selection:bg-green-300 dark:selection:text-green-900">
  <Main />
  <NextScript />
</body>

</Html>
)
}
}

export default MyDocument