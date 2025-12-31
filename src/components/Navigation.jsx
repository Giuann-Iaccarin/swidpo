import { Link } from 'react-router-dom'
import { Search, Crown } from 'lucide-react'
import Logo from './Logo'

function Navigation() {
    return (
        <nav className="fixed top-0 z-50 w-full bg-black/80 backdrop-blur-xl border-b border-white/5">
            <div className="mx-auto flex h-[70px] max-w-[1600px] items-center justify-between px-6">

                {/* LOGO */}
                <Link to="/" className="flex items-center gap-3 bg-transparent">
                    <Logo />
                    <span className="sr-only">Swidpo</span>
                </Link>

                {/* SEARCH */}
                <div className="hidden md:flex flex-1 max-w-md mx-8">
                    <div className="relative w-full">
                        <Search
                            size={16}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
                        />
                        <input
                            type="text"
                            placeholder="Search videos, creators..."
                            className="
                w-full rounded-full bg-white/5
                py-2.5 pl-9 pr-4 text-sm text-white
                placeholder-white/40
                outline-none
                focus:bg-white/10
                focus:ring-1 focus:ring-pink-500/40
              "
                        />
                    </div>
                </div>

                {/* NAV ACTIONS */}
                <div className="flex items-center gap-6">

                    <Link
                        to="/videos/1"
                        className="text-sm font-medium text-white/80 hover:text-white transition"
                    >
                        Videos
                    </Link>

                    <Link
                        to="/shop"
                        className="text-sm font-medium text-white/80 hover:text-white transition"
                    >
                        Shop
                    </Link>

                    {/* VIP */}
                    <Link
                        to="/premium"
                        className="
              flex items-center gap-1.5 rounded-full
              bg-linear-to-r from-pink-500 to-purple-600
              px-3 py-1.5 text-xs font-bold text-white
              shadow-lg shadow-pink-500/30
              hover:scale-105 transition
            "
                    >
                        <Crown size={14} />
                        VIP
                    </Link>

                    {/* PROFILE */}
                    <Link
                        to="/profile"
                        className="
              flex h-9 w-9 items-center justify-center
              rounded-full bg-white/10
              text-xs font-semibold text-white
              hover:bg-white/20 transition
            "
                    >
                        U
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
