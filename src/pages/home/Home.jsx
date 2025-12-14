import React from 'react'
import Hero from '../../components/hero/hero'
import MainContent from '../../components/main/MainContent'
import PricingPlans from '../../components/pricingPlan/PricingPlans'
import NewsletterForm from '../../components/newsletter/NewsletterForm'
import Blogs from '../../components/blogs/Blogs'

const Home = () => {
  return (
    <div>
        <Hero />
        <MainContent />
        <PricingPlans />
        <NewsletterForm />  
    </div>
  )
}

export default Home