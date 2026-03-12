"use client";

import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-gray-600 mb-4">Last Updated: August 2025</p>

      <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
        <section>
          <h2 className="text-xl font-semibold mb-2">
            1. Information We Collect
          </h2>
          <p>
            We collect personal details (name, phone number, email, city) when
            booking services, appliance details for repair requests, and payment
            information (processed securely via third-party providers).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            2. How We Use Your Information
          </h2>
          <p>
            Your information is used to process bookings, provide customer
            support, send updates about your booking, and comply with legal
            requirements.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            3. Sharing of Information
          </h2>
          <p>
            We do not sell your data to third parties. Information may be shared
            with trusted partners (technicians, payment providers) only to
            fulfill services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
          <p>
            We use industry-standard measures to protect your personal data.
            However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">5. Cookies & Tracking</h2>
          <p>
            Our website may use cookies to improve user experience. You can
            disable cookies in your browser settings if you prefer.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">6. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us:
            📧 <strong>Frost Masters@gmail.com</strong>
            📞 <strong>Chennai: +91 6282450300</strong> |{" "}
            <strong>Coimbatore: +91 6282450300</strong>
          </p>
        </section>
      </div>
    </div>
  );
}
