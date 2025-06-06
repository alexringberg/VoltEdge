import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleSmoothScroll = (targetId: string) => {
    const targetSection = document.getElementById(targetId)
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
    setIsMobileMenuOpen(false) // Close mobile menu after clicking
  }

  const handleGetQuoteClick = () => {
    handleSmoothScroll('contact')
  }

  return (
    <header className='bg-white shadow-md sticky top-0 z-50'>
      <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
        <div className='flex items-center space-x-3'>
          <img
            src='https://scontent.fmli2-1.fna.fbcdn.net/v/t39.30808-6/481260423_10230962476503788_1949751788931603672_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=2mDAmAvxSnMQ7kNvwF8F7BL&_nc_oc=Adl362wkeGiBcpAryqC_NlduqG32_JDkvHYV3kmNaVoWBrpr1TPe-6c7QCo6dAx28Gc&_nc_zt=23&_nc_ht=scontent.fmli2-1.fna&_nc_gid=2Hef_QA1HzieN6E7XqeaTw&oh=00_AfJDfSK_xt2RDf4P3jvkxusDa5MeMUrtvaKNvP48he4A8g&oe=68453D34'
            alt='VoltEdge Lawn Solutions Logo'
            className='h-12 w-auto'
          />
          <div>
            <h1 className='text-xl font-bold text-green-800'>VoltEdge Lawn Solutions</h1>
            <p className='text-sm text-green-600'>100% Electric • Zero Emissions</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center space-x-6'>
          <button
            onClick={() => handleSmoothScroll('services')}
            className='text-green-700 hover:text-green-900 transition-colors'
          >
            Services
          </button>
          <button
            onClick={() => handleSmoothScroll('about')}
            className='text-green-700 hover:text-green-900 transition-colors'
          >
            About
          </button>
          <button
            onClick={() => handleSmoothScroll('contact')}
            className='text-green-700 hover:text-green-900 transition-colors'
          >
            Contact
          </button>
          <Button onClick={handleGetQuoteClick} className='bg-green-600 hover:bg-green-700'>
            Get Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden p-2'
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label='Toggle mobile menu'
        >
          {isMobileMenuOpen ? (
            <X className='h-6 w-6 text-green-700' />
          ) : (
            <Menu className='h-6 w-6 text-green-700' />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className='md:hidden bg-white border-t border-green-100'>
          <div className='container mx-auto px-4 py-4 space-y-4'>
            <button
              onClick={() => handleSmoothScroll('services')}
              className='block w-full text-left text-green-700 hover:text-green-900 transition-colors py-2'
            >
              Services
            </button>
            <button
              onClick={() => handleSmoothScroll('about')}
              className='block w-full text-left text-green-700 hover:text-green-900 transition-colors py-2'
            >
              About
            </button>
            <button
              onClick={() => handleSmoothScroll('contact')}
              className='block w-full text-left text-green-700 hover:text-green-900 transition-colors py-2'
            >
              Contact
            </button>
            <Button onClick={handleGetQuoteClick} className='w-full bg-green-600 hover:bg-green-700 mt-4'>
              Get Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
