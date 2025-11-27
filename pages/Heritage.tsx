import React from 'react';
import { Hero } from '../components/Hero';
import { BentoCard } from '../components/BentoGrid';
import { ScrollReveal } from '../components/ScrollReveal';
import { Trophy, Users, Calendar, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Heritage: React.FC = () => {
    return (
        <>
            {/* Hero Section */}
            <Hero
                title="The Dynasty of the Highveld."
                subtitle="Born in 1942. From the grit of the old Brakpan Club to the manicured fields of Bapsfontein. 81 Years of the 'Sport of Kings.'"
                backgroundImage="https://static.wixstatic.com/media/da684c_1f8cbb774b324d089adf1731299897bf~mv2.jpg"
            />

            {/* The Formation - Split Screen Narrative */}
            <section className="py-24 px-4 bg-background">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Text */}
                        <ScrollReveal>
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">From Brakpan to Bapsfontein.</h2>
                                <div className="space-y-6 text-lg text-muted leading-relaxed">
                                    <p>
                                        The East Rand Polo Club was forged in 1942, rising from the dissolve of the old Brakpan Club. Driven by the passion of our founding members, the club initially found its home on the grounds of Tonk Meter Way in Springs.
                                    </p>
                                    <p>
                                        It was here, during the <span className="text-foreground font-semibold">'Halcyon Days'</span> of Transvaal polo, that the club cemented its reputation. Over the decades, we have migrated to our current sanctuary in Bapsfontein, but the spirit remains unchanged: a commitment to the horse, the game, and the families who play it.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Right: Historic Image */}
                        <ScrollReveal delay={0.2}>
                            <div className="relative rounded-3xl overflow-hidden h-[500px]">
                                <img
                                    src="https://static.wixstatic.com/media/da684c_99d5e0d1b7a9478db03fa89bdb8c1cd6~mv2.jpg"
                                    alt="Historic Polo Match"
                                    className="absolute inset-0 w-full h-full object-cover sepia"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* The Legends - Bento Grid */}
            <section className="py-24 px-4 bg-secondary">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal>
                        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">The Legends.</h2>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ScrollReveal delay={0.1}>
                            <BentoCard
                                title="Campbell & Bess Macnab"
                                description="The driving force behind the club's formation. Campbell Macnab, who passed too soon at age 50, and his wife Bess, who maintained a 74-year relationship with the club. They are the spiritual architects of ERPC."
                                icon={Trophy}
                                className="min-h-[320px]"
                            />
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <BentoCard
                                title="The Champions of '52"
                                description="In 1952, Campbell Macnab represented the then-Transvaal province, reigning as Provincial Champions alongside the tremendous sporting all-rounder, Punch Barlow."
                                icon={Users}
                                className="min-h-[320px]"
                            />
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <BentoCard
                                title="A Global Bloodline"
                                description="The Macnab legacy lives on through their grandchildren and great-grandchildren—Campbell Macnab, Ian Stewart, and Stephen Stewart. From Bapsfontein to the fields of Deauville, France, the lineage continues to compete at the highest levels."
                                icon={Globe}
                                className="min-h-[320px]"
                            />
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Timeline Highlights */}
            <section className="py-24 px-4 bg-background">
                <div className="max-w-5xl mx-auto">
                    <ScrollReveal>
                        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground">Timeline.</h2>
                    </ScrollReveal>

                    <div className="space-y-8">
                        {[
                            { year: "1942", event: "The Formation", description: "ERPC is established out of the old Brakpan Club." },
                            { year: "1952", event: "The Halcyon Days", description: "Campbell Macnab and Punch Barlow lead Transvaal to Provincial Victory." },
                            { year: "1964", event: "The Memorial", description: "The club mourns the passing of Campbell Macnab. The Campbell and Bes Macnab Memorial Tournament is established to honor their impact." },
                            { year: "2025", event: "The Future", description: "Now in its 81st year, hosting the Highveld Champs and SA Champs, continuing the tradition of excellence." }
                        ].map((item, index) => (
                            <ScrollReveal key={index} delay={index * 0.1}>
                                <div className="flex gap-8 items-start group">
                                    <div className="flex-shrink-0 w-32">
                                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2F3E32] dark:bg-[#3B5341] text-white font-semibold text-sm">
                                            <Calendar size={16} />
                                            {item.year}
                                        </div>
                                    </div>
                                    <div className="flex-grow border-l-2 border-border pl-8 pb-8 group-last:border-l-0 group-last:pb-0">
                                        <h3 className="text-2xl font-bold text-foreground mb-2">{item.event}</h3>
                                        <p className="text-muted">{item.description}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-24 px-4 bg-secondary">
                <div className="max-w-4xl mx-auto">
                    <ScrollReveal>
                        <div className="text-center">
                            <p className="text-3xl md:text-4xl font-serif italic text-foreground mb-8 leading-relaxed">
                                "We are celebrating the 81st year of our existence... East Rand Polo Club is very proud to have been associated with the Macnab family and to enjoy their continued support."
                            </p>
                            <p className="text-muted font-medium uppercase tracking-wider">— Murray Spark, Club Captain</p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-24 px-4 bg-background">
                <div className="max-w-4xl mx-auto text-center">
                    <ScrollReveal>
                        <p className="text-xl text-muted mb-8">Home of the Campbell and Bes Macnab Memorial Tournament.</p>
                        <Link
                            to="/fixtures"
                            className="inline-block px-10 py-4 bg-[#2F3E32] text-white dark:bg-[#3B5341] dark:text-white rounded-full text-lg font-bold hover:opacity-90 transition-opacity"
                        >
                            View Tournament History
                        </Link>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
};
