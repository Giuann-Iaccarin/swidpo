import React, { useState } from 'react';

// ProfilePage.jsx - Pagina Profilo Completa
const ProfilePage = () => {
    const [activeTab, setActiveTab] = useState('overview'); // overview, videos, favorites, playlists, settings
    const [isEditing, setIsEditing] = useState(false);

    const user = {
        id: 1,
        name: 'Marco Rossi',
        username: '@marcorossi',
        email: 'marco.rossi@email.com',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
        cover: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=1400&h=400&fit=crop',
        bio: 'Appassionato di fotografia e content creation. Membro VIP dal 2023.',
        isPremium: true,
        memberSince: '2023-01-15',
        location: 'Milano, Italia',
        website: 'marcorossi.com',
        stats: {
            followers: 1234,
            following: 567,
            videosWatched: 892,
            favorites: 234,
            playlists: 12
        },
        subscription: {
            plan: 'VIP Exclusive',
            status: 'active',
            nextBilling: '2024-12-15',
            price: 49.99
        }
    };

    const recentVideos = [
        {
            id: 1,
            thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=170&fit=crop',
            title: 'Video Esclusivo Premium',
            creator: 'Sofia Martinez',
            duration: '12:34',
            watchedAt: '2 ore fa'
        },
        {
            id: 2,
            thumbnail: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=170&fit=crop',
            title: 'Nuova Serie Sensuale',
            creator: 'Luna Rose',
            duration: '18:45',
            watchedAt: '1 giorno fa'
        }
    ];

    const pageStyle = {
        minHeight: '100vh',
        background: '#0A0A0F',
        paddingTop: '80px'
    };

    const coverStyle = {
        width: '100%',
        height: '300px',
        position: 'relative',
        overflow: 'hidden'
    };

    const coverImageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    };

    const coverOverlayStyle = {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '150px',
        background: 'linear-gradient(180deg, transparent 0%, #0A0A0F 100%)'
    };

    const containerStyle = {
        maxWidth: '1400px',
        margin: '-80px auto 0',
        padding: '0 2rem 3rem',
        position: 'relative',
        zIndex: 10
    };

    const profileHeaderStyle = {
        display: 'flex',
        gap: '2rem',
        alignItems: 'flex-end',
        marginBottom: '3rem'
    };

    const avatarWrapperStyle = {
        position: 'relative'
    };

    const avatarStyle = {
        width: '160px',
        height: '160px',
        borderRadius: '50%',
        border: '6px solid #0A0A0F',
        objectFit: 'cover',
        boxShadow: '0 8px 32px rgba(233, 30, 99, 0.4)'
    };

    const badgeStyle = {
        position: 'absolute',
        bottom: '10px',
        right: '10px',
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
        border: '4px solid #0A0A0F',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem'
    };

    const profileInfoStyle = {
        flex: 1
    };

    const nameStyle = {
        fontSize: '2.5rem',
        fontWeight: 700,
        color: '#FFFFFF',
        marginBottom: '0.5rem',
        fontFamily: '"Playfair Display", serif'
    };

    const usernameStyle = {
        fontSize: '1.125rem',
        color: '#E91E63',
        marginBottom: '1rem',
        fontFamily: '"Inter", sans-serif'
    };

    const bioStyle = {
        fontSize: '1rem',
        color: '#B8B8C8',
        lineHeight: 1.6,
        marginBottom: '1.5rem',
        fontFamily: '"Inter", sans-serif'
    };

    const metaStyle = {
        display: 'flex',
        gap: '2rem',
        fontSize: '0.875rem',
        color: '#7A7A8A',
        marginBottom: '1.5rem',
        fontFamily: '"Inter", sans-serif'
    };

    const metaItemStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
    };

    const statsStyle = {
        display: 'flex',
        gap: '3rem'
    };

    const statStyle = {
        textAlign: 'center'
    };

    const statValueStyle = {
        fontSize: '1.75rem',
        fontWeight: 700,
        color: '#FFFFFF',
        marginBottom: '0.25rem',
        fontFamily: '"Inter", sans-serif'
    };

    const statLabelStyle = {
        fontSize: '0.875rem',
        color: '#7A7A8A',
        fontFamily: '"Inter", sans-serif'
    };

    const actionsStyle = {
        display: 'flex',
        gap: '1rem'
    };

    const buttonStyle = (variant = 'primary') => ({
        padding: '0.875rem 2rem',
        background: variant === 'primary' ? 'linear-gradient(135deg, #E91E63 0%, #9C27B0 100%)' : 'transparent',
        border: variant === 'primary' ? 'none' : '2px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '0.75rem',
        color: '#FFFFFF',
        fontSize: '0.875rem',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        fontFamily: '"Inter", sans-serif'
    });

    const tabsStyle = {
        display: 'flex',
        gap: '1rem',
        marginBottom: '2rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        overflowX: 'auto'
    };

    const tabButtonStyle = (isActive) => ({
        padding: '1rem 1.5rem',
        background: 'transparent',
        border: 'none',
        borderBottom: isActive ? '3px solid #E91E63' : '3px solid transparent',
        color: isActive ? '#E91E63' : '#B8B8C8',
        fontSize: '0.875rem',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        fontFamily: '"Inter", sans-serif',
        whiteSpace: 'nowrap'
    });

    const contentStyle = {
        display: 'grid',
        gap: '2rem'
    };

    const cardStyle = {
        background: 'rgba(26, 26, 40, 0.4)',
        borderRadius: '1rem',
        padding: '2rem',
        border: '1px solid rgba(255, 255, 255, 0.06)'
    };

    const cardTitleStyle = {
        fontSize: '1.5rem',
        fontWeight: 700,
        color: '#FFFFFF',
        marginBottom: '1.5rem',
        fontFamily: '"Playfair Display", serif'
    };

    const subscriptionCardStyle = {
        ...cardStyle,
        background: 'linear-gradient(135deg, rgba(233, 30, 99, 0.2) 0%, rgba(156, 39, 176, 0.2) 100%)',
        border: '1px solid rgba(233, 30, 99, 0.3)'
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1.5rem'
    };

    const videoCardMiniStyle = {
        background: 'rgba(255, 255, 255, 0.02)',
        borderRadius: '0.75rem',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
    };

    const thumbnailStyle = {
        position: 'relative',
        paddingBottom: '56.25%'
    };

    return (
        <div style={pageStyle}>
            {/* Cover Photo */}
            <div style={coverStyle}>
                <img src={user.cover} alt="Cover" style={coverImageStyle} />
                <div style={coverOverlayStyle} />
            </div>

            <div style={containerStyle}>
                {/* Profile Header */}
                <div style={profileHeaderStyle}>
                    <div style={avatarWrapperStyle}>
                        <img src={user.avatar} alt={user.name} style={avatarStyle} />
                        {user.isPremium && (
                            <div style={badgeStyle}>👑</div>
                        )}
                    </div>

                    <div style={profileInfoStyle}>
                        <h1 style={nameStyle}>{user.name}</h1>
                        <div style={usernameStyle}>{user.username}</div>
                        <p style={bioStyle}>{user.bio}</p>

                        <div style={metaStyle}>
                            <div style={metaItemStyle}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                {user.location}
                            </div>
                            <div style={metaItemStyle}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                    <line x1="16" y1="2" x2="16" y2="6" />
                                    <line x1="8" y1="2" x2="8" y2="6" />
                                    <line x1="3" y1="10" x2="21" y2="10" />
                                </svg>
                                Membro dal {new Date(user.memberSince).toLocaleDateString('it-IT')}
                            </div>
                            <div style={metaItemStyle}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                                </svg>
                                {user.website}
                            </div>
                        </div>

                        <div style={statsStyle}>
                            <div style={statStyle}>
                                <div style={statValueStyle}>{user.stats.followers.toLocaleString()}</div>
                                <div style={statLabelStyle}>Followers</div>
                            </div>
                            <div style={statStyle}>
                                <div style={statValueStyle}>{user.stats.following.toLocaleString()}</div>
                                <div style={statLabelStyle}>Following</div>
                            </div>
                            <div style={statStyle}>
                                <div style={statValueStyle}>{user.stats.videosWatched}</div>
                                <div style={statLabelStyle}>Video visti</div>
                            </div>
                            <div style={statStyle}>
                                <div style={statValueStyle}>{user.stats.favorites}</div>
                                <div style={statLabelStyle}>Preferiti</div>
                            </div>
                        </div>
                    </div>

                    <div style={actionsStyle}>
                        <button
                            style={buttonStyle('primary')}
                            onClick={() => setIsEditing(!isEditing)}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 8px 24px rgba(233, 30, 99, 0.5)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            Modifica profilo
                        </button>
                        <button
                            style={buttonStyle('secondary')}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = '#E91E63';
                                e.currentTarget.style.background = 'rgba(233, 30, 99, 0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                e.currentTarget.style.background = 'transparent';
                            }}
                        >
                            Condividi profilo
                        </button>
                    </div>
                </div>

                {/* Tabs */}
                <div style={tabsStyle}>
                    <button style={tabButtonStyle(activeTab === 'overview')} onClick={() => setActiveTab('overview')}>
                        Panoramica
                    </button>
                    <button style={tabButtonStyle(activeTab === 'videos')} onClick={() => setActiveTab('videos')}>
                        Video visti ({user.stats.videosWatched})
                    </button>
                    <button style={tabButtonStyle(activeTab === 'favorites')} onClick={() => setActiveTab('favorites')}>
                        Preferiti ({user.stats.favorites})
                    </button>
                    <button style={tabButtonStyle(activeTab === 'playlists')} onClick={() => setActiveTab('playlists')}>
                        Playlist ({user.stats.playlists})
                    </button>
                    <button style={tabButtonStyle(activeTab === 'settings')} onClick={() => setActiveTab('settings')}>
                        Impostazioni
                    </button>
                </div>

                {/* Content */}
                <div style={contentStyle}>
                    {activeTab === 'overview' && (
                        <>
                            {/* Subscription Card */}
                            <div style={subscriptionCardStyle}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                                    <h2 style={cardTitleStyle}>
                                        <span style={{ marginRight: '0.5rem' }}>👑</span>
                                        Abbonamento {user.subscription.plan}
                                    </h2>
                                    <div style={{
                                        padding: '0.5rem 1rem',
                                        background: user.subscription.status === 'active' ? 'rgba(76, 175, 80, 0.2)' : 'rgba(244, 67, 54, 0.2)',
                                        border: `1px solid ${user.subscription.status === 'active' ? '#4CAF50' : '#F44336'}`,
                                        borderRadius: '0.5rem',
                                        fontSize: '0.875rem',
                                        fontWeight: 600,
                                        color: user.subscription.status === 'active' ? '#4CAF50' : '#F44336',
                                        textTransform: 'uppercase'
                                    }}>
                                        {user.subscription.status === 'active' ? 'Attivo' : 'Scaduto'}
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '2rem' }}>
                                    <div>
                                        <div style={{ fontSize: '0.875rem', color: '#B8B8C8', marginBottom: '0.5rem' }}>Piano</div>
                                        <div style={{ fontSize: '1.125rem', fontWeight: 600, color: '#FFFFFF' }}>{user.subscription.plan}</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.875rem', color: '#B8B8C8', marginBottom: '0.5rem' }}>Prossimo rinnovo</div>
                                        <div style={{ fontSize: '1.125rem', fontWeight: 600, color: '#FFFFFF' }}>
                                            {new Date(user.subscription.nextBilling).toLocaleDateString('it-IT')}
                                        </div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.875rem', color: '#B8B8C8', marginBottom: '0.5rem' }}>Prezzo</div>
                                        <div style={{ fontSize: '1.125rem', fontWeight: 600, color: '#FFFFFF' }}>
                                            €{user.subscription.price}/mese
                                        </div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <button style={{
                                        ...buttonStyle('primary'),
                                        background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                                        color: '#0A0A0F'
                                    }}>
                                        Aggiorna piano
                                    </button>
                                    <button style={buttonStyle('secondary')}>
                                        Gestisci abbonamento
                                    </button>
                                </div>
                            </div>

                            {/* Recent Activity */}
                            <div style={cardStyle}>
                                <h2 style={cardTitleStyle}>Video visti di recente</h2>
                                <div style={gridStyle}>
                                    {recentVideos.map((video) => (
                                        <div key={video.id} style={videoCardMiniStyle}>
                                            <div style={thumbnailStyle}>
                                                <img src={video.thumbnail} alt={video.title} style={{
                                                    position: 'absolute',
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover'
                                                }} />
                                                <div style={{
                                                    position: 'absolute',
                                                    bottom: '0.5rem',
                                                    right: '0.5rem',
                                                    padding: '0.25rem 0.5rem',
                                                    background: 'rgba(10, 10, 15, 0.9)',
                                                    borderRadius: '0.25rem',
                                                    fontSize: '0.75rem',
                                                    color: '#FFFFFF'
                                                }}>
                                                    {video.duration}
                                                </div>
                                            </div>
                                            <div style={{ padding: '1rem' }}>
                                                <h4 style={{
                                                    fontSize: '0.875rem',
                                                    fontWeight: 600,
                                                    color: '#FFFFFF',
                                                    marginBottom: '0.5rem',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    whiteSpace: 'nowrap'
                                                }}>
                                                    {video.title}
                                                </h4>
                                                <div style={{ fontSize: '0.75rem', color: '#B8B8C8', marginBottom: '0.25rem' }}>
                                                    {video.creator}
                                                </div>
                                                <div style={{ fontSize: '0.75rem', color: '#7A7A8A' }}>
                                                    Visto {video.watchedAt}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}

                    {activeTab === 'settings' && (
                        <div style={cardStyle}>
                            <h2 style={cardTitleStyle}>Impostazioni account</h2>
                            <p style={{ color: '#B8B8C8', fontSize: '0.875rem' }}>
                                Gestisci le preferenze del tuo account, privacy e notifiche.
                            </p>
                            {/* Add settings form here */}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;