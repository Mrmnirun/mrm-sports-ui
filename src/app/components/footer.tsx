import { useState } from 'react';
import { PolicyModal } from './policy-modal';

export function Footer() {
  const [showRefundPolicy, setShowRefundPolicy] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  const refundPolicyContent = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-xl font-semibold text-gray-900">Refund Policy</h3>
      <p>
        At MRM Sports, we strive to provide the best service to our customers. Please review our refund policy below:
      </p>
      
      <h4 className="font-semibold text-gray-900 mt-4">Cancellation Policy</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li>Cancellations made 48 hours or more in advance: Full refund</li>
        <li>Cancellations made 24-48 hours in advance: 50% refund</li>
        <li>Cancellations made less than 24 hours in advance: No refund</li>
        <li>No-shows will not be eligible for refunds</li>
      </ul>

      <h4 className="font-semibold text-gray-900 mt-4">Refund Process</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li>Refunds will be processed within 5-7 business days</li>
        <li>Refunds will be issued to the original payment method</li>
        <li>Please contact us at bookings@mrmsports.ca for all refund requests</li>
      </ul>

      <h4 className="font-semibold text-gray-900 mt-4">Facility Closure</h4>
      <p>
        In the event of facility closure due to unforeseen circumstances, full refunds will be provided 
        or bookings can be rescheduled at no additional cost.
      </p>
    </div>
  );

  const privacyPolicyContent = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-xl font-semibold text-gray-900">Privacy Policy</h3>
      <p>
        MRM Sports is committed to protecting your privacy and personal information. This policy outlines 
        how we collect, use, and safeguard your data.
      </p>
      
      <h4 className="font-semibold text-gray-900 mt-4">Information We Collect</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li>Name, email address, and phone number for booking purposes</li>
        <li>Payment information for processing transactions</li>
        <li>Usage data to improve our services</li>
      </ul>

      <h4 className="font-semibold text-gray-900 mt-4">How We Use Your Information</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li>To process bookings and payments</li>
        <li>To communicate about your reservations and facility updates</li>
        <li>To improve our services and customer experience</li>
        <li>To comply with legal obligations</li>
      </ul>

      <h4 className="font-semibold text-gray-900 mt-4">Data Security</h4>
      <p>
        We implement industry-standard security measures to protect your personal information. 
        Your payment data is encrypted and processed through secure payment gateways.
      </p>

      <h4 className="font-semibold text-gray-900 mt-4">Third-Party Services</h4>
      <p>
        We use third-party services (like Skedda) for booking management. These services have 
        their own privacy policies and we encourage you to review them.
      </p>

      <h4 className="font-semibold text-gray-900 mt-4">Your Rights</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li>Request access to your personal data</li>
        <li>Request correction of inaccurate data</li>
        <li>Request deletion of your data</li>
        <li>Opt-out of marketing communications</li>
      </ul>

      <p className="mt-4">
        For any privacy-related questions or requests, please contact us at info@mrmsports.ca
      </p>
    </div>
  );

  return (
    <>
      <footer className="bg-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* About */}
            <div>
              <h3 className="text-xl font-bold mb-4">MRM Sports</h3>
              <p className="text-white/80 mb-4">
                Canada's premier indoor cricket facility offering world-class training and practice environments.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-white/80 hover:text-white transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#facilities" className="text-white/80 hover:text-white transition-colors">Facilities</a>
                </li>
                <li>
                  <a href="#gallery" className="text-white/80 hover:text-white transition-colors">Gallery</a>
                </li>
                <li>
                  <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
                </li>
              </ul>
            </div>

            {/* Coming Soon */}
            <div>
              <h3 className="text-xl font-bold mb-4">Coming Soon</h3>
              <ul className="space-y-2 text-white/60">
                <li>Coaching Programs</li>
                <li>Blogs</li>
                <li>Events & Leagues</li>
                <li>FAQ</li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-xl font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => setShowPrivacyPolicy(true)}
                    className="text-white/80 hover:text-white transition-colors text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setShowRefundPolicy(true)}
                    className="text-white/80 hover:text-white transition-colors text-left"
                  >
                    Refund Policy
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/20 text-center text-white/60">
            <p>&copy; {new Date().getFullYear()} MRM Sports. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <PolicyModal 
        isOpen={showRefundPolicy}
        onClose={() => setShowRefundPolicy(false)}
        title="Refund Policy"
        content={refundPolicyContent}
      />

      <PolicyModal 
        isOpen={showPrivacyPolicy}
        onClose={() => setShowPrivacyPolicy(false)}
        title="Privacy Policy"
        content={privacyPolicyContent}
      />
    </>
  );
}
