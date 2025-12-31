import React, { useEffect, useState } from 'react';
import { Flame, Sparkles, Crown, Star, Heart, Play } from 'lucide-react';

const HomePage = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [page, setPage] = useState(1);
    const [hoveredId, setHoveredId] = useState(null);
    const [allVideos, setAllVideos] = useState([]);
    const [isAutoScroll, setIsAutoScroll] = useState(true);
    // eslint-disable-next-line no-unused-vars
    const [scrollPosition, setScrollPosition] = useState(0);
    const searchScrollRef = React.useRef(null);

    // Generate videos
    useEffect(() => {
        const newVideos = Array.from({ length: 24 }, (_, i) => ({
            id: `${page}-${i}`,
            title: 'Exclusive Premium Content',
            creator: 'Luna Rose',
            views: `${Math.floor(Math.random() * 200)}K`,
            duration: '14:32',
            thumbnail: `https://picsum.photos/400/600?random=${page}-${i}`,
            isExclusive: Math.random() > 0.6
        }));
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setAllVideos(prev => [...prev, ...newVideos]);
    }, [page]);

    const categories = [
        { id: 'all', name: 'All', icon: Flame, color: 'from-red-500 to-orange-600', glow: 'from-red-500 via-orange-500 to-red-500', shadow: 'shadow-red-500/50' },
        { id: 'trending', name: 'Trending', icon: Flame, color: 'from-green-500 to-emerald-600', glow: 'from-green-500 via-emerald-500 to-green-500', shadow: 'shadow-green-500/50' },
        { id: 'new', name: 'New', icon: Sparkles, color: 'from-cyan-500 to-blue-600', glow: 'from-cyan-500 via-blue-500 to-cyan-500', shadow: 'shadow-cyan-500/50' },
        { id: 'vip', name: 'VIP', icon: Crown, color: 'from-yellow-500 to-amber-600', glow: 'from-yellow-500 via-amber-500 to-yellow-500', shadow: 'shadow-yellow-500/50' },
        { id: 'popular', name: 'Popular', icon: Star, color: 'from-purple-500 to-fuchsia-600', glow: 'from-purple-500 via-fuchsia-500 to-purple-500', shadow: 'shadow-purple-500/50' }
    ];

    // Infinite scroll
    useEffect(() => {
        const onScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 800) {
                setPage(p => p + 1);
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Auto-scroll for quick searches
    useEffect(() => {
        if (!isAutoScroll) return;

        const interval = setInterval(() => {
            if (searchScrollRef.current) {
                const container = searchScrollRef.current;
                const maxScroll = container.scrollWidth - container.clientWidth;

                if (container.scrollLeft >= maxScroll) {
                    container.scrollLeft = 0;
                    setScrollPosition(0);
                } else {
                    container.scrollLeft += 1;
                    setScrollPosition(container.scrollLeft);
                }
            }
        }, 30);

        return () => clearInterval(interval);
    }, [isAutoScroll]);

    const handleManualScroll = (direction) => {
        setIsAutoScroll(false);
        const container = searchScrollRef.current;
        if (!container) return;

        const scrollAmount = 300;
        if (direction === 'left') {
            container.scrollLeft = Math.max(0, container.scrollLeft - scrollAmount);
        } else {
            container.scrollLeft = Math.min(container.scrollWidth - container.clientWidth, container.scrollLeft + scrollAmount);
        }
        setScrollPosition(container.scrollLeft);
    };

    const handleSearchInteraction = () => {
        setIsAutoScroll(false);
    };

    const VideoCard = ({ video }) => {
        const isHovered = hoveredId === video.id;

        return (
            <div
                className="relative overflow-hidden rounded-xl bg-zinc-900 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20"
                onMouseEnter={() => setHoveredId(video.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{ aspectRatio: '2/3' }}
            >
                {/* Image */}
                <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
                />

                {/* Gradient Overlay - always visible at bottom */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent" />

                {/* Enhanced overlay on hover */}
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
                    <div className="w-14 h-14 flex items-center justify-center bg-linear-to-r from-pink-500 to-purple-600 rounded-full shadow-lg">
                        <Play className="w-6 h-6 ml-1" fill="white" />
                    </div>
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-sm font-bold mb-1 line-clamp-2">
                        {video.title}
                    </h3>
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
                            transform: isHovered ? 'translateY(0)' : 'translateY(8px)'
                        }}
                    >
                        <button className="flex-1 px-3 py-1.5 bg-linear-to-r from-pink-500 to-purple-600 rounded text-xs font-bold">
                            Watch
                        </button>
                        <button className="px-2.5 py-1.5 bg-white/10 backdrop-blur-sm rounded">
                            <Heart className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-white">
            {/* Animated Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-50">
                <div className="absolute top-20 left-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            {/* Category Bar */}
            <div className="sticky pt-20 top-0 z-30 bg-zinc-950/95 backdrop-blur-2xl border-b border-zinc-800/50 shadow-xl shadow-black/20">
                <div className="relative px-4 py-4 overflow-x-auto">
                    {/* Glassmorphic container */}
                    <div className="flex gap-3 w-max mx-auto">
                        {categories.map((cat) => {
                            const Icon = cat.icon;
                            const isActive = selectedCategory === cat.id;

                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className="relative group"
                                >
                                    {/* Animated glow effect */}
                                    {isActive && (
                                        <div className={`absolute -inset-1 bg-linear-to-r ${cat.glow} rounded-2xl blur-lg opacity-75 animate-pulse`} />
                                    )}

                                    {/* Button */}
                                    <div className={`relative flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold whitespace-nowrap transition-all duration-300 ${isActive
                                        ? `bg-linear-to-r ${cat.color} text-white scale-105 ${cat.shadow} shadow-lg`
                                        : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white hover:scale-105'
                                        }`}>
                                        <Icon className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'rotate-12' : 'group-hover:rotate-12'}`} />
                                        <span>{cat.name}</span>

                                        {/* Active indicator */}
                                        {isActive && (
                                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-white rounded-full" />
                                        )}
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Gradient fades for scroll indication */}
                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-linear-to-r from-zinc-950 to-transparent pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-12 bg-linear-to-l from-zinc-950 to-transparent pointer-events-none" />
                </div>
            </div>

            {/* Quick Searches */}
            <div className="relative z-10 px-4 pt-6 pb-4">
                <div className="relative group">
                    {/* Left Arrow */}
                    <button
                        onClick={() => handleManualScroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-linear-to-r from-zinc-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                        <div className="w-8 h-8 flex items-center justify-center bg-zinc-800 hover:bg-pink-500/20 border border-zinc-700 hover:border-pink-500 rounded-full transition-all duration-300">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </div>
                    </button>

                    {/* Scrollable Container */}
                    <div
                        ref={searchScrollRef}
                        className="flex gap-2 overflow-x-hidden scroll-smooth"
                        onMouseEnter={handleSearchInteraction}
                        onTouchStart={handleSearchInteraction}
                    >
                        {['Luna Rose', 'Exclusive', 'New Today', 'Top Rated', 'Most Viewed', 'Behind Scenes', 'Premium', 'Trending Now', 'VIP Content', 'Latest Releases', 'Fan Favorites', 'Editor\'s Pick'].map((search) => (
                            <button
                                key={search}
                                onClick={handleSearchInteraction}
                                className="shrink-0 px-4 py-2 bg-linear-to-r from-zinc-800 to-zinc-900 hover:from-pink-500/20 hover:to-purple-500/20 border border-zinc-700/50 hover:border-pink-500/50 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20"
                            >
                                {search}
                            </button>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={() => handleManualScroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-linear-to-l from-zinc-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                        <div className="w-8 h-8 flex items-center justify-center bg-zinc-800 hover:bg-pink-500/20 border border-zinc-700 hover:border-pink-500 rounded-full transition-all duration-300">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </button>

                    {/* Gradient fades */}
                    <div className="absolute left-0 top-0 bottom-0 w-8 bg-linear-to-r from-zinc-950 to-transparent pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-8 bg-linear-to-l from-zinc-950 to-transparent pointer-events-none" />
                </div>
            </div>

            {/* Video Grid */}
            <div className="relative z-10 p-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {allVideos.map((video) => (
                        <VideoCard key={video.id} video={video} />
                    ))}
                </div>
            </div>

            {/* Loader */}
            <div className="flex justify-center py-8">
                <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-full">
                    <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <span className="text-sm text-gray-400 ml-2">Loading</span>
                </div>
            </div>
        </div>
    );
};

export default HomePage;