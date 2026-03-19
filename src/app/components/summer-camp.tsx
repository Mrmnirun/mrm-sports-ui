import { Phone, Calendar, Users, Star, Zap } from 'lucide-react';

const PHONE = '647-997-7132';

export function SummerCamp() {
  return (
    <section className="relative py-16 overflow-hidden">

      {/* Background image — kids playing sports outdoors in summer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
          alt="Summer sports camp background"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark blue tinted overlay so text stays readable */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,66,139,0.88) 0%, rgba(26,54,93,0.85) 60%, rgba(10,31,61,0.92) 100%)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">

        {/* Top badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 font-bold text-sm px-5 py-2 rounded-full uppercase tracking-wide shadow-lg">
            <Zap className="w-4 h-4" />
            Early Bird Prices — Limited Spots!
          </span>
        </div>

        {/* Main headline */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-3 leading-tight">
            Summer Sports Camp
            <span className="block text-yellow-400">2026</span>
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Get ready for a summer full of <strong className="text-white">fun, friends, and sports!</strong>
          </p>
        </div>

        {/* Sport pills */}
        <div className="flex justify-center gap-4 flex-wrap mb-10">
          <div className="flex items-center gap-2 bg-white/15 backdrop-blur text-white font-semibold px-6 py-3 rounded-full text-lg border border-white/20">
            🏏 Cricket
          </div>
          <div className="flex items-center gap-2 bg-white/15 backdrop-blur text-white font-semibold px-6 py-3 rounded-full text-lg border border-white/20">
            ⚽ Soccer
          </div>
          <div className="flex items-center gap-2 bg-white/15 backdrop-blur text-white font-semibold px-6 py-3 rounded-full text-lg border border-white/20">
            🎯 Many More
          </div>
        </div>

        {/* Info cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center border border-white/20">
            <Calendar className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <p className="text-white font-bold text-xl">July & August</p>
            <p className="text-blue-200 text-sm mt-1">Full summer programme</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center border border-white/20">
            <Users className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <p className="text-white font-bold text-xl">Ages 6 – 15</p>
            <p className="text-blue-200 text-sm mt-1">All skill levels welcome</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center border border-white/20">
            <Star className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <p className="text-white font-bold text-xl">Expert Coaches</p>
            <p className="text-blue-200 text-sm mt-1">Multi-sport training & teamwork</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-blue-200 text-base mb-4">
            Spots fill fast — call now to lock in your early bird price!
          </p>
          <a
            href={`tel:${PHONE.replace(/-/g, '')}`}
            className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-extrabold text-xl px-10 py-4 rounded-full shadow-2xl transition-all transform hover:scale-105"
          >
            <Phone className="w-6 h-6" />
            Call Now: {PHONE}
          </a>
        </div>

      </div>
    </section>
  );
}
