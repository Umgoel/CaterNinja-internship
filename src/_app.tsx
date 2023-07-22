import { AppProps } from "next/app";
import Form from "./app/Form/page";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {Component === Form ? (
        <Component {...pageProps} />
      ) : (
        <div style={{ padding: "20px" }}>
          <Component {...pageProps} />
        </div>
      )}
    </>
  );
}

export default MyApp;
