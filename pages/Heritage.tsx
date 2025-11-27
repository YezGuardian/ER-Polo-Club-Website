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
                title={<>The <span className="font-serif text-white italic drop-shadow-lg">Dynasty</span> of the Highveld.</>}
                subtitle="Born in 1942. From the grit of the old Brakpan Club to the manicured fields of Bapsfontein. 81 Years of the 'Sport of Kings.'"
                backgroundImage="/Polo-match-chase.jpg"
                hideButtons={true}
            />

            {/* From Brakpan to Bapsfontein */}
            <section className="py-12 px-4 bg-background">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Historic Image */}
                        <ScrollReveal delay={0.2}>
                            <div className="relative rounded-3xl overflow-hidden h-[500px] bg-white grayscale hover:grayscale-0 transition-all duration-500 p-12">
                                <img
                                    src="/erpc-old-logo.jpg"
                                    alt="Historic Polo Match"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </ScrollReveal>

                        {/* Right: Content */}
                        <ScrollReveal>
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">From Brakpan to Bapsfontein.</h2>
                                <div className="space-y-6 text-lg text-muted leading-relaxed">
                                    <p>
                                        <span className="text-foreground font-semibold">Founded in 1942</span> from the ashes of the dissolved Brakpan Club, East Rand Polo was born with ambition. Our first home at <span className="text-foreground font-semibold">Tonk Meter Way in Springs</span> became a crucible for legends.
                                    </p>
                                    <p>
                                        It was here, during the <span className="text-foreground font-semibold">'Halcyon Days'</span> of Transvaal polo, that the club cemented its reputation. Over the decades, we have migrated to our current sanctuary in Bapsfontein, but the spirit remains unchanged: a commitment to the horse, the game, and the families who play it.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* The Legends - Zigzag Layout */}
            <section className="py-24 px-4 bg-secondary">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal>
                        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground">The Legends.</h2>
                    </ScrollReveal>

                    <div className="space-y-24">
                        {/* Item 1: Image Left, Text Right - Campbell & Bess Macnab */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <ScrollReveal>
                                <div className="relative rounded-3xl overflow-hidden h-[400px] grayscale hover:grayscale-0 transition-all duration-500">
                                    <img
                                        src="/founders.jpg"
                                        alt="Campbell & Bess Macnab"
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.2}>
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Campbell & Bess Macnab</h3>
                                    <p className="text-lg text-muted leading-relaxed">
                                        The driving force behind the club's formation. Campbell Macnab, who passed too soon at age 50, and his wife Bess, who maintained a 74-year relationship with the club. They are the spiritual architects of ERPC.
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Item 2: Text Left, Image Right - The Champions of '52 */}
                        <div className="grid grid- cols-1 lg:grid-cols-2 gap-16 items-center">
                            <ScrollReveal className="lg:order-2">
                                <div className="relative rounded-3xl overflow-hidden h-[400px] grayscale hover:grayscale-0 transition-all duration-500">
                                    <img
                                        src="/eastrandpoloclubz.jpg"
                                        alt="The Champions of '52"
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.2} className="lg:order-1">
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">The Champions of '52</h3>
                                    <p className="text-lg text-muted leading-relaxed">
                                        In 1952, Campbell Macnab represented the then-Transvaal province, reigning as Provincial Champions alongside the tremendous sporting all-rounder, Punch Barlow.
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Item 3: Image Left, Text Right - A Global Bloodline */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <ScrollReveal>
                                <div className="relative rounded-3xl overflow-hidden h-[400px] grayscale hover:grayscale-0 transition-all duration-500">
                                    <img
                                        src="/campbell-macnab-junior.jpg"
                                        alt="A Global Bloodline"
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.2}>
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">A Global Bloodline</h3>
                                    <p className="text-lg text-muted leading-relaxed">
                                        The Macnab legacy lives on through their grandchildren and great-grandchildren—Campbell Macnab, Ian Stewart, and Stephen Stewart. From Bapsfontein to the fields of Deauville, France, the lineage continues to compete at the highest levels.
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Highlights */}
            <section className="py-24 px-4 bg-background relative overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 z-0 opacity-[0.05] grayscale pointer-events-none"
                    style={{
                        backgroundImage: 'url("/Polo-match-chase.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />

                <div className="max-w-5xl mx-auto relative z-10">
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
                                <div className="flex gap-8 items-start group relative">
                                    <div className="flex-shrink-0 w-32 relative z-10">
                                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2F3E32] dark:bg-[#3B5341] text-white font-semibold text-sm">
                                            <Calendar size={16} />
                                            {item.year}
                                        </div>
                                    </div>
                                    <div className="flex-grow pl-8 pb-8">
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
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 rounded-3xl bg-secondary">
                            {/* Left: Tournament Info */}
                            <div className="text-left">
                                <p className="text-xl text-muted mb-6">Our Heritage is our strength.</p>
                                <Link
                                    to="/fixtures"
                                    className="inline-block px-10 py-4 bg-[#2F3E32] text-white dark:bg-[#3B5341] dark:text-white rounded-full text-lg font-bold hover:opacity-90 transition-opacity"
                                >
                                    View all tournaments
                                </Link>
                            </div>

                            {/* Right: Article Link with Citizen Logo */}
                            <a
                                href="https://www.citizen.co.za/ridge-times/sports-news/2022/03/30/club-hosts-polo-tournament-at-bapsfontein/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center lg:items-end gap-4 grayscale hover:grayscale-0 transition-all duration-500 group"
                            >
                                <img
                                    src="/citizen-logo.png"
                                    alt="The Citizen"
                                    className="max-w-[300px] w-full h-auto"
                                />
                                <p className="text-foreground font-semibold text-lg">Read the Campbell Tournament article</p>
                            </a>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
};
