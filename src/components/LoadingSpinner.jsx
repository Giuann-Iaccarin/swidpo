import React, { useState, useEffect } from 'react';

// LoadingSpinner.jsx - Componente Loading
export const LoadingSpinner = ({ size = 'md', color = '#E91E63', fullScreen = false }) => {
    const sizes = {
        sm: '24px',
        md: '48px',
        lg: '64px',
        xl: '96px'
    };

    const containerStyle = fullScreen ? {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(10, 10, 15, 0.95)',
        backdropFilter: 'blur(10px)',
        zIndex: 9999
    } : {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
    };

    const spinnerSize = sizes[size];

    return (
        <div style={containerStyle}>
            <div style={{
                width: spinnerSize,
                height: spinnerSize,
                border: `4px solid rgba(233, 30, 99, 0.1)`,
                borderTop: `4px solid ${color}`,
                borderRadius: '50%',
                animation: 'spin 0.8s linear infinite'
            }}>
                <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
            </div>
        </div>
    );
};

// PulseLoader.jsx - Loading con pulsazione
export const PulseLoader = ({ color = '#E91E63' }) => {
    return (
        <div style={{
            display: 'flex',
            gap: '0.5rem',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {[0, 1, 2].map((i) => (
                <div
                    key={i}
                    style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        background: color,
                        animation: `pulse 1.4s ease-in-out ${i * 0.2}s infinite`
                    }}
                />
            ))}
            <style>{`
        @keyframes pulse {
          0%, 80%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          40% {
            opacity: 1;
            transform: scale(1.3);
          }
        }
      `}</style>
        </div>
    );
};

// SkeletonLoader.jsx - Skeleton Loading
export const SkeletonLoader = ({ width = '100%', height = '20px', borderRadius = '0.5rem' }) => {
    return (
        <div style={{
            width,
            height,
            borderRadius,
            background: 'linear-gradient(90deg, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite'
        }}>
            <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
        </div>
    );
};

