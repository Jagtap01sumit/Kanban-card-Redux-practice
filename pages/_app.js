import { Provider } from "react-redux";
import store from "@/store/Store";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <main>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}

export default MyApp;
