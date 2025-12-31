import React, { useState, useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Play, Heart, Star, Crown, MessageCircle, User, Eye } from "lucide-react";

// Mock utente loggato
const MOCK_USER = {
  id: "u1",
  name: "Test User",
  isVip: false, // cambia per test VIP/non VIP
};

// Mock video
const VIDEOS = [
  {
    id: "1",
    title: "Video Esclusivo Premium - Behind The Scenes",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&h=1080&fit=crop",
    creator: {
      name: "Sofia Martinez",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      followers: "125K",
      isPremium: true,
      bio: "Content creator & model specializzata in fotografia artistica"
    },
    views: 45234,
    likes: 3421,
    comments: 132,
    uploadDate: "2024-11-10",
    category: "Behind The Scenes",
    tags: ["premium", "exclusive", "bts", "artistic"],
    description: "Un viaggio esclusivo dietro le quinte del mio ultimo shooting fotografico.",
    duration: "12:34",
    isPremium: true
  },
  {
    id: "2",
    title: "Video Normale - Tutorial",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    poster: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=1920&h=1080&fit=crop",
    creator: {
      name: "Marco Rossi",
      avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop",
      followers: "50K",
      isPremium: false,
      bio: "Content creator & tutor video"
    },
    views: 12345,
    likes: 321,
    comments: 10,
    uploadDate: "2024-09-15",
    category: "Tutorial",
    tags: ["tutorial", "free", "guide"],
    description: "Video tutorial completo per principianti.",
    duration: "08:20",
    isPremium: false
  }
];

