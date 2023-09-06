import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { getCssText } from '@/styled'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>

        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Meta tags */}
        <meta name="keywords" content="nft, ethereum, protocol" />
        <meta name="keywords" content="NFT, API, Protocol" />

        <link
          rel="shortcut icon"
          type="image/svg"
          href="https://nftgo.io/favicon.ico"
        />

        {/* nftgo meta tags */}
        <meta property="nftgo:title" content="GoTrading Marketplace" />
        <meta property="nftgo:icon" content="https://nftgo.io/favicon.ico" />
        <meta
          property="nftgo:token-url-mainnet"
          content="/ethereum/asset/${contract}:${tokenId}"
        />
        <meta
          property="nftgo:token-url-goerli"
          content="/goerli/asset/${contract}:${tokenId}"
        />
        <meta
          property="nftgo:token-url-polygon"
          content="/polygon/asset/${contract}:${tokenId}"
        />
        <meta
          property="nftgo:token-url-arbitrum"
          content="/arbitrum/asset/${contract}:${tokenId}"
        />
        <meta
          property="nftgo:token-url-optimism"
          content="/optimism/asset/${contract}:${tokenId}"
        />
        <meta
          property="nftgo:token-url-zora"
          content="/zora/asset/${contract}:${tokenId}"
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
