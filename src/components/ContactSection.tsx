import { Phone, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'

const ContactSection = () => {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: 'Quote Request Sent!',
      description: "We'll get back to you within 24 hours with a free estimate.",
    })
    setFormData({ name: '', email: '', phone: '', message: '' })
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
              <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                  <Input
                    placeholder='Your Name'
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    required
                    className='border-green-200 focus:border-green-500'
                  />
                </div>
                <div>
                  <Input
                    type='email'
                    placeholder='Email Address'
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    required
                    className='border-green-200 focus:border-green-500'
                  />
                </div>
                <div>
                  <Input
                    type='tel'
                    placeholder='Phone Number'
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className='border-green-200 focus:border-green-500'
                  />
                </div>
                <div>
                  <Textarea
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
    </section>
  )
}

export default ContactSection
