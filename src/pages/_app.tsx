import "@reach/dialog/styles.css"
import Head from "next/head"
import { useEffect } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { ThemeProvier } from "../context/ThemeContext"
import "../styles/globals.css"
import "../styles/loading.css"
import "../styles/skeleton-loading.css"
import "../styles/strategy.css"
import "../styles/trip.css"
import "react-multi-carousel/lib/styles.css"
import "aos/dist/aos.css"

function App({ Component, pageProps }) {
  // react query stop refetch when switch browser tabs
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  })

  useEffect(() => {
    document.addEventListener("wheel", function () {
      // @ts-ignore
      if (document.activeElement.type === "number") {
        // @ts-ignore
        document.activeElement.blur()
      }
    })
  }, [])

  return (
    <>
      <Head>
        <title>Happy 20/10</title>
        <meta name="description" content="For my bestie" />
        <meta property="og:title" content="For my bestie" />
        <meta property="og:description" content="For my bestie" />
        <meta property="og:image" content="/images/thumbnail.png" />
      </Head>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <QueryClientProvider client={queryClient}>
        <ThemeProvier>
          <Component {...pageProps} />
        </ThemeProvier>
      </QueryClientProvider>
    </>
  )
}

export default App
