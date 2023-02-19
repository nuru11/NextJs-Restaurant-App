import '../styles/globals.css';
import {Provider} from "react-redux"
import {store} from "../store/store"
import { ProSidebarProvider } from 'react-pro-sidebar';
import { SessionProvider } from "next-auth/react"


function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return(   
    <Provider store={store}>
         <SessionProvider session={session}>
         <ProSidebarProvider>
    <Component {...pageProps} />
    </ProSidebarProvider>
    </SessionProvider>
      </Provider>
  )
}

export default MyApp;
 