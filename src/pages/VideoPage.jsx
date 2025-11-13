import React, { useState } from 'react';

// VideoPage.jsx - Pagina Video Dettaglio Completa
const VideoPage = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [activeTab, setActiveTab] = useState('comments'); // comments, related

  // Mock Video Data
  const video = {
    id: 1,
    title: 'Video Esclusivo Premium - Behind The Scenes',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    poster: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&h=1080&fit=crop',
    creator: {
      name: 'Sofia Martinez',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      followers: '125K',
      isPremium: true,
      bio: 'Content creator & model specializzata in fotografia artistica'
    },
    duration: '12:34',
    views: 45234,
    likes: 3421,
    uploadDate: '2024-11-10',
    category: 'Behind The Scenes',
    tags: ['premium', 'exclusive', 'bts', 'artistic'],
    description: 'Un viaggio esclusivo dietro le quinte del mio ultimo shooting fotografico. Contenuto riservato ai membri VIP con accesso a materiale inedito e momenti speciali.',
    isPremium: true
  };

  const comments = [
    {
      id: 1,
      user: {
        name: 'Marco R.',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
        isPremium: true
      },
      text: 'Contenuto fantastico! La qualità è davvero eccezionale.',
      // eslint-disable-next-line react-hooks/purity
      timestamp: new Date(Date.now() - 3600000),
      likes: 24,
      replies: [
        {
          id: 11,
          user: {
            name: 'Sofia Martinez',
            avatar: video.creator.avatar,
            isPremium: true
          },
          text: 'Grazie mille! Sono felice che ti piaccia ❤️',
          // eslint-disable-next-line react-hooks/purity
          timestamp: new Date(Date.now() - 3000000),
          likes: 12
        }
      ]
    },
    {
      id: 2,
      user: {
        name: 'Luca M.',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
        isPremium: false
      },
      text: 'Vale assolutamente l\'abbonamento premium!',
      // eslint-disable-next-line react-hooks/purity
      timestamp: new Date(Date.now() - 7200000),
      likes: 18,
      replies: []
    }
  ];

  const relatedVideos = [
    {
      id: 2,
      thumbnail: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=225&fit=crop',
      title: 'Nuova Serie Sensuale',
      creator: 'Luna Rose',
      duration: '18:45',
      views: '32.1K',
      uploadDate: '1 giorno fa'
    },
    {
      id: 3,
      thumbnail: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400&h=225&fit=crop',
      title: 'VIP Exclusive Content',
      creator: 'Emma Luxe',
      duration: '25:12',
      views: '78.5K',
      uploadDate: '3 giorni fa'
    }
  ];

  const pageStyle = {
    minHeight: '100vh',
    background: '#0A0A0F',
    paddingTop: '80px'
  };

  const containerStyle = {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '2rem'
  };

  const mainGridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 400px',
    gap: '2rem',
    alignItems: 'start'
  };

  const videoContainerStyle = {
    background: 'rgba(26, 26, 40, 0.4)',
    borderRadius: '1rem',
    padding: '1.5rem',
    border: '1px solid rgba(255, 255, 255, 0.06)'
  };

  const titleStyle = {
    fontSize: '1.75rem',
    fontWeight: 700,
    color: '#FFFFFF',
    marginBottom: '1rem',
    fontFamily: '"Playfair Display", serif'
  };

  const metaRowStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '1rem',
    marginBottom: '1.5rem',
    paddingBottom: '1.5rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
  };

  const statsStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    fontSize: '0.875rem',
    color: '#B8B8C8',
    fontFamily: '"Inter", sans-serif'
  };

  const actionsStyle = {
    display: 'flex',
    gap: '0.75rem'
  };

  const actionButtonStyle = (isActive) => ({
    padding: '0.75rem 1.5rem',
    background: isActive ? 'rgba(233, 30, 99, 0.2)' : 'rgba(255, 255, 255, 0.05)',
    border: isActive ? '2px solid #E91E63' : '2px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '0.75rem',
    color: isActive ? '#E91E63' : '#FFFFFF',
    fontSize: '0.875rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontFamily: '"Inter", sans-serif',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  });

  const creatorCardStyle = {
    background: 'rgba(26, 26, 40, 0.4)',
    borderRadius: '1rem',
    padding: '1.5rem',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    marginBottom: '1.5rem'
  };

  const creatorHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1rem'
  };

  const avatarStyle = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid #E91E63'
  };

  const descriptionStyle = {
    fontSize: '0.875rem',
    color: '#B8B8C8',
    lineHeight: 1.6,
    marginBottom: '1.5rem',
    fontFamily: '"Inter", sans-serif'
  };

  const tagsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1.5rem'
  };

  const tagStyle = {
    padding: '0.5rem 1rem',
    background: 'rgba(233, 30, 99, 0.1)',
    border: '1px solid rgba(233, 30, 99, 0.3)',
    borderRadius: '0.5rem',
    fontSize: '0.75rem',
    color: '#E91E63',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  };

  const tabsStyle = {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1.5rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
    paddingBottom: '1rem'
  };

  const tabButtonStyle = (isActive) => ({
    padding: '0.75rem 1.5rem',
    background: 'transparent',
    border: 'none',
    borderBottom: isActive ? '3px solid #E91E63' : '3px solid transparent',
    color: isActive ? '#E91E63' : '#B8B8C8',
    fontSize: '0.875rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontFamily: '"Inter", sans-serif'
  });

  const relatedVideoStyle = {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1rem',
    padding: '1rem',
    background: 'rgba(255, 255, 255, 0.02)',
    borderRadius: '0.75rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  };

  const thumbnailStyle = {
    width: '160px',
    height: '90px',
    borderRadius: '0.5rem',
    objectFit: 'cover',
    flexShrink: 0
  };

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Oggi';
    if (diffDays === 1) return 'Ieri';
    if (diffDays < 7) return `${diffDays} giorni fa`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} settimane fa`;
    return date.toLocaleDateString('it-IT');
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <div style={mainGridStyle}>
          {/* Main Content */}
          <div>
            {/* Video Player Placeholder */}
            <div style={{
              width: '100%',
              aspectRatio: '16/9',
              background: '#000',
              borderRadius: '1rem',
              marginBottom: '1.5rem',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <img src={video.poster} alt={video.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'rgba(233, 30, 99, 0.95)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 8px 32px rgba(233, 30, 99, 0.6)'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
            </div>

            {/* Video Info */}
            <div style={videoContainerStyle}>
              <h1 style={titleStyle}>{video.title}</h1>

              <div style={metaRowStyle}>
                <div style={statsStyle}>
                  <span>{formatNumber(video.views)} visualizzazioni</span>
                  <span>•</span>
                  <span>{formatDate(video.uploadDate)}</span>
                  <span>•</span>
                  <span style={{
                    padding: '0.25rem 0.75rem',
                    background: 'rgba(233, 30, 99, 0.2)',
                    borderRadius: '0.5rem',
                    color: '#E91E63',
                    fontWeight: 600
                  }}>
                    {video.category}
                  </span>
                </div>

                <div style={actionsStyle}>
                  <button
                    style={actionButtonStyle(isLiked)}
                    onClick={() => setIsLiked(!isLiked)}
                    onMouseEnter={(e) => {
                      if (!isLiked) {
                        e.currentTarget.style.borderColor = '#E91E63';
                        e.currentTarget.style.color = '#E91E63';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isLiked) {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                        e.currentTarget.style.color = '#FFFFFF';
                      }
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill={isLiked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    {formatNumber(video.likes + (isLiked ? 1 : 0))}
                  </button>

                  <button
                    style={actionButtonStyle(isFavorited)}
                    onClick={() => setIsFavorited(!isFavorited)}
                    onMouseEnter={(e) => {
                      if (!isFavorited) {
                        e.currentTarget.style.borderColor = '#E91E63';
                        e.currentTarget.style.color = '#E91E63';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isFavorited) {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                        e.currentTarget.style.color = '#FFFFFF';
                      }
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill={isFavorited ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    Salva
                  </button>

                  <button
                    style={actionButtonStyle(false)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#E91E63';
                      e.currentTarget.style.color = '#E91E63';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.color = '#FFFFFF';
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="18" cy="5" r="3" />
                      <circle cx="6" cy="12" r="3" />
                      <circle cx="18" cy="19" r="3" />
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                    </svg>
                    Condividi
                  </button>
                </div>
              </div>

              {/* Creator Info */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={creatorHeaderStyle}>
                  <img src={video.creator.avatar} alt={video.creator.name} style={avatarStyle} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#FFFFFF', margin: 0 }}>
                        {video.creator.name}
                      </h3>
                      {video.creator.isPremium && (
                        <div style={{
                          padding: '0.125rem 0.5rem',
                          background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                          borderRadius: '0.25rem',
                          fontSize: '0.625rem',
                          fontWeight: 700,
                          color: '#0A0A0F',
                          textTransform: 'uppercase'
                        }}>
                          VIP
                        </div>
                      )}
                    </div>
                    <div style={{ fontSize: '0.875rem', color: '#7A7A8A' }}>
                      {video.creator.followers} followers
                    </div>
                  </div>
                  <button
                    style={{
                      padding: '0.75rem 2rem',
                      background: isFollowing ? 'transparent' : 'linear-gradient(135deg, #E91E63 0%, #9C27B0 100%)',
                      border: isFollowing ? '2px solid rgba(255, 255, 255, 0.2)' : 'none',
                      borderRadius: '0.75rem',
                      color: '#FFFFFF',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => setIsFollowing(!isFollowing)}
                  >
                    {isFollowing ? 'Seguito ✓' : 'Segui'}
                  </button>
                </div>
                <p style={descriptionStyle}>{video.creator.bio}</p>
              </div>

              {/* Description */}
              <p style={descriptionStyle}>{video.description}</p>

              {/* Tags */}
              <div style={tagsContainerStyle}>
                {video.tags.map((tag, index) => (
                  <span
                    key={index}
                    style={tagStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(233, 30, 99, 0.2)';
                      e.currentTarget.style.borderColor = '#E91E63';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(233, 30, 99, 0.1)';
                      e.currentTarget.style.borderColor = 'rgba(233, 30, 99, 0.3)';
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Tabs */}
              <div style={tabsStyle}>
                <button
                  style={tabButtonStyle(activeTab === 'comments')}
                  onClick={() => setActiveTab('comments')}
                >
                  Commenti ({comments.length})
                </button>
                <button
                  style={tabButtonStyle(activeTab === 'related')}
                  onClick={() => setActiveTab('related')}
                >
                  Video correlati
                </button>
              </div>

              {/* Comments Section */}
              {activeTab === 'comments' && (
                <div>
                  <p style={{ color: '#B8B8C8', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                    💬 {comments.length} commenti
                  </p>
                  {/* Placeholder per lista commenti */}
                  <div style={{ color: '#7A7A8A', textAlign: 'center', padding: '2rem' }}>
                    Sezione commenti - Usare CommentSection component
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Premium Upgrade Card */}
            {video.isPremium && (
              <div style={{
                ...creatorCardStyle,
                background: 'linear-gradient(135deg, rgba(233, 30, 99, 0.2) 0%, rgba(156, 39, 176, 0.2) 100%)',
                border: '1px solid rgba(233, 30, 99, 0.3)',
                marginBottom: '1.5rem'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem', textAlign: 'center' }}>👑</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF', textAlign: 'center', marginBottom: '0.5rem' }}>
                  Contenuto VIP Esclusivo
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#B8B8C8', textAlign: 'center', marginBottom: '1.5rem' }}>
                  Diventa membro VIP per accedere a tutti i contenuti premium
                </p>
                <button style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                  color: '#0A0A0F',
                  border: 'none',
                  borderRadius: '0.75rem',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase'
                }}>
                  Passa a VIP
                </button>
              </div>
            )}

            {/* Related Videos */}
            <div style={creatorCardStyle}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '1.5rem' }}>
                Video correlati
              </h3>
              {relatedVideos.map((vid) => (
                <div
                  key={vid.id}
                  style={relatedVideoStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(233, 30, 99, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                  }}
                >
                  <img src={vid.thumbnail} alt={vid.title} style={thumbnailStyle} />
                  <div style={{ flex: 1 }}>
                    <h4 style={{
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: '#FFFFFF',
                      marginBottom: '0.5rem',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical'
                    }}>
                      {vid.title}
                    </h4>
                    <div style={{ fontSize: '0.75rem', color: '#B8B8C8', marginBottom: '0.25rem' }}>
                      {vid.creator}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#7A7A8A' }}>
                      {vid.views} • {vid.uploadDate}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;