import React from 'react';

export const PrivacyPolicy: React.FC = () => {
    return (
        <div className="pt-32 pb-24 px-6 min-h-screen bg-background">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Privacy Policy</h1>
                <p className="text-muted mb-12">Last updated: November 27, 2025</p>

                <div className="space-y-12 text-foreground/80 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                        <p>
                            East Rand Polo Club ("we", "us", or "our") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website or become a member, and tell you about your privacy rights and how the Protection of Personal Information Act (POPIA) protects you.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">2. The Data We Collect</h2>
                        <p className="mb-4">
                            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Identity Data:</strong> includes first name, maiden name, last name, username or similar identifier, marital status, title, date of birth and gender.</li>
                            <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                            <li><strong>Financial Data:</strong> includes bank account and payment card details (processed securely by our third-party payment providers).</li>
                            <li><strong>Health Data:</strong> relevant medical information required for safe participation in equestrian sports.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Data</h2>
                        <p className="mb-4">
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., membership or lesson booking).</li>
                            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                            <li>Where we need to comply with a legal or regulatory obligation.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">4. POPIA Compliance</h2>
                        <p>
                            In accordance with the Protection of Personal Information Act (POPIA) of South Africa, we ensure that:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>Processing of personal information is lawful, reasonable, and relevant to our activities.</li>
                            <li>We take appropriate security measures to protect your personal information.</li>
                            <li>You have the right to request access to, correction, or deletion of your personal information held by us.</li>
                            <li>You have the right to object to the processing of your personal information.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
                        <p>
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Details</h2>
                        <p>
                            If you have any questions about this privacy policy or our privacy practices, please contact our Information Officer at info@eastrandpoloclub.co.za.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};