const VideoPage = () => {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [activeTab, setActiveTab] = useState("comments");

  const video = useMemo(() => VIDEOS.find(v => v.id === id), [id]);
  if (!video) return <Navigate to="/404" replace />;

  const isVipContent = video.isPremium;
  const userIsVip = MOCK_USER.isVip;
  const showVipBanner = isVipContent && !userIsVip;

  const formatNumber = num => num >= 1000 ? `${(num / 1000).toFixed(1)}K` : num;
  const formatDate = date => new Date(date).toLocaleDateString("it-IT");

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 xl:grid-cols-[1fr_400px] gap-8">

        {/* MAIN */}
        <div className="space-y-6">
          {/* VIDEO */}
          <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
            <img src={video.poster} alt={video.title} className="w-full h-full object-cover" />
            <button className="absolute inset-0 flex items-center justify-center transition-transform hover:scale-105" onClick={() => window.alert("Play video!")}>
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center shadow-xl hover:shadow-2xl">
                <Play className="w-12 h-12 text-white" />
              </div>
            </button>
            {video.isPremium && (
              <div className="absolute top-3 left-3 flex items-center gap-1 bg-yellow-400 text-black px-3 py-1 rounded-full font-bold shadow">
                <Crown className="w-4 h-4" />
                VIP
              </div>
            )}
            <div className="absolute top-3 right-3 bg-black/50 px-2 py-1 rounded text-xs font-semibold">
              {video.duration}
            </div>
          </div>

          {/* INFO */}
          <div className="bg-gray-800/80 border border-gray-700 rounded-xl p-6 space-y-6 shadow-lg">
            <h1 className="text-3xl font-bold">{video.title}</h1>

            {/* Stats */}
            <div className="flex flex-wrap justify-between items-center gap-4 border-b border-gray-700 pb-4">
              <div className="flex flex-wrap items-center gap-4 text-gray-300 text-sm">
                <span><Eye className="w-4 h-4 inline" /> {formatNumber(video.views)}</span>
                <span>•</span>
                <span><MessageCircle className="w-4 h-4 inline" /> {formatNumber(video.comments)}</span>
                <span>•</span>
                <span>{formatDate(video.uploadDate)}</span>
                <span className="px-3 py-1 rounded-full bg-pink-600/30 text-pink-500 font-semibold">{video.category}</span>
              </div>

              <div className="flex gap-3">
                <button onClick={() => setIsLiked(!isLiked)} className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition ${isLiked ? "bg-pink-500/70 border border-pink-400" : "bg-gray-700/50 hover:bg-pink-500/50 border border-gray-600"}`}>
                  <Heart className="w-5 h-5" /> {formatNumber(video.likes + (isLiked ? 1 : 0))}
                </button>
                <button onClick={() => setIsFavorited(!isFavorited)} className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition ${isFavorited ? "bg-purple-600/70 border border-purple-400" : "bg-gray-700/50 hover:bg-purple-600/50 border border-gray-600"}`}>
                  <Star className="w-5 h-5" /> Salva
                </button>
              </div>
            </div>

            {/* CREATOR */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img src={video.creator.avatar} alt={video.creator.name} className="w-16 h-16 rounded-full border-2 border-pink-500" />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-lg">{video.creator.name}</h3>
                    {video.creator.isPremium && <div className="flex items-center gap-1 bg-yellow-400 text-black px-2 py-0.5 text-xs rounded-full font-bold shadow"><Crown className="w-4 h-4" /> VIP</div>}
                  </div>
                  <p className="text-gray-400 text-sm">{video.creator.followers} followers</p>
                  <p className="text-gray-300 text-xs">{video.creator.bio}</p>
                </div>
              </div>
              <button onClick={() => setIsFollowing(!isFollowing)} className={`px-6 py-2 rounded-lg font-semibold transition-all ${isFollowing ? "border border-white/30 text-white" : "bg-gradient-to-r from-pink-500 to-purple-600 text-white"}`}>
                {isFollowing ? "Seguito ✓" : "Segui"}
              </button>
            </div>

            <p className="text-gray-300">{video.description}</p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2">
              {video.tags.map(tag => <span key={tag} className="px-3 py-1 text-xs rounded-full border border-pink-500/30 text-pink-400 bg-pink-500/10">#{tag}</span>)}
            </div>

            {/* TABS */}
            <div className="flex gap-6 border-b border-gray-700 mb-6">
              {["comments", "related"].map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)} className={`pb-3 font-semibold ${activeTab === tab ? "text-pink-500 border-b-2 border-pink-500" : "text-gray-400"}`}>
                  {tab === "comments" ? "Commenti" : "Video correlati"}
                </button>
              ))}
            </div>

            {activeTab === "comments" && <div className="text-gray-500 py-10 text-center">Sezione commenti (coming soon)</div>}
          </div>
        </div>

        {/* SIDEBAR VIP */}
        <aside className="space-y-6">
          {showVipBanner && (
            <div className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 border border-pink-500/30 rounded-xl p-6 text-center shadow-lg">
              <Crown className="w-8 h-8 mx-auto mb-3" />
              <h3 className="text-white font-bold mb-2 text-xl">Contenuto VIP</h3>
              <p className="text-gray-300 mb-4">Accedi a tutti i contenuti premium e esclusivi.</p>
              <button className="w-full py-3 rounded-lg bg-yellow-400 text-black font-bold hover:brightness-110 transition">Passa a VIP</button>
            </div>
          )}

          {/* Altri video dallo stesso creator */}
          <div className="bg-gray-800/80 border border-gray-700 rounded-xl p-4 space-y-4 shadow-lg">
            <h4 className="text-lg font-bold mb-2">Altri video di {video.creator.name}</h4>
            {VIDEOS.filter(v => v.creator.name === video.creator.name && v.id !== video.id).map(v => (
              <div key={v.id} className="flex items-center gap-3">
                <img src={v.poster} alt={v.title} className="w-20 h-12 object-cover rounded" />
                <div className="flex-1 text-sm">
                  <p className="font-semibold">{v.title}</p>
                  <p className="text-gray-400">{formatNumber(v.views)} views</p>
                </div>
              </div>
            ))}
          </div>
        </aside>

      </div>
    </div>
  );
};

export default VideoPage;
