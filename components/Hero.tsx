import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

// Slide Data Configuration
const slides = [
  {
    id: 1,
    videos: ["/video/kurulum.mp4", "/video/kurulum2.mp4"],
    title: "Kolay Kurulum",
    description: "Dakikalar içinde kurulabilen pratik tasarım. Herhangi bir alet veya uzmanlık gerektirmez. Sadece yerleştirin ve sabitleyin.",
    buttonText: "KURULUMU İZLE",
    buttonLink: "#kurulum"
  },
  {
    id: 2,
    videos: ["/video/product.mp4", "/video/placement.mp4"],
    title: "Sel Bariyeri",
    description: "Evinizi ve iş yerinizi sel baskınlarına karşı koruyan en etkili çözüm. Dayanıklı, güvenilir ve estetik.",
    buttonText: "ÜRÜNÜ İNCELE",
    buttonLink: "#urunumuz"
  },
  {
    id: 3,
    videos: ["/video/halka.mp4", "/video/halka2.mp4"],
    title: "Tam Sızdırmazlık",
    description: "Özel tasarım conta sistemi ve birleştirme halkaları ile su sızdırmazlığı garanti altına alınmıştır.",
    buttonText: "DETAYLI BİLGİ",
    buttonLink: "#teknik-ozellikler"
  }
];

interface VideoPlayerProps {
  videos: string[];
  onComplete: () => void;
  isActive: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videos, onComplete, isActive }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const transitionTriggered = useRef(false);

  // Reset when slide changes
  useEffect(() => {
    if (!isActive) {
      setCurrentIndex(0);
      setIsReady(false);
      transitionTriggered.current = false;
      videoRefs.current.forEach((vid) => {
        if (vid) {
          vid.pause();
          vid.currentTime = 0;
        }
      });
      return;
    }
  }, [isActive]);

  // Play current video when ready
  useEffect(() => {
    if (!isActive) return;

    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo) {
      // Wait for video to be ready
      const playVideo = () => {
        if (currentVideo.readyState >= 3) {
          setIsReady(true);
          currentVideo.play().catch(console.error);
        }
      };

      if (currentVideo.readyState >= 3) {
        playVideo();
      } else {
        currentVideo.addEventListener('canplay', playVideo, { once: true });
      }

      return () => {
        currentVideo.removeEventListener('canplay', playVideo);
      };
    }
  }, [isActive, currentIndex]);

  const handleTimeUpdate = useCallback((index: number) => {
    if (index !== currentIndex || !isActive || transitionTriggered.current) return;
    
    const video = videoRefs.current[index];
    if (!video || !video.duration) return;

    const timeLeft = video.duration - video.currentTime;
    const isLastVideo = index === videos.length - 1;
    const triggerTime = video.duration < 4 ? 0.3 : 1.2;

    if (timeLeft <= triggerTime) {
      transitionTriggered.current = true;
      
      if (isLastVideo) {
        setTimeout(() => {
          onComplete();
          transitionTriggered.current = false;
        }, triggerTime * 1000);
      } else {
        // Pre-play next video
        const nextVideo = videoRefs.current[index + 1];
        if (nextVideo && nextVideo.readyState >= 3) {
          nextVideo.currentTime = 0;
          nextVideo.play().catch(() => {});
        }
        
        setCurrentIndex((prev) => prev + 1);
        
        setTimeout(() => {
          transitionTriggered.current = false;
        }, 800);
      }
    }
  }, [currentIndex, isActive, videos.length, onComplete]);

  const handleVideoEnd = useCallback((index: number) => {
    if (index !== currentIndex || transitionTriggered.current) return;
    
    const isLastVideo = index === videos.length - 1;
    transitionTriggered.current = true;
    
    if (isLastVideo) {
      onComplete();
    } else {
      setCurrentIndex(prev => prev + 1);
    }
    
    setTimeout(() => {
      transitionTriggered.current = false;
    }, 500);
  }, [currentIndex, videos.length, onComplete]);

  return (
    <div className="absolute inset-0 w-full h-full bg-black">
      {videos.map((src, index) => (
        <motion.div
          key={`${src}-${index}`}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: index <= currentIndex ? 1 : 0,
            zIndex: index
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <video
            ref={(el) => {
              videoRefs.current[index] = el;
            }}
            src={src}
            className="w-full h-full object-cover brightness-[0.4]"
            muted
            playsInline
            preload={index <= currentIndex + 1 ? "auto" : "metadata"}
            onTimeUpdate={() => handleTimeUpdate(index)}
            onEnded={() => handleVideoEnd(index)}
            onWaiting={() => {
              // Video is buffering - could show loading indicator
              console.log(`Video ${index} buffering...`);
            }}
            onPlaying={() => {
              setIsReady(true);
            }}
          />
        </motion.div>
      ))}
      
      {/* Loading indicator when video is not ready */}
      {!isReady && isActive && (
        <div className="absolute inset-0 flex items-center justify-center z-50">
          <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  const handleSlideComplete = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const handleDotClick = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center bg-black">
      {/* Video Background Carousel */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] z-0">
        <AnimatePresence initial={false}>
          {slides.map((slide, index) => (
            index === currentSlide && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, zIndex: 1 }}
                animate={{ opacity: 1, zIndex: 2 }}
                exit={{ opacity: 0, zIndex: 1 }} 
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <VideoPlayer 
                  videos={slide.videos} 
                  onComplete={handleSlideComplete}
                  isActive={index === currentSlide}
                />
              </motion.div>
            )
          ))}
        </AnimatePresence>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent pointer-events-none z-10" />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 flex flex-col justify-center h-full pt-20">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[currentSlide].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
                {slides[currentSlide].id === 1 ? (
                   <>
                     Kolay <span className="text-orange-500">Kurulum</span>
                   </>
                ) : slides[currentSlide].id === 2 ? (
                   <>
                     <span className="text-orange-500">Sel Bariyeri</span> <br />
                     Kesin Çözüm
                   </>
                ) : (
                   <>
                     Tam <span className="text-orange-500">Sızdırmazlık</span>
                   </>
                )}
              </h1>

              <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl font-light leading-relaxed">
                {slides[currentSlide].description}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={slides[currentSlide].buttonLink}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-all shadow-lg shadow-orange-600/20 transform hover:-translate-y-1"
                >
                  {slides[currentSlide].buttonText}
                </a>
                <a
                  href="#iletisim"
                  className="bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-all hover:bg-white/10"
                >
                  BİZE ULAŞIN
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Elements */}
        <div className="absolute bottom-12 left-0 w-full px-6 md:px-12 flex items-end justify-between z-30">
          {/* Carousel Dots */}
          <div className="flex gap-3 mb-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? "bg-orange-500 ring-4 ring-orange-500/20 scale-110" 
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="hidden md:flex flex-col items-center gap-4 absolute left-1/2 -translate-x-1/2 bottom-0">
            <span className="text-white/80 text-xs uppercase tracking-[0.2em] font-medium animate-pulse">Kaydır</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-white/80 to-transparent"></div>
          </div>

          <div className="w-12"></div>
        </div>
      </div>
    </section>
  );
};

