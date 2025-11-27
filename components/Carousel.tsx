import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CarouselProps {
    images: string[];
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImageIndex, setModalImageIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    // Modal Navigation
    const nextModalSlide = (e: React.MouseEvent) => {
        e.stopPropagation();
        setModalImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevModalSlide = (e: React.MouseEvent) => {
        e.stopPropagation();
        setModalImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (isModalOpen) {
                if (e.key === 'ArrowRight') setModalImageIndex((prev) => (prev + 1) % images.length);
                if (e.key === 'ArrowLeft') setModalImageIndex((prev) => (prev - 1 + images.length) % images.length);
                if (e.key === 'Escape') setIsModalOpen(false);
            } else {
                if (e.key === 'ArrowRight') nextSlide();
                if (e.key === 'ArrowLeft') prevSlide();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isModalOpen, images.length, nextSlide, prevSlide]);

    // Get visible indices for 5-item layout
    const getVisibleIndices = () => {
        const indices = [];
        for (let i = -2; i <= 2; i++) {
            indices.push((currentIndex + i + images.length) % images.length);
        }
        return indices;
    };

    const visibleIndices = getVisibleIndices();

    const openModal = (index: number) => {
        setModalImageIndex(index);
        setIsModalOpen(true);
    };

    return (
        <div className="relative w-full max-w-[90rem] mx-auto py-12 px-4">
            {/* Carousel Container */}
            <div className="relative flex items-center justify-center h-[400px] md:h-[500px]">
                {/* Left Navigation Button */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 z-30 p-3 rounded-full bg-white/80 text-black hover:bg-white transition-all shadow-lg"
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={24} />
                </button>

                {/* Images Track */}
                <div className="flex items-center justify-center gap-4 w-full h-full overflow-hidden">
                    <AnimatePresence initial={false} mode="popLayout">
                        {visibleIndices.map((imageIndex, i) => {
                            const isCenter = i === 2;
                            const position = i - 2; // -2, -1, 0, 1, 2

                            return (
                                <motion.div
                                    key={imageIndex}
                                    initial={{ opacity: 0, x: position > 0 ? 100 : -100 }}
                                    animate={{
                                        opacity: isCenter ? 1 : 0.7,
                                        x: 0
                                    }}
                                    exit={{ opacity: 0, x: position > 0 ? -100 : 100 }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeOut",
                                        opacity: { duration: 0.3 }
                                    }}
                                    className={`relative rounded-3xl overflow-hidden shadow-xl cursor-pointer flex-shrink-0 ${isCenter
                                            ? 'w-[280px] h-[380px] md:w-[360px] md:h-[480px] border-4 border-white/20'
                                            : 'w-[200px] h-[300px] md:w-[260px] md:h-[360px] opacity-70 hidden md:block'
                                        }`}
                                    onClick={() => openModal(imageIndex)}
                                >
                                    <img
                                        src={images[imageIndex]}
                                        alt={`Gallery image ${imageIndex + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                    {isCenter && (
                                        <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-200 flex items-center justify-center group">
                                            <span className="opacity-0 group-hover:opacity-100 text-white font-medium px-6 py-2 bg-black/40 rounded-full backdrop-blur-md transition-opacity duration-200">
                                                View
                                            </span>
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Right Navigation Button */}
                <button
                    onClick={nextSlide}
                    className="absolute right-4 z-30 p-3 rounded-full bg-white/80 text-black hover:bg-white transition-all shadow-lg"
                    aria-label="Next slide"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
                            onClick={() => setIsModalOpen(false)}
                        >
                            <X size={40} />
                        </button>

                        <button
                            onClick={prevModalSlide}
                            className="absolute left-4 md:left-10 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm"
                        >
                            <ChevronLeft size={32} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="relative max-w-5xl max-h-[90vh] rounded-xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={images[modalImageIndex]}
                                alt="Full screen view"
                                className="max-w-full max-h-[85vh] object-contain"
                            />
                        </motion.div>

                        <button
                            onClick={nextModalSlide}
                            className="absolute right-4 md:right-10 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm"
                        >
                            <ChevronRight size={32} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
