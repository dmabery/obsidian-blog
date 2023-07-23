import { Head, Html, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.10.0-alpha/dist/katex.min.css"
          integrity="sha384-BTL0nVi8DnMrNdMQZG1Ww6yasK9ZGnUxL1ZWukXQ7fygA1py52yPp9W4wrR00VML"
          crossOrigin="anonymous"
        />
      </Head>
      <body className="md:m-3">
        <NextScript />
      </body>
    </Html>
  );
}
