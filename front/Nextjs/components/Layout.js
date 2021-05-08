import Head from '../components/Head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.css'

var style = {
    margin: "0 50px",
    padding: "20px 0 0 0"
};

const Layout = ({ children }) => (
  <div>
    <Head />
    <Navigation />
    <div style={style}>
        {children}
        <Footer/>
    </div>
  </div>
)
 
export default Layout