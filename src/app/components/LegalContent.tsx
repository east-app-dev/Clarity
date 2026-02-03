import React from 'react';

export const PrivacyPolicy = () => (
  <div className="prose prose-slate max-w-none dark:prose-invert">
    <h1 className="text-4xl font-black mb-8">Privacy Policy – DayBee</h1>
    <p className="text-sm opacity-50 mb-8">Last updated: 2025-12-22</p>

    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">1. Controller</h2>
      <p>Controller under the GDPR:<br />Esat Karabiyik<br />Contact: daybeeapp-privacy@web.de</p>
    </section>

    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">2. What this policy covers</h2>
      <p>This Privacy Policy explains which personal data DayBee processes, for what purposes, which service providers may receive data, and what rights you have.</p>
    </section>

    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">3. What data DayBee processes</h2>
      <h3 className="font-bold mt-4">3.1 Account data (Supabase Auth)</h3>
      <p>When you register or sign in, we may process:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Email address</li>
        <li>Internal user ID</li>
        <li>Authentication/session information</li>
      </ul>
      <p className="mt-2">Purpose: account login, account management, syncing your data across devices.</p>
      <p>Legal basis: Art. 6(1)(b) GDPR (performance of a contract).</p>

      <h3 className="font-bold mt-4">3.2 Content you enter in the app (stored server-side)</h3>
      <p>Depending on how you use DayBee, we may process:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Daily plans / tasks / goals</li>
        <li>Notes / reflections / logs (e.g., done / not done)</li>
        <li>App settings you choose</li>
      </ul>
      <p className="mt-2">Purpose: providing core features, in-app personalization, synchronization across devices.</p>
      <p>Legal basis: Art. 6(1)(b) GDPR.</p>

      <h3 className="font-bold mt-4">3.3 AI processing (OpenAI)</h3>
      <p>If you use AI features, parts of your input (e.g., notes or planning text) may be transmitted to and processed by our AI provider to generate suggestions/outputs for you.</p>
      <p>Purpose: generating personalized suggestions and analyses.</p>
      <p>Legal basis: Art. 6(1)(b) GDPR.</p>
      <p className="italic mt-2">Please avoid entering sensitive personal data (e.g., health data) into free-text fields if you do not want it to be processed by the AI provider for generation.</p>

      <h3 className="font-bold mt-4">3.4 Technical data / logs</h3>
      <p>To operate the service, technical data may be processed, such as:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Timestamps of requests, error codes</li>
        <li>Device/app version (if transmitted by the app)</li>
        <li>Server logs for debugging and security</li>
      </ul>
      <p className="mt-2">Purpose: security, stability, troubleshooting.</p>
      <p>Legal basis: Art. 6(1)(f) GDPR (legitimate interests).</p>
    </section>

    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">4. Recipients / service providers</h2>
      <p>We use the following service providers (processors):</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Supabase: authentication, database/backend hosting</li>
        <li>OpenAI: AI processing to generate suggestions</li>
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">5. International transfers</h2>
      <p>Depending on provider locations, data may be processed outside the EU/EEA. Where required, we use appropriate safeguards (e.g., standard contractual clauses).</p>
    </section>

    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">6. Retention</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Account and app data: until you delete your account or we no longer need it to provide the service</li>
        <li>Logs/diagnostics: typically up to 30 days as needed for troubleshooting and security</li>
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">7. Your rights</h2>
      <p>You have rights including access, rectification, deletion, restriction, data portability, objection, and withdrawal of consent (where applicable).</p>
      <p className="mt-2">Contact: daybeeapp-privacy@web.de</p>
      <p>You also have the right to lodge a complaint with a data protection authority.</p>
    </section>

    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">8. Account deletion</h2>
      <p>You can delete your account in the app via: Settings → Account → Delete account</p>
      <p>Alternatively, email us at daybeeapp-privacy@web.de (include your account email).</p>
    </section>

    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">9. Security</h2>
      <p>We use appropriate measures to protect data (e.g., encrypted transport, access controls).</p>
    </section>

    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">10. Changes to this policy</h2>
      <p>We may update this Privacy Policy. The latest version will always be available on this website.</p>
    </section>
  </div>
);

