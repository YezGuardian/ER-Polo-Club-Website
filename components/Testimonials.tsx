import React from 'react';
import { Star, Quote } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Testimonials: React.FC = () => {
    const testimonials = [
        {
            name: "Shlobo Bukhosi Moyo",
            role: "",
            avatar: "/east-rand-review-1.png",
            rating: 5,
            text: "I had a good time here. Superb place and calm beautiful people 👍. Had an art showcase with Restless Polo 🔥🔥🔥. Greatest time ever. Thankyou",
            featured: false
        },
        {
            name: "Zanele Mkhize",
            role: "",
            avatar: "/east-rand-review-2.png",
            rating: 5,
            text: "A beautiful place to be on a Sunday afternoon. The polo match was exciting and the atmosphere was electric. Highly recommended for a family outing.",
            featured: true
        },
        {
            name: "Gareth Evans",
            role: "",
            avatar: "/east-rand-review-3.png",
            rating: 5,
            text: "World class facilities and coaching. The team at East Rand Polo Club are passionate and dedicated to the sport. A true gem in Gauteng.",
            featured: false
        }
    ];

    return (
        <section className="py-24 px-4 bg-secondary transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <ScrollReveal>
                    <div className="mb-16 text-center">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                            <span className="ml-2 font-bold text-foreground flex items-center gap-2">
                                4.6/5 Average Rating
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Community Voices.</h2>
                        <p className="text-muted text-lg max-w-2xl mx-auto">
                            Don't just take our word for it. Hear from the riders, spectators, and families who call East Rand Polo Club home.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <ScrollReveal key={index} delay={index * 0.1} className="h-full">
                            <div className={`h-full p-8 rounded-3xl border transition-all duration-300 flex flex-col ${testimonial.featured
                                ? 'bg-foreground text-background border-foreground shadow-xl scale-105 md:-translate-y-4'
                                : 'bg-card border-cardBorder hover:border-foreground/20 text-card-foreground'
                                }`}>
                                <div className="mb-6">
                                    <Quote className={`w-8 h-8 ${testimonial.featured ? 'text-background/20' : 'text-foreground/10'}`} />
                                </div>

                                <p className={`text-lg mb-8 leading-relaxed flex-grow ${testimonial.featured ? 'text-background/90' : 'text-muted'}`}>
                                    "{testimonial.text}"
                                </p>

                                <div className="flex items-center gap-4 mt-auto">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className={`w-12 h-12 rounded-full object-cover border-2 ${testimonial.featured ? 'border-background/20' : 'border-foreground/10'}`}
                                    />
                                    <div>
                                        <h4 className={`font-bold ${testimonial.featured ? 'text-background' : 'text-foreground'}`}>
                                            {testimonial.name}
                                        </h4>
                                        <div className="flex gap-0.5">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} size={12} className={`${testimonial.featured ? 'text-background fill-background' : 'text-yellow-500 fill-yellow-500'}`} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal delay={0.4}>
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-foreground/10 mt-16">
                        <p className="text-muted text-center sm:text-left">
                            Join hundreds of riders who have found their passion at East Rand Polo Club.
                        </p>
                        <a
                            href="https://share.google/z6UiAIJleNxrd5CPw"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-foreground text-background rounded-full font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
                        >
                            Read more reviews
                        </a>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};
