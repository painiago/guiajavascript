/* eslint-disable @next/next/no-title-in-document-head */
import Document, { Html, Main, NextScript, Head} from 'next/document';

// require('dotenv').config();
export default class MyDocument extends Document {
  render(){
    return(
      <Html>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" rel="stylesheet"/>
        <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=iggne"></script>
        <Head>
       </Head>

      <body>
        <Main/>
        <NextScript/>
      </body>
      </Html>
    )
  }
}