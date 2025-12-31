import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Crown, Play, Heart } from "lucide-react";

const VideoCard = ({ video }) => {
    const [hoveredId, setHoveredId] = useState(null);
    const [liked, setLiked] = useState(false);
    const navigate = useNavigate();

    const isHovered = hoveredId === video.id;

    const handleWatchClick = () => {
        navigate(`/videos/${video.id}`);
    };

    const toggleLike = (e) => {
        e.stopPropagation(); // evita che il click propaghi e apra il video
        setLiked(!liked);
    };

    return (
        <div
            className="relative overflow-hidden rounded-xl bg-zinc-900 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20"
            onMouseEnter={() => setHoveredId(video.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{ aspectRatio: "2/3" }}
        >
            {/* Image */}
            <img
                src={video.thumbnail}
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
                style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent" />

            {/* Hover overlay */}
            <div
                className="absolute inset-0 bg-black/40 transition-opacity duration-300"
                style={{ opacity: isHovered ? 1 : 0 }}
            />

            {/* VIP Badge */}
            {video.isExclusive && (
                <div className="absolute top-2 left-2 flex items-center gap-1 px-2 py-1 bg-linear-to-r from-pink-500 to-purple-600 rounded-md text-xs font-bold">
                    <Crown className="w-3 h-3" />
                    VIP
                </div>
            )}

            {/* Duration */}
            <div className="absolute top-2 right-2 px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-xs font-semibold">
                {video.duration}
            </div>

            {/* Play Button */}
            <div
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
                style={{ opacity: isHovered ? 1 : 0 }}
            >
                <div
                    onClick={handleWatchClick}
                    className="w-14 h-14 flex items-center justify-center bg-linear-to-r from-pink-500 to-purple-600 rounded-full shadow-lg cursor-pointer"
                >
                    <Play className="w-6 h-6 ml-1" fill="white" />
                </div>
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="text-sm font-bold mb-1 line-clamp-2">{video.title}</h3>
                <div className="flex items-center justify-between text-xs text-gray-300 mb-2">
                    <span>{video.creator}</span>
                    <span className="flex items-center gap-1">
                        <Heart className="w-3 h-3" />
                        {video.views}
                    </span>
                </div>

                {/* Buttons - only on hover */}
                <div
                    className="flex gap-2 transition-all duration-300"
                    style={{
                        opacity: isHovered ? 1 : 0,
                        transform: isHovered ? "translateY(0)" : "translateY(8px)",
                    }}
                >
                    <button
                        onClick={handleWatchClick}
                        className="flex-1 px-3 py-1.5 bg-linear-to-r from-pink-500 to-purple-600 rounded text-xs font-bold"
                    >
                        Watch
                    </button>
                    <button
                        onClick={toggleLike}
                        className={`px-2.5 py-1.5 rounded ${liked
                                ? "bg-pink-500/80 text-white"
                                : "bg-white/10 text-gray-200 backdrop-blur-sm"
                            }`}
                    >
                        <Heart className="w-3.5 h-3.5" fill={liked ? "white" : "none"} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
