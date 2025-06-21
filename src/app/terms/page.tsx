// src/app/terms/page.tsx
import React from "react";

const Terms = () => {
  return (
    <div>
      <h1>Terms and Conditions</h1>
      
      <section>
        <h2>Use of Services</h2>
        <p>
          You may access and use the services provided by [Your Website Name] solely for lawful purposes and in accordance with these Terms. You are granted a limited, non-exclusive, non-transferable license to use our platform and tools.
        </p>
        <p>You agree not to:</p>
        <ul>
          <li>Use our services in a way that violates any laws or regulations.</li>
          <li>Upload or distribute files containing viruses, malware, or any other harmful software.</li>
          <li>Use automated scripts, bots, or other means to overload or interfere with our systems.</li>
        </ul>
      </section>

      <section>
        <h2>User Responsibilities</h2>
        <p>
          When using our services, you agree to:
        </p>
        <ul>
          <li>Ensure all files uploaded belong to you or that you have permission to use them.</li>
          <li>Not upload any sensitive personal data unless necessary and done with informed consent.</li>
          <li>Not use our tools to manipulate copyrighted documents unless you own the rights.</li>
        </ul>
        <p>You are solely responsible for the contents of your uploaded documents and their subsequent use.</p>
      </section>

      <section>
        <h2>File Uploads and Data Privacy</h2>
        <p>We understand that privacy and data security are critical when working with files. Here's how we handle your files:</p>
        <ul>
          <li><strong>Temporary Storage:</strong> Uploaded files are stored on our secure servers temporarily and automatically deleted within [e.g., 1–2 hours] unless saved by registered users.</li>
          <li><strong>No Manual Access:</strong> Our team does not view or access your files unless you provide explicit permission for support purposes.</li>
        </ul>
      </section>
    </div>
  );
};

export default Terms;
