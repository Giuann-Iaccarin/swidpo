import React, { useState } from 'react';

// HomePage.jsx - Pagina Principale Completa
const HomePage = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    //const [user, setUser] = useState(null); // null = non loggato, oppure oggetto user

    // Mock Data
    const heroSlides = [
        {
            id: 1,
            title: 'Benvenuto su Swidpo',
            subtitle: 'L\'esperienza premium per adulti',
            description: 'Scopri contenuti esclusivi, creatori di talento e un mondo di piacere',
            image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1920&h=800&fit=crop',
            ctaText: 'Inizia Ora',
            ctaLink: '/register'
        },
        {
            id: 2,
            title: 'Contenuti Esclusivi VIP',
            subtitle: 'Solo per membri premium',
            description: 'Accedi a migliaia di video esclusivi e lezioni interattive',
            image: 'https://images.unsplash.com/photo-1492666673288-3c4b4576ad9a?w=1920&h=800&fit=crop',
            ctaText: 'Diventa VIP',
            ctaLink: '/premium'
        },
        {
            id: 3,
            title: 'Shop Esclusivo',
            subtitle: 'Prodotti premium selezionati',
            description: 'Scopri la nostra collezione di prodotti luxury e digitali',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=800&fit=crop',
            ctaText: 'Esplora Shop',
            ctaLink: '/shop'
        }
    ];

    const trendingVideos = [
        {
            id: 1,
            thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=225&fit=crop',
            title: 'Video Esclusivo Premium',
            creator: 'Sofia Martinez',
            duration: '12:34',
            views: '45.2K',
            uploadDate: '2 giorni fa',
            isExclusive: true,
            category: 'Trending'
        },
        {
            id: 2,
            thumbnail: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=225&fit=crop',
            title: 'Nuova Serie Sensuale',
            creator: 'Luna Rose',
            duration: '18:45',
            views: '32.1K',
            uploadDate: '1 giorno fa',
            isExclusive: false,
            category: 'Nuovi'
        },
        {
            id: 3,
            thumbnail: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400&h=225&fit=crop',
            title: 'Behind The Scenes VIP',
            creator: 'Emma Luxe',
            duration: '25:12',
            views: '78.5K',
            uploadDate: '3 giorni fa',
            isExclusive: true,
            category: 'VIP'
        },
        {
            id: 4,
            thumbnail: 'https://images.unsplash.com/photo-1518893063132-36e46dbe2428?w=400&h=225&fit=crop',
            title: 'Artistic Performance',
            creator: 'Isabella Noir',
            duration: '15:30',
            views: '56.8K',
            uploadDate: '1 settimana fa',
            isExclusive: false,
            category: 'Arte'
        }
    ];

    const featuredCreators = [
        {
            id: 1,
            name: 'Sofia Martinez',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
            followers: '125K',
            videos: 342,
            isPremium: true,
            bio: 'Content creator & model'
        },
        {
            id: 2,
            name: 'Luna Rose',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop',
            followers: '98K',
            videos: 256,
            isPremium: true,
            bio: 'Sensual artist'
        },
        {
            id: 3,
            name: 'Emma Luxe',
            avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop',
            followers: '210K',
            videos: 478,
            isPremium: true,
            bio: 'VIP exclusive'
        },
        {
            id: 4,
            name: 'Isabella Noir',
            avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=150&h=150&fit=crop',
            followers: '156K',
            videos: 389,
            isPremium: true,
            bio: 'Performance artist'
        }
    ];

    const categories = [
        { id: 'all', name: 'Tutti', icon: '🎬', count: 12543 },
        { id: 'trending', name: 'Tendenze', icon: '🔥', count: 892 },
        { id: 'new', name: 'Novità', icon: '✨', count: 234 },
        { id: 'vip', name: 'VIP Exclusive', icon: '👑', count: 456 },
        { id: 'popular', name: 'Popolari', icon: '⭐', count: 1234 }
    ];

    const pageStyle = {
        minHeight: '100vh',
        background: '#0A0A0F',
        paddingTop: '80px'
    };

    const sectionStyle = {
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '3rem 2rem'
    };

    const sectionHeaderStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '2rem'
    };

    const sectionTitleStyle = {
        fontSize: '2rem',
        fontWeight: 700,
        color: '#FFFFFF',
        fontFamily: '"Playfair Display", serif'
    };

    const viewAllButtonStyle = {
        padding: '0.75rem 1.5rem',
        background: 'transparent',
        border: '2px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '0.75rem',
        color: '#E91E63',
        fontSize: '0.875rem',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        fontFamily: '"Inter", sans-serif'
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '2rem'
    };

    const creatorCardStyle = {
        background: 'rgba(26, 26, 40, 0.4)',
        borderRadius: '1rem',
        padding: '2rem',
        textAlign: 'center',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
    };

    const avatarStyle = {
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        margin: '0 auto 1rem',
        border: '4px solid transparent',
        backgroundImage: 'linear-gradient(#1A1A28, #1A1A28), linear-gradient(135deg, #E91E63 0%, #9C27B0 100%)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
        objectFit: 'cover'
    };

    const statsContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1rem',
        marginTop: '1.5rem'
    };

    const statStyle = {
        textAlign: 'center'
    };

    const statValueStyle = {
        fontSize: '1.5rem',
        fontWeight: 700,
        color: '#E91E63',
        fontFamily: '"Inter", sans-serif'
    };

    const statLabelStyle = {
        fontSize: '0.75rem',
        color: '#7A7A8A',
        textTransform: 'uppercase',
        marginTop: '0.25rem',
        fontFamily: '"Inter", sans-serif'
    };

    const ctaBannerStyle = {
        background: 'linear-gradient(135deg, rgba(233, 30, 99, 0.2) 0%, rgba(156, 39, 176, 0.2) 100%)',
        borderRadius: '1.5rem',
        padding: '4rem 2rem',
        textAlign: 'center',
        border: '1px solid rgba(233, 30, 99, 0.3)',
        marginTop: '3rem',
        position: 'relative',
        overflow: 'hidden'
    };

    const ctaTitleStyle = {
        fontSize: '2.5rem',
        fontWeight: 900,
        background: 'linear-gradient(135deg, #FFFFFF 0%, #E91E63 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        marginBottom: '1rem',
        fontFamily: '"Playfair Display", serif'
    };

    const ctaButtonStyle = {
        padding: '1.25rem 3rem',
        background: 'linear-gradient(135deg, #E91E63 0%, #9C27B0 100%)',
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '3rem',
        fontSize: '1.125rem',
        fontWeight: 700,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 8px 32px rgba(233, 30, 99, 0.4)',
        fontFamily: '"Inter", sans-serif',
        marginTop: '1.5rem'
    };

    // Placeholder per VideoCard component
    const VideoCardPlaceholder = ({ video }) => (
        <div
            style={{
                background: 'rgba(26, 26, 40, 0.4)',
                borderRadius: '1rem',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(233, 30, 99, 0.3)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
            }}
        >
            <div style={{ position: 'relative', paddingBottom: '56.25%', background: '#1A1A28' }}>
                <img
                    src={video.thumbnail}
                    alt={video.title}
                    style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                    position: 'absolute',
                    bottom: '0.75rem',
                    right: '0.75rem',
                    padding: '0.25rem 0.5rem',
                    background: 'rgba(10, 10, 15, 0.9)',
                    borderRadius: '0.25rem',
                    fontSize: '0.75rem',
                    color: '#FFFFFF'
                }}>
                    {video.duration}
                </div>
                {video.isExclusive && (
                    <div style={{
                        position: 'absolute',
                        top: '0.75rem',
                        left: '0.75rem',
                        padding: '0.25rem 0.75rem',
                        background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                        borderRadius: '0.5rem',
                        fontSize: '0.625rem',
                        fontWeight: 700,
                        color: '#0A0A0F',
                        textTransform: 'uppercase'
                    }}>
                        VIP
                    </div>
                )}
            </div>
            <div style={{ padding: '1.25rem' }}>
                <h3 style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    marginBottom: '0.5rem',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                }}>
                    {video.title}
                </h3>
                <div style={{ fontSize: '0.875rem', color: '#B8B8C8', marginBottom: '0.5rem' }}>
                    {video.creator}
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.75rem', color: '#7A7A8A' }}>
                    <span>{video.views} visualizzazioni</span>
                    <span>•</span>
                    <span>{video.uploadDate}</span>
                </div>
            </div>
        </div>
    );

    return (
        <div style={pageStyle}>
            {/* Hero Section con Slider */}
            <div style={{ position: 'relative', width: '100%', height: '80vh', minHeight: '600px', overflow: 'hidden' }}>
                <img
                    src={heroSlides[0].image}
                    alt={heroSlides[0].title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute' }}
                />
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(10,10,15,0.95) 0%, rgba(233,30,99,0.2) 100%)'
                }} />
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    maxWidth: '800px',
                    padding: '0 2rem',
                    width: '100%'
                }}>
                    <div style={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: '#E91E63',
                        textTransform: 'uppercase',
                        letterSpacing: '0.15em',
                        marginBottom: '1rem'
                    }}>
                        {heroSlides[0].subtitle}
                    </div>
                    <h1 style={{
                        fontSize: '4rem',
                        fontWeight: 900,
                        fontFamily: '"Playfair Display", serif',
                        background: 'linear-gradient(135deg, #FFFFFF 0%, #E91E63 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '1.5rem',
                        lineHeight: 1.2
                    }}>
                        {heroSlides[0].title}
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: '#B8B8C8', marginBottom: '2.5rem', lineHeight: 1.6 }}>
                        {heroSlides[0].description}
                    </p>
                    <button
                        style={ctaButtonStyle}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.boxShadow = '0 12px 48px rgba(233, 30, 99, 0.6)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 8px 32px rgba(233, 30, 99, 0.4)';
                        }}
                    >
                        {heroSlides[0].ctaText}
                    </button>
                </div>
            </div>

            {/* Categories Bar */}
            <div style={sectionStyle}>
                <div style={{
                    display: 'flex',
                    gap: '1rem',
                    overflowX: 'auto',
                    paddingBottom: '0.5rem',
                    marginBottom: '2rem'
                }}>
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            style={{
                                padding: '1rem 1.5rem',
                                background: selectedCategory === cat.id ? 'linear-gradient(135deg, #E91E63 0%, #9C27B0 100%)' : 'rgba(255, 255, 255, 0.05)',
                                border: selectedCategory === cat.id ? 'none' : '2px solid rgba(255, 255, 255, 0.08)',
                                borderRadius: '0.75rem',
                                color: '#FFFFFF',
                                fontSize: '0.875rem',
                                fontWeight: selectedCategory === cat.id ? 600 : 500,
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                whiteSpace: 'nowrap',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                boxShadow: selectedCategory === cat.id ? '0 4px 16px rgba(233, 30, 99, 0.4)' : 'none'
                            }}
                        >
                            <span style={{ fontSize: '1.25rem' }}>{cat.icon}</span>
                            {cat.name}
                            <span style={{
                                padding: '0.125rem 0.5rem',
                                background: 'rgba(255, 255, 255, 0.1)',
                                borderRadius: '0.25rem',
                                fontSize: '0.625rem',
                                marginLeft: '0.25rem'
                            }}>
                                {cat.count}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Trending Videos */}
                <div style={sectionHeaderStyle}>
                    <h2 style={sectionTitleStyle}>🔥 Video in Tendenza</h2>
                    <button
                        style={viewAllButtonStyle}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = '#E91E63';
                            e.currentTarget.style.background = 'rgba(233, 30, 99, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                            e.currentTarget.style.background = 'transparent';
                        }}
                    >
                        Vedi tutti →
                    </button>
                </div>

                <div style={gridStyle}>
                    {trendingVideos.map((video) => (
                        <VideoCardPlaceholder key={video.id} video={video} />
                    ))}
                </div>
            </div>

            {/* Featured Creators */}
            <div style={{ ...sectionStyle, background: 'rgba(26, 26, 40, 0.2)' }}>
                <div style={sectionHeaderStyle}>
                    <h2 style={sectionTitleStyle}>⭐ Creatori in Evidenza</h2>
                    <button style={viewAllButtonStyle}>Scopri tutti →</button>
                </div>

                <div style={gridStyle}>
                    {featuredCreators.map((creator) => (
                        <div
                            key={creator.id}
                            style={creatorCardStyle}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 12px 40px rgba(233, 30, 99, 0.3)';
                                e.currentTarget.style.borderColor = 'rgba(233, 30, 99, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                            }}
                        >
                            <img src={creator.avatar} alt={creator.name} style={avatarStyle} />
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.5rem' }}>
                                {creator.name}
                            </h3>
                            {creator.isPremium && (
                                <div style={{
                                    display: 'inline-block',
                                    padding: '0.25rem 0.75rem',
                                    background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                                    borderRadius: '0.5rem',
                                    fontSize: '0.625rem',
                                    fontWeight: 700,
                                    color: '#0A0A0F',
                                    textTransform: 'uppercase',
                                    marginBottom: '0.75rem'
                                }}>
                                    VIP Creator
                                </div>
                            )}
                            <p style={{ fontSize: '0.875rem', color: '#B8B8C8', marginBottom: '1rem' }}>
                                {creator.bio}
                            </p>
                            <div style={statsContainerStyle}>
                                <div style={statStyle}>
                                    <div style={statValueStyle}>{creator.followers}</div>
                                    <div style={statLabelStyle}>Followers</div>
                                </div>
                                <div style={statStyle}>
                                    <div style={statValueStyle}>{creator.videos}</div>
                                    <div style={statLabelStyle}>Videos</div>
                                </div>
                            </div>
                            <button
                                style={{
                                    width: '100%',
                                    marginTop: '1.5rem',
                                    padding: '0.875rem',
                                    background: 'linear-gradient(135deg, #E91E63 0%, #9C27B0 100%)',
                                    color: '#FFFFFF',
                                    border: 'none',
                                    borderRadius: '0.75rem',
                                    fontSize: '0.875rem',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(233, 30, 99, 0.5)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                Segui
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Banner */}
            <div style={sectionStyle}>
                <div style={ctaBannerStyle}>
                    <h2 style={ctaTitleStyle}>Diventa membro VIP oggi</h2>
                    <p style={{ fontSize: '1.25rem', color: '#B8B8C8', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                        Accedi a contenuti esclusivi, videolezioni premium e molto altro. Unisciti a oltre 100.000 membri VIP.
                    </p>
                    <button
                        style={ctaButtonStyle}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.boxShadow = '0 12px 48px rgba(233, 30, 99, 0.6)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 8px 32px rgba(233, 30, 99, 0.4)';
                        }}
                    >
                        Scopri i Piani VIP
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;