// Toast.jsx - Notifiche Toast
export const Toast = ({ message, type = 'info', duration = 3000, onClose }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => onClose?.(), 300);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    const types = {
        success: {
            background: 'rgba(76, 175, 80, 0.95)',
            icon: '✓',
            color: '#FFFFFF'
        },
        error: {
            background: 'rgba(244, 67, 54, 0.95)',
            icon: '✕',
            color: '#FFFFFF'
        },
        warning: {
            background: 'rgba(255, 152, 0, 0.95)',
            icon: '⚠',
            color: '#FFFFFF'
        },
        info: {
            background: 'rgba(233, 30, 99, 0.95)',
            icon: 'ℹ',
            color: '#FFFFFF'
        }
    };

    const toastStyle = {
        position: 'fixed',
        top: '2rem',
        right: '2rem',
        minWidth: '300px',
        padding: '1rem 1.5rem',
        background: types[type].background,
        backdropFilter: 'blur(10px)',
        borderRadius: '0.75rem',
        color: types[type].color,
        fontSize: '0.875rem',
        fontWeight: 500,
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
        zIndex: 10000,
        animation: isVisible ? 'slideIn 0.3s ease-out' : 'slideOut 0.3s ease-out',
        fontFamily: '"Inter", sans-serif'
    };

    const iconStyle = {
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1rem',
        flexShrink: 0
    };

    return (
        <div style={toastStyle}>
            <div style={iconStyle}>{types[type].icon}</div>
            <div style={{ flex: 1 }}>{message}</div>
            <button
                onClick={() => {
                    setIsVisible(false);
                    setTimeout(() => onClose?.(), 300);
                }}
                style={{
                    background: 'transparent',
                    border: 'none',
                    color: types[type].color,
                    cursor: 'pointer',
                    fontSize: '1.25rem',
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0.7,
                    transition: 'opacity 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
            >
                ×
            </button>

            <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideOut {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }
      `}</style>
        </div>
    );
};

// ToastContainer - Per gestire multiple toast
export const ToastContainer = () => {
    const [toasts, setToasts] = useState([]);

    // Funzione per aggiungere toast (da esporre via context o prop)
    // eslint-disable-next-line no-unused-vars
    const addToast = (message, type = 'info', duration = 3000) => {
        const id = Date.now();
        setToasts(prev => [...prev, { id, message, type, duration }]);
    };

    const removeToast = (id) => {
        setToasts(prev => prev.filter(t => t.id !== id));
    };

    return (
        <div style={{
            position: 'fixed',
            top: '2rem',
            right: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            zIndex: 10000
        }}>
            {toasts.map((toast) => (
                <Toast
                    key={toast.id}
                    message={toast.message}
                    type={toast.type}
                    duration={toast.duration}
                    onClose={() => removeToast(toast.id)}
                />
            ))}
        </div>
    );
};

// ProgressBar.jsx - Barra di progresso
export const ProgressBar = ({
    progress = 0,
    color = '#E91E63',
    height = '6px',
    showLabel = false,
    animated = true
}) => {
    const containerStyle = {
        width: '100%',
        height,
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: height,
        overflow: 'hidden',
        position: 'relative'
    };

    const fillStyle = {
        height: '100%',
        width: `${Math.min(100, Math.max(0, progress))}%`,
        background: `linear-gradient(90deg, ${color} 0%, ${color}dd 100%)`,
        borderRadius: height,
        transition: animated ? 'width 0.3s ease' : 'none',
        position: 'relative',
        overflow: 'hidden'
    };

    const shimmerStyle = animated ? {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
        animation: 'shimmerProgress 2s infinite'
    } : {};

    return (
        <div>
            <div style={containerStyle}>
                <div style={fillStyle}>
                    {animated && <div style={shimmerStyle} />}
                </div>
            </div>
            {showLabel && (
                <div style={{
                    marginTop: '0.5rem',
                    fontSize: '0.75rem',
                    color: '#B8B8C8',
                    textAlign: 'right',
                    fontFamily: '"Inter", sans-serif'
                }}>
                    {Math.round(progress)}%
                </div>
            )}

            <style>{`
        @keyframes shimmerProgress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
        </div>
    );
};

// Demo Component per testare tutti i loaders
const LoadingDemo = () => {
    const [toasts, setToasts] = useState([]);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => (prev >= 100 ? 0 : prev + 1));
        }, 100);
        return () => clearInterval(interval);
    }, []);

    const addToast = (type) => {
        const messages = {
            success: 'Operazione completata con successo!',
            error: 'Si è verificato un errore',
            warning: 'Attenzione: verifica i dati inseriti',
            info: 'Nuova notifica ricevuta'
        };

        const id = Date.now();
        setToasts(prev => [...prev, { id, message: messages[type], type }]);
    };

    const removeToast = (id) => {
        setToasts(prev => prev.filter(t => t.id !== id));
    };

    return (
        <div style={{
            minHeight: '100vh',
            background: '#0A0A0F',
            padding: '4rem 2rem'
        }}>
            <div style={{
                maxWidth: '1000px',
                margin: '0 auto'
            }}>
                <h1 style={{
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    marginBottom: '3rem',
                    fontFamily: '"Playfair Display", serif'
                }}>
                    Loading & Notification Components
                </h1>

                {/* Loading Spinners */}
                <div style={{
                    background: 'rgba(26, 26, 40, 0.4)',
                    borderRadius: '1rem',
                    padding: '2rem',
                    marginBottom: '2rem',
                    border: '1px solid rgba(255, 255, 255, 0.06)'
                }}>
                    <h2 style={{
                        fontSize: '1.5rem',
                        color: '#FFFFFF',
                        marginBottom: '1.5rem',
                        fontFamily: '"Playfair Display", serif'
                    }}>
                        Loading Spinners
                    </h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '2rem',
                        textAlign: 'center'
                    }}>
                        <div>
                            <LoadingSpinner size="sm" />
                            <div style={{ color: '#B8B8C8', fontSize: '0.875rem', marginTop: '1rem' }}>Small</div>
                        </div>
                        <div>
                            <LoadingSpinner size="md" />
                            <div style={{ color: '#B8B8C8', fontSize: '0.875rem', marginTop: '1rem' }}>Medium</div>
                        </div>
                        <div>
                            <LoadingSpinner size="lg" />
                            <div style={{ color: '#B8B8C8', fontSize: '0.875rem', marginTop: '1rem' }}>Large</div>
                        </div>
                        <div>
                            <PulseLoader />
                            <div style={{ color: '#B8B8C8', fontSize: '0.875rem', marginTop: '1rem' }}>Pulse</div>
                        </div>
                    </div>
                </div>

                {/* Skeleton Loaders */}
                <div style={{
                    background: 'rgba(26, 26, 40, 0.4)',
                    borderRadius: '1rem',
                    padding: '2rem',
                    marginBottom: '2rem',
                    border: '1px solid rgba(255, 255, 255, 0.06)'
                }}>
                    <h2 style={{
                        fontSize: '1.5rem',
                        color: '#FFFFFF',
                        marginBottom: '1.5rem',
                        fontFamily: '"Playfair Display", serif'
                    }}>
                        Skeleton Loaders
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <SkeletonLoader height="60px" borderRadius="0.75rem" />
                        <SkeletonLoader height="40px" width="70%" />
                        <SkeletonLoader height="20px" width="50%" />
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                            <SkeletonLoader height="150px" borderRadius="0.75rem" />
                            <SkeletonLoader height="150px" borderRadius="0.75rem" />
                            <SkeletonLoader height="150px" borderRadius="0.75rem" />
                        </div>
                    </div>
                </div>

                {/* Progress Bar */}
                <div style={{
                    background: 'rgba(26, 26, 40, 0.4)',
                    borderRadius: '1rem',
                    padding: '2rem',
                    marginBottom: '2rem',
                    border: '1px solid rgba(255, 255, 255, 0.06)'
                }}>
                    <h2 style={{
                        fontSize: '1.5rem',
                        color: '#FFFFFF',
                        marginBottom: '1.5rem',
                        fontFamily: '"Playfair Display", serif'
                    }}>
                        Progress Bar
                    </h2>
                    <ProgressBar progress={progress} showLabel animated />
                    <div style={{ marginTop: '1rem' }}>
                        <ProgressBar progress={75} color="#4CAF50" height="10px" />
                    </div>
                </div>

                {/* Toast Notifications */}
                <div style={{
                    background: 'rgba(26, 26, 40, 0.4)',
                    borderRadius: '1rem',
                    padding: '2rem',
                    border: '1px solid rgba(255, 255, 255, 0.06)'
                }}>
                    <h2 style={{
                        fontSize: '1.5rem',
                        color: '#FFFFFF',
                        marginBottom: '1.5rem',
                        fontFamily: '"Playfair Display", serif'
                    }}>
                        Toast Notifications
                    </h2>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <button
                            onClick={() => addToast('success')}
                            style={{
                                padding: '0.75rem 1.5rem',
                                background: '#4CAF50',
                                color: '#FFFFFF',
                                border: 'none',
                                borderRadius: '0.5rem',
                                cursor: 'pointer',
                                fontWeight: 600
                            }}
                        >
                            Success Toast
                        </button>
                        <button
                            onClick={() => addToast('error')}
                            style={{
                                padding: '0.75rem 1.5rem',
                                background: '#F44336',
                                color: '#FFFFFF',
                                border: 'none',
                                borderRadius: '0.5rem',
                                cursor: 'pointer',
                                fontWeight: 600
                            }}
                        >
                            Error Toast
                        </button>
                        <button
                            onClick={() => addToast('warning')}
                            style={{
                                padding: '0.75rem 1.5rem',
                                background: '#FF9800',
                                color: '#FFFFFF',
                                border: 'none',
                                borderRadius: '0.5rem',
                                cursor: 'pointer',
                                fontWeight: 600
                            }}
                        >
                            Warning Toast
                        </button>
                        <button
                            onClick={() => addToast('info')}
                            style={{
                                padding: '0.75rem 1.5rem',
                                background: '#E91E63',
                                color: '#FFFFFF',
                                border: 'none',
                                borderRadius: '0.5rem',
                                cursor: 'pointer',
                                fontWeight: 600
                            }}
                        >
                            Info Toast
                        </button>
                    </div>
                </div>

                {/* Toast Container */}
                <div style={{
                    position: 'fixed',
                    top: '2rem',
                    right: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    zIndex: 10000
                }}>
                    {toasts.map((toast) => (
                        <Toast
                            key={toast.id}
                            message={toast.message}
                            type={toast.type}
                            duration={3000}
                            onClose={() => removeToast(toast.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LoadingDemo;