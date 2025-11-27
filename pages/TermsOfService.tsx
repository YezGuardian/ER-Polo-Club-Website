import React from 'react';

export const TermsOfService: React.FC = () => {
    return (
        <div className="pt-32 pb-24 px-6 min-h-screen bg-background">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Terms of Service</h1>
                <p className="text-muted mb-12">Last updated: November 27, 2025</p>

                <div className="space-y-12 text-foreground/80 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using the East Rand Polo Club website and facilities, you agree to be bound by these Terms of Service and all applicable laws and regulations of the Republic of South Africa. If you do not agree with any of these terms, you are prohibited from using or accessing this site or our facilities.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">2. Use License</h2>
                        <p className="mb-4">
                            Permission is granted to temporarily download one copy of the materials (information or software) on East Rand Polo Club's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>modify or copy the materials;</li>
                            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                            <li>attempt to decompile or reverse engineer any software contained on East Rand Polo Club's website;</li>
                            <li>remove any copyright or other proprietary notations from the materials; or</li>
                            <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">3. Disclaimer</h2>
                        <p>
                            The materials on East Rand Polo Club's website are provided on an 'as is' basis. East Rand Polo Club makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitations & Indemnity</h2>
                        <p className="mb-4">
                            <strong>Warning: Polo and horse riding are dangerous activities.</strong>
                        </p>
                        <p className="mb-4">
                            In no event shall East Rand Polo Club, its directors, employees, or agents be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on East Rand Polo Club's website.
                        </p>
                        <p>
                            By entering the East Rand Polo Club premises or participating in any activities, you explicitly acknowledge the inherent risks associated with equestrian sports. You hereby indemnify and hold harmless East Rand Polo Club against any claim for injury, death, or loss of property howsoever arising, including through negligence. Right of admission is reserved.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">5. Governing Law</h2>
                        <p>
                            These terms and conditions are governed by and construed in accordance with the laws of the Republic of South Africa and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
                        <p>
                            If you have any questions about these Terms, please contact us at info@eastrandpoloclub.co.za.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};
