"use client";

import React, { useState, useRef, useEffect } from 'react';

interface AudioVideoEmbedProps {
  src: string;
  webmSrc?: string;
  poster?: string;
  title?: string;
  className?: string;
  loop?: boolean;
  width?: number;
  height?: number;
}

const AudioVideoEmbed: React.FC<AudioVideoEmbedProps> = ({
  src,
  webmSrc,
  poster,
  title = 'Video',
  className = '',
  loop = true,
  width,
  height,
}) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for autoplay
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().catch(() => {
            setIsPlaying(false);
          });
          setIsPlaying(true);
        } else if (videoRef.current) {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
    }
  };

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  };

  const handleContainerClick = () => {
    // On mobile, first click shows controls, second click toggles mute
    if (!showControls) {
      setShowControls(true);
      // Auto-hide controls after 3 seconds
      setTimeout(() => setShowControls(false), 3000);
    } else {
      // Clicking elsewhere on video hides controls
      setShowControls(false);
    }
  };

  return (
    <div 
      ref={containerRef} 
      className={`relative w-full ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleContainerClick}
    >
      <video
        ref={videoRef}
        src={webmSrc ?? src}
        title={title}
        className="w-full h-auto rounded-lg"
        muted={true}
        loop={loop}
        preload="metadata"
        playsInline
        poster={poster}
        width={width}
        height={height}
      />
      
      {/* Audio Control Overlay - Only show on hover */}
      {isPlaying && (isHovered || showControls) && (
        <div className="absolute top-4 right-4 z-10">
          {isMuted ? (
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering container click
                handleUnmute();
                setShowControls(false);
              }}
              className="bg-black bg-opacity-50 text-white px-3 py-2 rounded-lg flex items-center space-x-2 hover:bg-opacity-70 transition-all"
            >
              {/* Muted Speaker Icon */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.5 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.5l3.883-3.707a1 1 0 011.414.07zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span>Unmute</span>
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering container click
                handleMute();
                setShowControls(false);
              }}
              className="bg-black bg-opacity-50 text-white px-3 py-2 rounded-lg flex items-center space-x-2 hover:bg-opacity-70 transition-all"
            >
              {/* Active Speaker Icon */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.5 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.5l3.883-3.707a1 1 0 011.414.07zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
              </svg>
              <span>Mute</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default AudioVideoEmbed;
