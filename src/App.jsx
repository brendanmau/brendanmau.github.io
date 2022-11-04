import { Switch, Route } from 'wouter'
import './assets/brendanmau.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Index from './pages/Index'
import About from './pages/About'
import Contact from './pages/Contact'
import Multimedia from './pages/Multimedia'
import Articles from './pages/Articles'
import Resume from './pages/Resume'
import HireMe from './pages/HireMe'

function App() {
    return (
        <>
            <Header />
            <main>
                <Switch>
                    <Route path="/" component={Index} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/multimedia" component={Multimedia} />
                    <Route path="/articles" component={Articles} />
                    <Route path="/resume" component={Resume} />
                    <Route path="/hireme" component={HireMe} />
                    <Route>404, Not Found!</Route>
                </Switch>
            </main>
            <Footer />
        </>
    )
}

export default App