export const TermsOfService = () => (
  <div className="prose prose-slate max-w-none dark:prose-invert">
    <h1 className="text-4xl font-black mb-8">Terms of Service – DayBee</h1>
    <p className="text-sm opacity-50 mb-8">Last updated: 2025-12-22</p>

    <div className="p-6 bg-[#3D3333]/5 rounded-2xl mb-8 border border-[#3D3333]/10">
      <p className="font-bold mb-2">Plain-English summary:</p>
      <p className="text-sm">DayBee helps you plan your day and triggers focus overlays. Use it responsibly. Don’t abuse the service. You control your content. We don’t guarantee outcomes.</p>
    </div>

    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">1. Who we are</h2>
      <p>DayBee is operated by:<br />Esat Karabiyik<br />Contact: daybeeapp-privacy@web.de</p>
    </section>

    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">2. Acceptance of these Terms</h2>
      <p>By downloading, accessing, or using DayBee (the “App”), you agree to these Terms of Service (“Terms”). If you do not agree, do not use the App.</p>
    </section>

    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">3. What DayBee provides</h2>
      <p>DayBee provides planning features and AI-assisted suggestions/overlays designed to support focus and daily structure. The App is not medical, psychological, or professional advice.</p>
    </section>

    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">4. Accounts</h2>
      <p>You may need to create an account to use certain features. You are responsible for keeping your login details secure and for all activity under your account.</p>
    </section>

    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">5. Your content</h2>
      <p>You may enter notes, tasks, schedules, and other content (“User Content”). You keep ownership of your User Content. You grant us a limited license to process and store it solely to operate the App (e.g., syncing, generating plans, AI suggestions).</p>
    </section>

    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">6. AI features</h2>
      <p>If you use AI features, parts of your User Content may be processed by third-party AI providers to generate outputs. Do not submit sensitive information if you do not want it processed for AI generation.</p>
    </section>

    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">7. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Use the App in a way that violates laws or regulations.</li>
        <li>Attempt to reverse engineer, exploit, disrupt, or overload the service.</li>
        <li>Upload malicious code or attempt unauthorized access to systems or data.</li>
        <li>Use the App to harass, threaten, or harm others.</li>
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">8. Subscriptions & payments</h2>
      <p>If the App offers paid features, purchases may be handled via the App Store. Prices, billing periods, and renewal rules are shown in the purchase flow. Taxes may apply depending on your region.</p>
      <p className="mt-2">Subscriptions typically renew automatically unless canceled in your Apple ID subscription settings before the renewal date.</p>
    </section>

    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">9. Availability & changes</h2>
      <p>We may update, modify, or discontinue the App (or parts of it) at any time. We aim for stability but do not guarantee uninterrupted availability.</p>
    </section>

    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">10. Disclaimers</h2>
      <p>The App is provided “as is” and “as available”. We do not guarantee that using DayBee will produce specific results (focus, productivity, grades, etc.). Your outcomes depend on many factors outside the App.</p>
    </section>

    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">11. Limitation of liability</h2>
      <p>To the maximum extent permitted by law, we are not liable for indirect, incidental, special, consequential, or punitive damages, or for loss of data, profits, or goodwill resulting from your use of the App.</p>
    </section>

    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">12. Termination</h2>
      <p>You can stop using the App at any time. We may suspend or terminate access if you violate these Terms or if required for security/legal reasons.</p>
    </section>

    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">13. Privacy</h2>
      <p>Your use of the App is also governed by our Privacy Policy: Privacy Policy.</p>
    </section>

    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">14. Contact</h2>
      <p>Questions about these Terms? Contact: daybeeapp-privacy@web.de</p>
    </section>

    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">15. Changes to these Terms</h2>
      <p>We may update these Terms from time to time. The current version will always be available on this website.</p>
    </section>
  </div>
);
