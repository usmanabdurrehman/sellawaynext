import '../styles/globals.css'
import axios from 'axios'

function MyApp({ Component, pageProps }) {

	axios.defaults.baseURL = 'http://localhost:7000/'

	return <Component {...pageProps} />
}

export default MyApp
