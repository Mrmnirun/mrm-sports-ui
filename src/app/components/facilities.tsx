import { useState } from 'react';
import Slider from 'react-slick';
import { ExternalLink, CheckCircle, XCircle, DollarSign, Info } from 'lucide-react';
import facilitiesData from './facilities.json';
import { BOOKING_URL } from '../../config/siteConfig';

interface Facility {
  id: string;
  name: string;
  images: string[];
  description: string;
  rules: string[];
  allowed: string[];
  notAllowed: string[];
  pricing: string;
  bookingUrl: string;
}

const facilities: Facility[] = facilitiesData as Facility[];

export function Facilities() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <section id="facilities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Facilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our premium cricket lanes designed for optimal training and practice
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 items-stretch">
          {facilities.map((facility) => (
            <div key={facility.id} className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col h-full justify-between">
              <div className="flex flex-col">
                {/* Image Carousel (top half) */}
                <div className="relative h-64 w-full overflow-hidden rounded-t-2xl">
                  <Slider {...sliderSettings} className="facility-slider h-full">
                    {facility.images.map((image, index) => (
                      <div key={index} className="relative h-full">
                        <img 
                          src={image}
                          alt={`${facility.name} - Image ${index + 1}`}
                          className="block w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>

                {/* Facility Details */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="mb-6 lg:min-h-[96px]">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{facility.name}</h3>
                    <p className="text-gray-700">{facility.description}</p>
                  </div>

                  <div className="mt-auto">
                    {/* Pricing */}
                    <div className="flex items-center gap-2 mb-4 p-4 bg-accent rounded-lg max-w-max">
                      <DollarSign className="w-5 h-5 text-primary" />
                      <span className="text-lg font-semibold text-gray-900">{facility.pricing}</span>
                    </div>

                    {/* Booking Button */}
                    <a 
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors mb-6 w-full md:w-auto"
                    >
                      Book This Lane
                      <ExternalLink className="w-5 h-5" />
                    </a>

                    {/* Collapsible Details */}
                    <details className="mb-4">
                      <summary className="cursor-pointer font-semibold text-gray-900 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                        Rules & Instructions
                      </summary>
                      <div className="mt-4 space-y-2 pl-4">
                        {facility.rules.map((rule, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <Info className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{rule}</span>
                          </div>
                        ))}
                      </div>
                    </details>

                    <details className="mb-4">
                      <summary className="cursor-pointer font-semibold text-gray-900 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                        What's Allowed
                      </summary>
                      <div className="mt-4 space-y-2 pl-4">
                        {facility.allowed.map((item, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </details>

                    <details className="mb-4">
                      <summary className="cursor-pointer font-semibold text-gray-900 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                        Not Allowed
                      </summary>
                      <div className="mt-4 space-y-2 pl-4">
                        {facility.notAllowed.map((item, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </details>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
