// src/app/privacy-policy/page.tsx
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div>
      <h1>Privacy Policy</h1>

      <section>
        <p>
          At FileMint, we respect your privacy and are committed to protecting
          your personal data and uploaded documents. This Privacy Policy explains
          how we collect, use, store, and protect your information when you use
          our website and services.
        </p>
        <p>
          By using our website, you agree to the practices outlined in this
          Privacy Policy.
        </p>
      </section>

      <section>
        <h2>What Information We Collect</h2>
        <p>
          We may collect the following types of information:
        </p>
        <ul>
          <li>
            <strong>a) Uploaded Files:</strong>
            <ul>
              <li>Files you upload for editing, merging, converting, etc.</li>
              <li>
                These are temporarily stored and automatically deleted after a
                short period (see Section 4).
              </li>
            </ul>
          </li>
          <li>
            <strong>b) Personal Information (Optional):</strong>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Password (encrypted)</li>
              <li>Billing information (for Pro users)</li>
            </ul>
          </li>
          <li>
            <strong>c) Usage Data (Automatically Collected):</strong>
            <ul>
              <li>Browser type and version</li>
              <li>Device type</li>
              <li>Operating system</li>
              <li>IP address</li>
              <li>Time spent on pages</li>
              <li>Referring URLs</li>
              <li>Actions taken on the site (e.g., tools used)</li>
            </ul>
          </li>
        </ul>
        <p>
          This helps us improve performance and user experience.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
