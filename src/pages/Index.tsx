import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import EquipmentShowcase from '@/components/EquipmentShowcase'
import ServicesSection from '@/components/ServicesSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

const Index = () => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-green-50 to-white'>
      <Header />
      <HeroSection />
      <EquipmentShowcase />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Index
