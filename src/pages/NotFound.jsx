import { Link } from "react-router-dom";
import Logo from "../components/Logo";

function NotFound() {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
            <div className="max-w-3xl text-center">

                {/* Logo */}
                <div className="flex justify-center mb-8">
                    <Logo className="h-12 sm:h-16 md:h-20 lg:h-24 xl:h-32 w-auto text-orange-500" />
                </div>

                {/* 404 */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-tight mb-4">
                    404
                </h1>

                {/* Headline */}
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
                    Questa pagina non esiste
                </h2>

                {/* Copy */}
                <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-10 leading-relaxed">
                    Hai cliccato qualcosa di interessante… ma qui non c’è nulla.
                    Forse il contenuto è stato rimosso, spostato o non è mai esistito.
                </p>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg bg-orange-500 text-black font-semibold hover:bg-orange-400 transition text-sm sm:text-base md:text-lg"
                    >
                        Torna alla Home
                    </Link>

                    <Link
                        to="/videos"
                        className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg border border-gray-700 text-white hover:border-orange-500 hover:text-orange-500 transition text-sm sm:text-base md:text-lg"
                    >
                        Scopri i contenuti
                    </Link>
                </div>

                {/* Footer note */}
                <p className="mt-12 text-xs sm:text-sm text-gray-600">
                    Errore di navigazione · Swidpo
                </p>
            </div>
        </div>
    );
}

export default NotFound;
