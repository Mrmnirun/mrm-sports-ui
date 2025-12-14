import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for bookings, inquiries, or to learn more about our facilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                    <p className="text-gray-700">
                      Unit 9,<br />
                      10 Melford Drive<br />
                      Toronto, Ontario.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-700">(647) 997-7132</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-700">bookings@mrmsports.ca</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Hours of Operation</h4>
                    <div className="text-gray-700">
                      <p>Monday - Friday: 9:00 AM - 10:00 PM</p>
                      <p>Saturday: 8:00 AM - 11:00 PM</p>
                      <p>Sunday: 8:00 AM - 11:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://www.instagram.com/_mrm_sports/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-accent rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.3785268137585!2d-79.23704138801074!3d43.80650727097464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d0d01a8aee93%3A0x6d46950d5f9efac4!2s10%20Melford%20Dr%20unit%209%2C%20Scarborough%2C%20ON%20M1B%202G1%2C%20Canada!5e0!3m2!1sen!2slk!4v1765708034610!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '500px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MRM Sports Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
