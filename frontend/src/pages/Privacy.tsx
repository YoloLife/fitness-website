import React from "react";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { Toaster } from "sonner";

export default function Privacy() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-12 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-serif text-4xl font-bold tracking-wider mb-8">Privacy Policy</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Last Updated: March 19, 2025
            </p>
            
            <p className="mb-6">
              At YOLO Life, we respect your privacy and are committed to protecting your personal data.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
              you visit our website or use our services.
            </p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-medium mt-6 mb-3">Information You Provide to Us</h3>
            <p className="mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Register for an account</li>
              <li>Sign up for our newsletter</li>
              <li>Submit a contact form</li>
              <li>Comment on articles</li>
              <li>Participate in surveys or promotions</li>
              <li>Make a donation or become a supporter</li>
            </ul>
            <p className="mb-4">
              The personal information we collect may include your name, email address, phone number,
              and any other information you choose to provide.
            </p>
            
            <h3 className="text-xl font-medium mt-6 mb-3">Information Automatically Collected</h3>
            <p className="mb-4">
              When you visit our website, we may automatically collect certain information about your device and
              usage patterns. This information may include:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Device information</li>
              <li>Pages visited and time spent</li>
              <li>Referring URLs</li>
            </ul>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect for various purposes, including to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process and complete transactions</li>
              <li>Send administrative information, such as updates, security alerts, and support messages</li>
              <li>Respond to comments, questions, and requests</li>
              <li>Send newsletters, marketing communications, and other information that may be of interest to you</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              <li>Personalize your experience on our website</li>
            </ul>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">Information Sharing and Disclosure</h2>
            <p className="mb-6">
              We may share your personal information in the following situations:
            </p>
            
            <h3 className="text-xl font-medium mt-6 mb-3">Third-Party Service Providers</h3>
            <p className="mb-4">
              We may share your information with third-party vendors, service providers, contractors, or agents
              who perform services for us or on our behalf and require access to such information to do that work.
              Examples include payment processing, data analysis, email delivery, hosting services, customer service,
              and marketing efforts.
            </p>
            
            <h3 className="text-xl font-medium mt-6 mb-3">Legal Requirements</h3>
            <p className="mb-4">
              We may disclose your information where we are legally required to do so in order to comply with
              applicable law, governmental requests, a judicial proceeding, court order, or legal process.
            </p>
            
            <h3 className="text-xl font-medium mt-6 mb-3">Business Transfers</h3>
            <p className="mb-4">
              We may share or transfer your information in connection with, or during negotiations of, any merger,
              sale of company assets, financing, or acquisition of all or a portion of our business to another company.
            </p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">Cookies and Similar Technologies</h2>
            <p className="mb-6">
              We use cookies and similar tracking technologies to track activity on our website and store certain information.
              Cookies are files with a small amount of data that may include an anonymous unique identifier.
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">Your Data Protection Rights</h2>
            <p className="mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Access:</strong> You have the right to request copies of your personal information.</li>
              <li><strong>Rectification:</strong> You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
              <li><strong>Erasure:</strong> You have the right to request that we erase your personal information under certain conditions.</li>
              <li><strong>Restrict processing:</strong> You have the right to request that we restrict the processing of your personal information under certain conditions.</li>
              <li><strong>Object to processing:</strong> You have the right to object to our processing of your personal information under certain conditions.</li>
              <li><strong>Data portability:</strong> You have the right to request that we transfer the data we have collected to another organization, or directly to you, under certain conditions.</li>
            </ul>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">Children's Privacy</h2>
            <p className="mb-6">
              Our website is not intended for children under 13 years of age. We do not knowingly collect personal
              information from children under 13. If you are a parent or guardian and you believe your child has
              provided us with personal information, please contact us.
            </p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p className="mb-6">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting
              the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review
              this Privacy Policy periodically for any changes.
            </p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">Contact Us</h2>
            <p className="mb-6">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <ul className="list-none mb-6 space-y-2">
              <li>Email: privacy@yololife.com</li>
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
