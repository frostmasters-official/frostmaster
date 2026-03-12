"use client"
import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
      <p className="text-gray-600 mb-4">Last Updated: August 2025</p>

      <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Services</h2>
          <p>
            We provide repair and maintenance services for home appliances such as washing machines, refrigerators, air conditioners, dishwashers, and microwave oven. 
            Service availability may vary based on location.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. Booking & Payments</h2>
          <p>
            All service bookings must be made through our website or customer support. Service charges will be communicated before work begins. 
            Payments can be made online or offline after service completion.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. Warranties & Liability</h2>
          <p>
            We strive to deliver quality repair services. Any warranty on parts or service will be clearly mentioned at the time of repair. 
            We are not responsible for damages caused by misuse, pre-existing issues, or third-party repairs.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. Cancellation & Refunds</h2>
          <p>
            Appointments can be canceled or rescheduled at least <strong>24 hours in advance</strong>. 
            Refunds (if applicable) will be processed within <strong>7 business days</strong>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">5. User Responsibilities</h2>
          <p>
            Customers must provide accurate information while booking services and ensure safe access to the appliance at the scheduled time.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">6. Changes to Terms</h2>
          <p>
            We reserve the right to update these Terms & Conditions at any time. Continued use of our services constitutes acceptance of the updated terms.
          </p>
        </section>
      </div>
    </div>
  );
}
