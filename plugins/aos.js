import AOS from 'aos'
import 'aos/dist/aos.css'

export default ({ app }) => {
  app.AOS = new AOS.init({
    duration: 800,
    easing: 'slide',
    once: true,
  })
}
