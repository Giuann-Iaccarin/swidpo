import React from 'react';

const Logo = ({ className = "h-9 md:h-11" }) => {
    return (
        <svg
            // viewBox stretta sul testo per eliminare spazi vuoti e ingrandire l'area visiva
            viewBox="0 5 310 85"
            xmlns="http://www.w3.org/2000/svg"
            className={`${className} w-auto`}
            preserveAspectRatio="xMidYMid meet"
        >
            <text
                x="0"
                y="75"
                fill="white"
                style={{
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    fontWeight: '900', // Font ancora più spesso per richiamare lo screenshot
                    fontSize: '90px',
                    letterSpacing: '-0.05em', // Lettere più vicine come nel logo originale
                }}
            >
                Swidpo
            </text>

            {/* Opzionale: se vuoi mantenere il tocco di viola dello screenshot originale, 
          puoi decommentare il cerchio qui sotto per colorare solo il puntino della 'i' */}
            {/* <circle cx="158" cy="18" r="9" fill="#9333ea" /> */}
        </svg>
    );
};

export default Logo;