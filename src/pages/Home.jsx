import Hero from '../components/Hero'
import Classes from '../components/Classes'
import Instructors from '../components/Instructors'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div className="pt-16 lg:pt-20">
      <Hero />
      <Classes />
      <Instructors />
      <Gallery />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default Home 