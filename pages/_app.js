import {AuthProvider} from "../auth"
import {ThemeProvider, CSSReset} from "@chakra-ui/core"

function MyApp({ Component, pageProps }) {
  return
  (
    <ThemeProvider>
      <CSSReset>
      <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
      </CSSReset>
    </ThemeProvider>
    
  )
}

export default MyApp
