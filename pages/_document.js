import crypto from "crypto"
import { Fragment } from "react"
import Document, { Head, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"

const GA_ID = "UA-46088004-1"

const cspHashOf = (text) => {
  const hash = crypto.createHash("sha256")
  hash.update(text)
  return `'sha256-${hash.digest("base64")}'`
}

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const isProduction = process.env.NODE_ENV === "production"

    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        isProduction,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  setGoogleTags() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}');
      `,
    }
  }

  render() {
    const { isProduction } = this.props
    // let csp = `default-src 'self'; img-src 'self' https:; script-src 'self' ${cspHashOf(
    //   NextScript.getInlineScriptSource(this.props)
    // )}`
    // if (process.env.NODE_ENV !== "production") {
    const csp = `style-src 'self' 'unsafe-inline';img-src 'self' https:; font-src 'self' data:; default-src 'self'; script-src 'unsafe-eval' 'self' 'sha256-onbIxCxMPFxg9IBqBGa3K9+RSFIXCKqTFUTCuB1rRvU=' https: data:`
    // }

    return (
      <html lang="pt-br">
        <Head>
          <meta httpEquiv="Content-Security-Policy" content={csp} />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          {/* Prefetch external assets */}
          <link rel="preconnect" href={"https://www.google-analytics.com"} />
          <link rel="dns-prefetch" href={"https://www.google-analytics.com"} />

          {/* Icons */}
          <link
            rel="shortcut icon"
            href="/images/favicons/favicon.ico"
            type="image/x-icon"
          />
          <link rel="icon" href="/images/favicons/favicon.ico" />
          <link
            rel="apple-touch-icon"
            href="/images/favicons/apple-touch-icon.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/images/favicons/apple-touch-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/images/favicons/apple-touch-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/images/favicons/apple-touch-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/images/favicons/apple-touch-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/images/favicons/apple-touch-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/images/favicons/apple-touch-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/images/favicons/apple-touch-icon-152x152.png"
          />

          {/* Facebook Tags */}
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://minasdev.org/images/facebook-thumb.png"
          />

          {/* Twitter Tags */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@minasdev" />
          <meta name="twitter:creator" content="@obetomuniz" />
          <meta
            name="twitter:image"
            content="https://minasdev.org/images/facebook-thumb.png"
          />

          {/* Google Tags */}
          <meta name="google" content="notranslate" />

          {/* Google Analytics */}
          {isProduction && GA_ID && (
            <Fragment>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              />
              <script dangerouslySetInnerHTML={this.setGoogleTags()} />
            </Fragment>
          )}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
