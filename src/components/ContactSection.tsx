import { Phone, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [showToast, setShowToast] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Close the keyboard by blurring any active input
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }

    // Clear form data
    setFormData({ name: '', email: '', phone: '', message: '' })

    // Show bottom toast
    setTimeout(() => {
      setShowToast(true)
      // Hide toast after 5 seconds
      setTimeout(() => setShowToast(false), 5000)
    }, 300)
  }

  return (
    <section id='contact' className='py-20 px-4 bg-white'>
      <div className='container mx-auto'>
        <div className='grid lg:grid-cols-2 gap-12 items-start'>
          {/* Contact Info */}
          <div>
            <h3 className='text-4xl font-bold text-green-800 mb-8'>Get In Touch</h3>
            <p className='text-lg text-gray-700 mb-8'>
              Ready to go electric with your lawn care? Contact us today for a free consultation and quote.
              We're here to answer all your questions about our eco-friendly services.
            </p>

            <div className='space-y-6'>
              <div className='flex items-center space-x-4'>
                <div className='w-12 h-12 bg-green-600 rounded-full flex items-center justify-center'>
                  <Phone className='h-6 w-6 text-white' />
                </div>
                <div>
                  <h4 className='font-semibold text-green-800'>Phone</h4>
                  <p className='text-gray-700'>(309) 714-5552</p>
                </div>
              </div>

              <div className='flex items-center space-x-4'>
                <div className='w-12 h-12 bg-green-600 rounded-full flex items-center justify-center'>
                  <Mail className='h-6 w-6 text-white' />
                </div>
                <div>
                  <h4 className='font-semibold text-green-800'>Email</h4>
                  <p className='text-gray-700'>voltedgelawnsolutions@gmail.com</p>
                </div>
              </div>

              <div className='flex items-center space-x-4'>
                <div className='w-12 h-12 bg-green-600 rounded-full flex items-center justify-center'>
                  <MapPin className='h-6 w-6 text-white' />
                </div>
                <div>
                  <h4 className='font-semibold text-green-800'>Service Area</h4>
                  <p className='text-gray-700'>Quad Cities & Beyond</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Form */}
          <Card className='shadow-xl border-green-100'>
            <CardHeader>
              <CardTitle className='text-2xl text-green-800'>Request a Free Quote</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours with a personalized estimate
                for your electric lawn care needs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className='space-y-4' autoComplete='on'>
                <div>
                  <Input
                    name='name'
                    placeholder='Your Name'
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    required
                    autoComplete='name'
                    className='border-green-200 focus:border-green-500'
                  />
                </div>
                <div>
                  <Input
                    name='email'
                    type='email'
                    placeholder='Email Address'
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    required
                    autoComplete='email'
                    className='border-green-200 focus:border-green-500'
                  />
                </div>
                <div>
                  <Input
                    name='phone'
                    type='tel'
                    placeholder='Phone Number'
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    autoComplete='tel'
                    className='border-green-200 focus:border-green-500'
                  />
                </div>
                <div>
                  <Textarea
                    name='message'
                    placeholder='Tell us about your lawn care needs...'
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className='border-green-200 focus:border-green-500'
                  />
                </div>
                <Button type='submit' className='w-full bg-green-600 hover:bg-green-700 text-lg py-3'>
                  Get My Free Electric Quote
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Toast */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transform transition-transform duration-300 ${
          showToast ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className='bg-blue-400 text-blue-900 p-4 mx-4 mb-4 rounded-lg shadow-lg'>
          <div className='flex items-center justify-between'>
            <div>
              <h4 className='font-semibold'>Quote Request Sent!</h4>
              <p className='text-sm'>We'll get back to you within 24 hours with a free estimate.</p>
            </div>
            <button onClick={() => setShowToast(false)} className='text-white hover:text-green-200 ml-4'>
              ✕
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
