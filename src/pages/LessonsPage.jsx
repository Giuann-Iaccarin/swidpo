import React, { useState } from 'react';

// LessonsPage.jsx - Pagina Videolezioni Completa
const LessonsPage = () => {
    const [enrolledLessons, setEnrolledLessons] = useState([1, 3]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedLevel, setSelectedLevel] = useState('all');
    // eslint-disable-next-line no-unused-vars
    const [isPremiumUser, setIsPremiumUser] = useState(false);

    const categories = [
        { id: 'all', name: 'Tutte le categorie', icon: '📚', count: 48 },
        { id: 'photo', name: 'Fotografia', icon: '📸', count: 12 },
        { id: 'video', name: 'Video Production', icon: '🎬', count: 8 },
        { id: 'business', name: 'Business & Marketing', icon: '💼', count: 15 },
        { id: 'wellness', name: 'Wellness & Lifestyle', icon: '✨', count: 7 },
        { id: 'art', name: 'Arte & Performance', icon: '🎨', count: 6 }
    ];

    const levels = [
        { id: 'all', name: 'Tutti i livelli' },
        { id: 'beginner', name: 'Principiante' },
        { id: 'intermediate', name: 'Intermedio' },
        { id: 'advanced', name: 'Avanzato' }
    ];

    const lessons = [
        {
            id: 1,
            title: 'Fotografia Sensuale: Guida Completa',
            description: 'Impara tutte le tecniche di fotografia artistica sensuale da zero a esperto',
            instructor: 'Sofia Martinez',
            thumbnail: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=225&fit=crop',
            duration: '8h 30m',
            lessons: 24,
            level: 'Intermedio',
            rating: 4.9,
            students: 3421,
            price: 149.99,
            isPremiumOnly: false,
            isNew: true,
            isBestseller: true,
            category: 'photo',
            language: 'Italiano',
            progress: 45
        },
        {
            id: 2,
            title: 'Video Content Creation Pro',
            description: 'Crea contenuti video professionali che catturano l\'attenzione',
            instructor: 'Luna Rose',
            thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=225&fit=crop',
            duration: '6h 15m',
            lessons: 18,
            level: 'Principiante',
            rating: 4.8,
            students: 2156,
            price: 99.99,
            isPremiumOnly: false,
            isNew: false,
            isBestseller: true,
            category: 'video',
            language: 'Italiano',
            progress: 0
        },
        {
            id: 3,
            title: 'Personal Branding per Creator',
            description: 'Costruisci un brand personale forte e monetizza la tua presenza online',
            instructor: 'Emma Luxe',
            thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=225&fit=crop',
            duration: '5h 45m',
            lessons: 15,
            level: 'Intermedio',
            rating: 4.9,
            students: 4523,
            price: 199.99,
            isPremiumOnly: true,
            isNew: false,
            isBestseller: true,
            category: 'business',
            language: 'Italiano',
            progress: 67
        },
        {
            id: 4,
            title: 'Lighting & Mood Photography',
            description: 'Padroneggia l\'arte dell\'illuminazione per creare atmosfere uniche',
            instructor: 'Isabella Noir',
            thumbnail: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=225&fit=crop',
            duration: '4h 20m',
            lessons: 12,
            level: 'Avanzato',
            rating: 5.0,
            students: 1876,
            price: 179.99,
            isPremiumOnly: true,
            isNew: true,
            isBestseller: false,
            category: 'photo',
            language: 'Italiano',
            progress: 0
        },
        {
            id: 5,
            title: 'Social Media Mastery',
            description: 'Strategie avanzate per crescere su Instagram, TikTok e OnlyFans',
            instructor: 'Sofia Martinez',
            thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=225&fit=crop',
            duration: '7h 10m',
            lessons: 20,
            level: 'Intermedio',
            rating: 4.7,
            students: 5234,
            price: 129.99,
            isPremiumOnly: false,
            isNew: false,
            isBestseller: true,
            category: 'business',
            language: 'Italiano',
            progress: 0
        },
        {
            id: 6,
            title: 'Performance Art & Expression',
            description: 'Esprimi te stessa attraverso l\'arte della performance sensuale',
            instructor: 'Luna Rose',
            thumbnail: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=225&fit=crop',
            duration: '3h 30m',
            lessons: 10,
            level: 'Principiante',
            rating: 4.8,
            students: 987,
            price: 79.99,
            isPremiumOnly: false,
            isNew: true,
            isBestseller: false,
            category: 'art',
            language: 'Italiano',
            progress: 0
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

    const headerStyle = {
        marginBottom: '3rem',
        textAlign: 'center'
    };

    const titleStyle = {
        fontSize: '3rem',
        fontWeight: 900,
        background: 'linear-gradient(135deg, #FFFFFF 0%, #E91E63 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        marginBottom: '1rem',
        fontFamily: '"Playfair Display", serif'
    };

    const subtitleStyle = {
        fontSize: '1.125rem',
        color: '#B8B8C8',
        maxWidth: '700px',
        margin: '0 auto',
        fontFamily: '"Inter", sans-serif'
    };

    const statsBarStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1.5rem',
        marginBottom: '3rem'
    };

    const statCardStyle = {
        background: 'rgba(26, 26, 40, 0.4)',
        borderRadius: '1rem',
        padding: '1.5rem',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        textAlign: 'center'
    };

    const statValueStyle = {
        fontSize: '2rem',
        fontWeight: 700,
        color: '#E91E63',
        marginBottom: '0.5rem',
        fontFamily: '"Inter", sans-serif'
    };

    const statLabelStyle = {
        fontSize: '0.875rem',
        color: '#B8B8C8',
        fontFamily: '"Inter", sans-serif'
    };

    const filtersBarStyle = {
        background: 'rgba(26, 26, 40, 0.4)',
        borderRadius: '1rem',
        padding: '1.5rem',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        marginBottom: '2rem'
    };

    const filtersRowStyle = {
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        flexWrap: 'wrap'
    };

    const filterLabelStyle = {
        fontSize: '0.875rem',
        fontWeight: 600,
        color: '#FFFFFF',
        fontFamily: '"Inter", sans-serif'
    };

    const selectStyle = {
        padding: '0.75rem 1rem',
        background: 'rgba(255, 255, 255, 0.05)',
        border: '2px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '0.75rem',
        color: '#FFFFFF',
        fontSize: '0.875rem',
        outline: 'none',
        cursor: 'pointer',
        fontFamily: '"Inter", sans-serif',
        minWidth: '180px'
    };

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
        whiteSpace: 'nowrap',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
    });

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '2rem'
    };

    const LessonCardMini = ({ lesson }) => {
        const isEnrolled = enrolledLessons.includes(lesson.id);
        const progress = isEnrolled ? lesson.progress : 0;

        return (
            <div style={{
                background: 'rgba(26, 26, 40, 0.4)',
                borderRadius: '1rem',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
            }}>
                {/* Thumbnail */}
                <div style={{ position: 'relative', paddingBottom: '56.25%' }}>
                    <img src={lesson.thumbnail} alt={lesson.title} style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }} />
                    {lesson.isNew && (
                        <div style={{
                            position: 'absolute',
                            top: '1rem',
                            left: '1rem',
                            padding: '0.25rem 0.75rem',
                            background: '#4CAF50',
                            borderRadius: '0.5rem',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            color: '#FFFFFF',
                            textTransform: 'uppercase'
                        }}>
                            Nuovo
                        </div>
                    )}
                    {lesson.isBestseller && (
                        <div style={{
                            position: 'absolute',
                            top: '1rem',
                            right: '1rem',
                            padding: '0.25rem 0.75rem',
                            background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                            borderRadius: '0.5rem',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            color: '#0A0A0F',
                            textTransform: 'uppercase'
                        }}>
                            Best Seller
                        </div>
                    )}
                    <div style={{
                        position: 'absolute',
                        bottom: '1rem',
                        right: '1rem',
                        padding: '0.25rem 0.75rem',
                        background: 'rgba(10, 10, 15, 0.9)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '0.5rem',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: '#FFFFFF'
                    }}>
                        {lesson.level}
                    </div>
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{
                        fontSize: '0.75rem',
                        color: '#E91E63',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                        marginBottom: '0.5rem'
                    }}>
                        {categories.find(c => c.id === lesson.category)?.name}
                    </div>

                    <h3 style={{
                        fontSize: '1.125rem',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        marginBottom: '0.75rem',
                        lineHeight: 1.3,
                        fontFamily: '"Playfair Display", serif'
                    }}>
                        {lesson.title}
                    </h3>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.875rem',
                        color: '#B8B8C8',
                        marginBottom: '1rem'
                    }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                        {lesson.instructor}
                    </div>

                    <p style={{
                        fontSize: '0.875rem',
                        color: '#B8B8C8',
                        marginBottom: '1rem',
                        lineHeight: 1.6,
                        flex: 1
                    }}>
                        {lesson.description}
                    </p>

                    {/* Stats */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '0.75rem',
                        padding: '1rem',
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: '0.5rem',
                        marginBottom: '1rem',
                        fontSize: '0.75rem',
                        color: '#B8B8C8'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                            {lesson.duration}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                            </svg>
                            {lesson.lessons} lezioni
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                            {lesson.students.toLocaleString()}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" strokeWidth="2">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                            {lesson.rating}
                        </div>
                    </div>

                    {/* Progress Bar (if enrolled) */}
                    {isEnrolled && (
                        <div style={{ marginBottom: '1rem' }}>
                            <div style={{
                                width: '100%',
                                height: '6px',
                                background: 'rgba(255, 255, 255, 0.1)',
                                borderRadius: '3px',
                                overflow: 'hidden',
                                marginBottom: '0.5rem'
                            }}>
                                <div style={{
                                    height: '100%',
                                    background: 'linear-gradient(90deg, #E91E63 0%, #9C27B0 100%)',
                                    width: `${progress}%`,
                                    transition: 'width 0.3s ease'
                                }} />
                            </div>
                            <div style={{ fontSize: '0.75rem', color: '#B8B8C8' }}>
                                {progress}% completato
                            </div>
                        </div>
                    )}

                    {/* Footer */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingTop: '1rem',
                        borderTop: '1px solid rgba(255, 255, 255, 0.08)'
                    }}>
                        {!isEnrolled && (
                            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#FFFFFF' }}>
                                {lesson.isPremiumOnly && !isPremiumUser ? (
                                    <span style={{ fontSize: '1rem', color: '#9C27B0' }}>Solo VIP</span>
                                ) : lesson.price === 0 ? (
                                    <span style={{ fontSize: '1rem', color: '#4CAF50' }}>Gratuito</span>
                                ) : (
                                    `€${lesson.price.toFixed(2)}`
                                )}
                            </div>
                        )}

                        <button
                            onClick={() => {
                                if (!isEnrolled) {
                                    setEnrolledLessons([...enrolledLessons, lesson.id]);
                                }
                            }}
                            style={{
                                padding: '0.75rem 1.5rem',
                                background: isEnrolled ? 'rgba(76, 175, 80, 0.2)' : 'linear-gradient(135deg, #E91E63 0%, #9C27B0 100%)',
                                border: isEnrolled ? '1px solid #4CAF50' : 'none',
                                borderRadius: '0.75rem',
                                color: '#FFFFFF',
                                fontSize: '0.875rem',
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                marginLeft: 'auto'
                            }}
                        >
                            {isEnrolled ? 'Continua' : 'Iscriviti'}
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    const filteredLessons = lessons.filter(l => {
        if (selectedCategory !== 'all' && l.category !== selectedCategory) return false;
        if (selectedLevel !== 'all' && l.level.toLowerCase() !== selectedLevel) return false;
        return true;
    });

    return (
        <div style={pageStyle}>
            <div style={containerStyle}>
                {/* Header */}
                <div style={headerStyle}>
                    <h1 style={titleStyle}>Videolezioni Premium</h1>
                    <p style={subtitleStyle}>
                        Impara dai migliori professionisti del settore con corsi esclusivi e certificati
                    </p>
                </div>

                {/* Stats */}
                <div style={statsBarStyle}>
                    <div style={statCardStyle}>
                        <div style={statValueStyle}>48</div>
                        <div style={statLabelStyle}>Corsi disponibili</div>
                    </div>
                    <div style={statCardStyle}>
                        <div style={statValueStyle}>15K+</div>
                        <div style={statLabelStyle}>Studenti attivi</div>
                    </div>
                    <div style={statCardStyle}>
                        <div style={statValueStyle}>4.8</div>
                        <div style={statLabelStyle}>Rating medio</div>
                    </div>
                    <div style={statCardStyle}>
                        <div style={statValueStyle}>120h</div>
                        <div style={statLabelStyle}>Contenuti totali</div>
                    </div>
                </div>

                {/* Filters */}
                <div style={filtersBarStyle}>
                    <div style={filtersRowStyle}>
                        <span style={filterLabelStyle}>Filtra per:</span>
                        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} style={selectStyle}>
                            {categories.map(cat => (
                                <option key={cat.id} value={cat.id} style={{ background: '#1A1A28' }}>
                                    {cat.icon} {cat.name} ({cat.count})
                                </option>
                            ))}
                        </select>
                        <select value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)} style={selectStyle}>
                            {levels.map(level => (
                                <option key={level.id} value={level.id} style={{ background: '#1A1A28' }}>
                                    {level.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Tabs */}
                <div style={tabsStyle}>
                    <button style={tabButtonStyle(true)}>
                        <span>📚</span>
                        Tutti i corsi
                    </button>
                    <button style={tabButtonStyle(false)}>
                        <span>🎯</span>
                        I miei corsi ({enrolledLessons.length})
                    </button>
                    <button style={tabButtonStyle(false)}>
                        <span>⭐</span>
                        Preferiti
                    </button>
                </div>

                {/* Lessons Grid */}
                <div style={gridStyle}>
                    {filteredLessons.map((lesson) => (
                        <LessonCardMini key={lesson.id} lesson={lesson} />
                    ))}
                </div>

                {filteredLessons.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '4rem', color: '#7A7A8A' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
                        <p>Nessun corso trovato con i filtri selezionati</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LessonsPage;