
import Hero from '../../components/hero/hero'
import MainContent from '../../components/main/MainContent'
import PricingPlans from '../../components/pricingPlan/PricingPlans'
import NewsletterForm from '../../components/newsletter/NewsletterForm'
import AnimatedImage from '../../components/animatedImg/AnimatedImage'
import Stats from '../../components/stats/MyStats'

const Home = () => {
  return (
    <div>
        <Hero />
        <MainContent />
        <Stats />
        <AnimatedImage />
        <PricingPlans />
        <NewsletterForm />
    </div>
  )
}

export default Home