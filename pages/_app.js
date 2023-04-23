import { QuioscoProvider } from "@/context/quiosco/QuioscoProvider";
import "@/styles/globals.css";
export default function App({ Component, pageProps }) {
  return (
  
      <QuioscoProvider> 
        <Component {...pageProps} />
      </QuioscoProvider>
   
  );
}
