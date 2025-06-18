
import { useState } from "react";
import { Play, Loader2 } from "lucide-react";

interface VideoPlayerProps {
  videoUrl?: string;
  title?: string;
  description?: string;
  thumbnail?: string;
}

const VideoPlayer = ({ 
  videoUrl, 
  title = "EChiroPartners Demo", 
  description = "See how our EMR system transforms chiropractic practices",
  thumbnail 
}: VideoPlayerProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayClick = () => {
    if (videoUrl) {
      setIsLoading(true);
      setShowVideo(true);
    }
  };

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl overflow-hidden shadow-2xl">
        {!showVideo ? (
          // Video Thumbnail/Placeholder
          <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
            {thumbnail ? (
              <img 
                src={thumbnail} 
                alt="Video thumbnail" 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-center text-white p-8">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-lg opacity-90">{description}</p>
              </div>
            )}
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={handlePlayClick}
                disabled={!videoUrl}
                className="group bg-white/20 backdrop-blur-sm rounded-full p-6 hover:bg-white/30 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <Loader2 className="w-12 h-12 text-white animate-spin" />
                ) : (
                  <Play className="w-12 h-12 text-white group-hover:scale-110 transition-transform" />
                )}
              </button>
            </div>

            {!videoUrl && (
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white/80 text-sm bg-black/30 backdrop-blur-sm rounded-lg px-4 py-2">
                  Demo video will be available here
                </p>
              </div>
            )}
          </div>
        ) : (
          // Actual Video
          <iframe
            src={videoUrl}
            title={title}
            className="w-full h-full"
            allowFullScreen
            onLoad={handleVideoLoad}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
