import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
    const testimonials = [
        {
            name: "Shlobo Bukhosi Moyo",
            role: "6 reviews",
            avatar: "/east-rand-review-1.png",
            rating: 5,
            text: "I had a good time here. Superb place and calm beautiful people 👍. Had an art showcase with Restless Polo 🔥🔥🔥. Greatest time ever. Thankyou",
            featured: false
        },
        {
            name: "Andres F. Perez",
            role: "Local Guide · 116 reviews",
            avatar: "/east-rand-review-2.png",
            rating: 5,
            text: "This area is the mecca of polo in Gauteng, the fields are always up to standards. really a great place to play here, there is a polo School just across the road at rocking Four polo club, with springbok players such as the Evans brothers will take your level of polo higher.",
            featured: true
        },
        {
            name: "Ryan Nuss",
            role: "Local Guide · 112 reviews",
            avatar: "/east-rand-review-3.png",
            rating: 5,
            text: "A really stunning venue. Large open fields that get stunning sunsets.",
            featured: false
        }
    ];

    return (
        <section className="py-24 px-4 bg-background transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                            What our visitors say
                        </h2>
                        <p className="text-lg text-muted max-w-2xl">
                            Real experiences from riders, families, and event hosts who have made East Rand Polo Club their home.
                        </p>
                    </div>

                    {/* Average Rating with Google Logo */}
                    <div className="bg-secondary border border-border rounded-2xl px-6 py-4 flex items-center gap-3">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        <div>
                            <div className="text-3xl font-bold text-foreground">4.6</div>
                            <div className="text-xs text-muted">Google rating</div>
                        </div>
                    </div>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`relative rounded-3xl p-8 transition-all duration-300 ${testimonial.featured
                                    ? 'bg-foreground text-background md:scale-105 md:-my-6 shadow-2xl'
                                    : 'bg-card border border-cardBorder hover:border-foreground/20'
                                }`}
                        >
                            {/* Avatar */}
                            <div className="flex items-start gap-4 mb-6">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-current"
                                />
                                <div className="flex-1">
                                    {/* Star Rating */}
                                    <div className="flex gap-1 mb-2">
                                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-4 h-4 ${testimonial.featured
                                                        ? 'fill-amber-300 text-amber-300'
                                                        : 'fill-amber-400 text-amber-400'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial Text */}
                            <p
                                className={`text-base leading-relaxed mb-6 ${testimonial.featured ? 'text-background/90' : 'text-card-foreground'
                                    }`}
                            >
                                "{testimonial.text}"
                            </p>

                            {/* Author Info */}
                            <div className={testimonial.featured ? 'text-background' : 'text-foreground'}>
                                <div className="font-semibold">{testimonial.name}</div>
                                <div
                                    className={`text-sm ${testimonial.featured ? 'text-background/70' : 'text-muted'
                                        }`}
                                >
                                    {testimonial.role}
                                </div>
                            </div>

                            {/* Decorative Element for Featured Card */}
                            {testimonial.featured && (
                                <div className="absolute top-0 right-0 w-32 h-32 bg-background/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-border">
                    <p className="text-muted text-center sm:text-left">
                        Join hundreds of riders who have found their passion at East Rand Polo Club.
                    </p>
                    <a
                        href="https://share.google/SgcwoETV5aiedvP7Q"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-foreground text-background rounded-full font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
                    >
                        Read more reviews
                    </a>
                </div>
            </div>
        </section>
    );
};
