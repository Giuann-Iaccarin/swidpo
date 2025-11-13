import React, { useState } from 'react';

// ShopPage.jsx - Pagina Shop Completa
const ShopPage = () => {
    const [cart, setCart] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [priceRange, setPriceRange] = useState([0, 500]);
    const [sortBy, setSortBy] = useState('popular');

    const categories = [
        { id: 'all', name: 'Tutti i prodotti', icon: '🛍️' },
        { id: 'digital', name: 'Contenuti digitali', icon: '💎' },
        { id: 'physical', name: 'Prodotti fisici', icon: '📦' },
        { id: 'courses', name: 'Corsi & Guide', icon: '📚' },
        { id: 'membership', name: 'Abbonamenti', icon: '👑' }
    ];

    const products = [
        {
            id: 1,
            name: 'Photoset Premium Esclusivo',
            description: 'Collezione di 50+ foto ad alta risoluzione con contenuti inediti',
            price: 29.99,
            originalPrice: 49.99,
            discount: 40,
            images: [
                'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=400&fit=crop'
            ],
            category: 'digital',
            rating: 4.9,
            reviews: 234,
            inStock: true,
            isPremiumOnly: false,
            isNew: true,
            isBestseller: true,
            tags: ['foto', 'hd', 'esclusivo']
        },
        {
            id: 2,
            name: 'Video Bundle VIP - 10 Contenuti',
            description: 'Pacchetto esclusivo con i 10 video più richiesti della settimana',
            price: 79.99,
            originalPrice: 129.99,
            discount: 38,
            images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop'],
            category: 'digital',
            rating: 5.0,
            reviews: 456,
            inStock: true,
            isPremiumOnly: true,
            isNew: false,
            isBestseller: true,
            tags: ['video', '4k', 'bundle']
        },
        {
            id: 3,
            name: 'Corso: Fotografia Sensuale',
            description: 'Corso completo di 8 ore su tecniche di fotografia artistica',
            price: 149.99,
            originalPrice: null,
            discount: null,
            images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop'],
            category: 'courses',
            rating: 4.8,
            reviews: 189,
            inStock: true,
            isPremiumOnly: false,
            isNew: true,
            isBestseller: false,
            tags: ['corso', 'fotografia', 'professionale']
        },
        {
            id: 4,
            name: 'Calendario Premium 2024',
            description: 'Calendario fotografico esclusivo con 12 mesi di contenuti artistici',
            price: 39.99,
            originalPrice: null,
            discount: null,
            images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop'],
            category: 'physical',
            rating: 4.7,
            reviews: 98,
            inStock: true,
            isPremiumOnly: false,
            isNew: false,
            isBestseller: false,
            tags: ['fisico', 'calendario', 'arte']
        },
        {
            id: 5,
            name: 'Set Lingerie Luxury',
            description: 'Set di lingerie premium come visto nei nostri contenuti esclusivi',
            price: 89.99,
            originalPrice: 129.99,
            discount: 31,
            images: ['https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=400&fit=crop'],
            category: 'physical',
            rating: 4.6,
            reviews: 67,
            inStock: true,
            isPremiumOnly: true,
            isNew: false,
            isBestseller: false,
            tags: ['lingerie', 'luxury', 'fashion']
        },
        {
            id: 6,
            name: 'Guida: Content Creation Pro',
            description: 'Guida completa per diventare content creator di successo',
            price: 59.99,
            originalPrice: null,
            discount: null,
            images: ['https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop'],
            category: 'courses',
            rating: 4.9,
            reviews: 345,
            inStock: true,
            isPremiumOnly: false,
            isNew: true,
            isBestseller: true,
            tags: ['guida', 'business', 'social']
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
        marginBottom: '3rem'
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
        fontFamily: '"Inter", sans-serif'
    };

    const layoutStyle = {
        display: 'grid',
        gridTemplateColumns: '280px 1fr',
        gap: '2rem',
        alignItems: 'start'
    };

    const sidebarStyle = {
        position: 'sticky',
        top: '100px',
        background: 'rgba(26, 26, 40, 0.4)',
        borderRadius: '1rem',
        padding: '1.5rem',
        border: '1px solid rgba(255, 255, 255, 0.06)'
    };

    const sidebarTitleStyle = {
        fontSize: '1.125rem',
        fontWeight: 700,
        color: '#FFFFFF',
        marginBottom: '1rem',
        fontFamily: '"Playfair Display", serif'
    };

    const categoryButtonStyle = (isActive) => ({
        width: '100%',
        padding: '0.875rem 1rem',
        background: isActive ? 'rgba(233, 30, 99, 0.2)' : 'transparent',
        border: isActive ? '2px solid #E91E63' : '2px solid transparent',
        borderRadius: '0.75rem',
        color: isActive ? '#E91E63' : '#B8B8C8',
        fontSize: '0.875rem',
        fontWeight: 500,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        fontFamily: '"Inter", sans-serif',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        marginBottom: '0.5rem',
        textAlign: 'left'
    });

    const filterSectionStyle = {
        marginTop: '2rem',
        paddingTop: '1.5rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)'
    };

    const priceInputStyle = {
        width: '100%',
        padding: '0.75rem',
        background: 'rgba(255, 255, 255, 0.05)',
        border: '2px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '0.5rem',
        color: '#FFFFFF',
        fontSize: '0.875rem',
        outline: 'none',
        fontFamily: '"Inter", sans-serif'
    };

    const mainContentStyle = {
        minHeight: '800px'
    };

    const controlBarStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '2rem',
        padding: '1rem 1.5rem',
        background: 'rgba(26, 26, 40, 0.4)',
        borderRadius: '0.75rem',
        border: '1px solid rgba(255, 255, 255, 0.06)'
    };

    const resultsTextStyle = {
        fontSize: '0.875rem',
        color: '#B8B8C8',
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
        fontFamily: '"Inter", sans-serif'
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '2rem'
    };

    const cartFloatingStyle = {
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #E91E63 0%, #9C27B0 100%)',
        boxShadow: '0 8px 32px rgba(233, 30, 99, 0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        zIndex: 1000
    };

    const cartBadgeStyle = {
        position: 'absolute',
        top: '-5px',
        right: '-5px',
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        background: '#FFD700',
        color: '#0A0A0F',
        fontSize: '0.75rem',
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    // Placeholder ProductCard
    const ProductCardMini = ({ product }) => (
        <div style={{
            background: 'rgba(26, 26, 40, 0.4)',
            borderRadius: '1rem',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
        }}>
            <div style={{ position: 'relative', paddingBottom: '100%' }}>
                <img src={product.images[0]} alt={product.name} style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }} />
                {product.isNew && (
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
                {product.isBestseller && (
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
                {product.discount && (
                    <div style={{
                        position: 'absolute',
                        bottom: '1rem',
                        left: '1rem',
                        padding: '0.25rem 0.75rem',
                        background: '#F44336',
                        borderRadius: '0.5rem',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: '#FFFFFF'
                    }}>
                        -{product.discount}%
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
                    {product.name}
                </h3>
                <p style={{
                    fontSize: '0.875rem',
                    color: '#B8B8C8',
                    marginBottom: '1rem',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                }}>
                    {product.description}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex' }}>
                        {[1, 2, 3, 4, 5].map((i) => (
                            <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i <= Math.floor(product.rating) ? '#FFD700' : 'none'} stroke="#FFD700" strokeWidth="2">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                        ))}
                    </div>
                    <span style={{ fontSize: '0.75rem', color: '#7A7A8A' }}>({product.reviews})</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '1.75rem', fontWeight: 700, color: '#FFFFFF' }}>
                        €{product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                        <span style={{ fontSize: '1rem', color: '#7A7A8A', textDecoration: 'line-through' }}>
                            €{product.originalPrice.toFixed(2)}
                        </span>
                    )}
                </div>
                <button
                    onClick={() => setCart([...cart, product])}
                    style={{
                        width: '100%',
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
                >
                    Aggiungi al carrello
                </button>
            </div>
        </div>
    );

    const filteredProducts = products.filter(p => {
        if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
        if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
        return true;
    });

    return (
        <div style={pageStyle}>
            <div style={containerStyle}>
                {/* Header */}
                <div style={headerStyle}>
                    <h1 style={titleStyle}>Shop Esclusivo</h1>
                    <p style={subtitleStyle}>
                        Scopri la nostra collezione di contenuti premium, corsi e prodotti esclusivi
                    </p>
                </div>

                {/* Layout */}
                <div style={layoutStyle}>
                    {/* Sidebar */}
                    <aside style={sidebarStyle}>
                        <h3 style={sidebarTitleStyle}>Categorie</h3>
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                style={categoryButtonStyle(selectedCategory === cat.id)}
                                onMouseEnter={(e) => {
                                    if (selectedCategory !== cat.id) {
                                        e.currentTarget.style.background = 'rgba(233, 30, 99, 0.1)';
                                        e.currentTarget.style.borderColor = '#E91E63';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (selectedCategory !== cat.id) {
                                        e.currentTarget.style.background = 'transparent';
                                        e.currentTarget.style.borderColor = 'transparent';
                                    }
                                }}
                            >
                                <span style={{ fontSize: '1.25rem' }}>{cat.icon}</span>
                                {cat.name}
                            </button>
                        ))}

                        {/* Price Filter */}
                        <div style={filterSectionStyle}>
                            <h4 style={{ ...sidebarTitleStyle, marginBottom: '1rem' }}>Fascia di prezzo</h4>
                            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem' }}>
                                <input
                                    type="number"
                                    value={priceRange[0]}
                                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                                    style={priceInputStyle}
                                    placeholder="Min"
                                />
                                <input
                                    type="number"
                                    value={priceRange[1]}
                                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                                    style={priceInputStyle}
                                    placeholder="Max"
                                />
                            </div>
                            <div style={{ fontSize: '0.75rem', color: '#7A7A8A' }}>
                                €{priceRange[0]} - €{priceRange[1]}
                            </div>
                        </div>

                        {/* Reset Filters */}
                        <button
                            onClick={() => {
                                setSelectedCategory('all');
                                setPriceRange([0, 500]);
                            }}
                            style={{
                                width: '100%',
                                marginTop: '1.5rem',
                                padding: '0.875rem',
                                background: 'transparent',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '0.75rem',
                                color: '#B8B8C8',
                                fontSize: '0.875rem',
                                fontWeight: 500,
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = '#E91E63';
                                e.currentTarget.style.color = '#E91E63';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                e.currentTarget.style.color = '#B8B8C8';
                            }}
                        >
                            Resetta filtri
                        </button>
                    </aside>

                    {/* Main Content */}
                    <main style={mainContentStyle}>
                        {/* Control Bar */}
                        <div style={controlBarStyle}>
                            <div style={resultsTextStyle}>
                                {filteredProducts.length} prodotti trovati
                            </div>
                            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} style={selectStyle}>
                                <option value="popular" style={{ background: '#1A1A28' }}>Più popolari</option>
                                <option value="newest" style={{ background: '#1A1A28' }}>Più recenti</option>
                                <option value="price-asc" style={{ background: '#1A1A28' }}>Prezzo: basso-alto</option>
                                <option value="price-desc" style={{ background: '#1A1A28' }}>Prezzo: alto-basso</option>
                                <option value="rating" style={{ background: '#1A1A28' }}>Migliori recensioni</option>
                            </select>
                        </div>

                        {/* Products Grid */}
                        <div style={gridStyle}>
                            {filteredProducts.map((product) => (
                                <ProductCardMini key={product.id} product={product} />
                            ))}
                        </div>

                        {filteredProducts.length === 0 && (
                            <div style={{ textAlign: 'center', padding: '4rem', color: '#7A7A8A' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
                                <p>Nessun prodotto trovato con i filtri selezionati</p>
                            </div>
                        )}
                    </main>
                </div>
            </div>

            {/* Floating Cart */}
            {cart.length > 0 && (
                <div
                    style={cartFloatingStyle}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                        e.currentTarget.style.boxShadow = '0 12px 48px rgba(233, 30, 99, 0.8)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0 8px 32px rgba(233, 30, 99, 0.6)';
                    }}
                >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <circle cx="9" cy="21" r="1" />
                        <circle cx="20" cy="21" r="1" />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                    <div style={cartBadgeStyle}>{cart.length}</div>
                </div>
            )}
        </div>
    );
};

export default ShopPage;