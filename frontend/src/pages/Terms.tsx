import React from "react";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { Toaster } from "sonner";

export default function Terms() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-12 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-serif text-4xl font-bold tracking-wider mb-8">Terms of Service</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Last Updated: March 19, 2025
            </p>
            
            <p className="mb-6">
              Welcome to YOLO Life. Please read these Terms of Service ("Terms") carefully as they contain important
              information regarding your legal rights, remedies, and obligations. By accessing or using the YOLO Life
              website, you agree to be bound by these Terms and our Privacy Policy.
            </p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-6">
              By accessing or using our website, you agree to these Terms and any additional terms that may apply.
              If you do not agree to these Terms, please do not use our website or services.
            </p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">2. Changes to Terms</h2>
            <p className="mb-6">
              We reserve the right to modify these Terms at any time. We will provide notice of any material changes
              by posting the new Terms on our website and updating the "Last Updated" date. Your continued use of the website
              after such changes constitutes your acceptance of the new Terms.
            </p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">3. Using Our Services</h2>
            
            <h3 className="text-xl font-medium mt-6 mb-3">3.1 Account Registration</h3>
            <p className="mb-4">
              Some parts of our website may require you to create an account. You agree to provide accurate, current, and
              complete information during the registration process and to update such information to keep it accurate,
              current, and complete. You are responsible for safeguarding your password and for all activities that occur
              under your account.
            </p>
            
            <h3 className="text-xl font-medium mt-6 mb-3">3.2 Prohibited Activities</h3>
            <p className="mb-4">
              When using our website, you agree not to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Use our services to distribute unsolicited commercial messages ("spam")</li>
              <li>Attempt to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running our services</li>
              <li>Upload invalid data, viruses, worms, or other software agents through our services</li>
              <li>Collect or harvest any personally identifiable information from our services</li>
              <li>Use our services for any illegal or unauthorized purpose</li>
              <li>Impersonate any person or entity</li>
            </ul>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">4. Content</h2>
            
            <h3 className="text-xl font-medium mt-6 mb-3">4.1 Intellectual Property Rights</h3>
            <p className="mb-4">
              The content on our website, including text, graphics, logos, images, and software, is the property of
              YOLO Life or its content suppliers and is protected by United States and international copyright,
              trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            
            <h3 className="text-xl font-medium mt-6 mb-3">4.2 User Content</h3>
            <p className="mb-4">
              By posting, uploading, or otherwise making available any content on our website, you grant to YOLO Life
              a non-exclusive, royalty-free, worldwide, perpetual license to use, modify, publicly display, publicly
              perform, reproduce, and distribute such content on and through our services.
            </p>
            
            <h3 className="text-xl font-medium mt-6 mb-3">4.3 Content Guidelines</h3>
            <p className="mb-4">
              You agree not to post content that:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Is unlawful, harmful, threatening, abusive, harassing, defamatory, libelous, invasive of another's privacy, or harmful to minors in any way</li>
              <li>Harasses, degrades, intimidates, or is hateful toward an individual or group of individuals on the basis of religion, gender, sexual orientation, race, ethnicity, age, or disability</li>
              <li>Includes personal information of third parties, such as addresses, phone numbers, email addresses, Social Security numbers, or credit card numbers</li>
              <li>Infringes any patent, trademark, trade secret, copyright, or other intellectual property of any party</li>
              <li>Contains software viruses or any other computer code designed to interrupt, destroy, or limit the functionality of any computer software or hardware</li>
            </ul>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">5. Payments and Subscriptions</h2>
            <p className="mb-6">
              When you make a donation or become a supporter, you agree to provide accurate and complete payment information.
              All payments are processed through secure third-party payment processors. By providing your payment information,
              you authorize us to charge your chosen payment method for the subscription or donation amount you have selected.
            </p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">6. Termination</h2>
            <p className="mb-6">
              We reserve the right to terminate or suspend your account and access to our services at our sole discretion,
              without notice, for any reason, including but not limited to a breach of these Terms. Upon termination,
              your right to use our services will immediately cease.
            </p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">7. Disclaimer of Warranties</h2>
            <p className="mb-6">
              THE INFORMATION AND SERVICES PROVIDED ON OUR WEBSITE ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY
              WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW,
              YOLO LIFE DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES
              OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">8. Health Disclaimer</h2>
            <p className="mb-6">
              The content on our website is not intended to be a substitute for professional medical advice, diagnosis, or
              treatment. Always seek the advice of your physician or other qualified health provider with any questions you
              may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it
              because of something you have read on our website.
            </p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">9. Limitation of Liability</h2>
            <p className="mb-6">
              IN NO EVENT SHALL YOLO LIFE, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS, BE LIABLE FOR ANY INDIRECT,
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS,
              DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO
              ACCESS OR USE THE SERVICES.
            </p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">10. Governing Law</h2>
            <p className="mb-6">
              These Terms shall be governed by and construed in accordance with the laws of the State of California,
              without giving effect to any principles of conflicts of law. Any dispute arising from these Terms shall be
              resolved in the courts located in Los Angeles County, California.
            </p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">11. Severability</h2>
            <p className="mb-6">
              If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or
              eliminated to the minimum extent necessary so that the Terms will otherwise remain in full force and effect
              and enforceable.
            </p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">12. Contact Us</h2>
            <p className="mb-6">
              If you have any questions about these Terms, please contact us at:
            </p>
            <ul className="list-none mb-6 space-y-2">
              <li>Email: legal@yololife.com</li>
              <li>Address: 123 Wellness Way, Mindful City, MC 12345</li>
              <li>Phone: (123) 456-7890</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}
