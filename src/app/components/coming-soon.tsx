import { GraduationCap, Newspaper, Trophy, HelpCircle } from 'lucide-react';

const sections = [
  {
    icon: GraduationCap,
    title: 'Coaching Programs',
    description: 'Professional cricket coaching for all skill levels, from beginners to advanced players.'
  },
  {
    icon: Newspaper,
    title: 'Blogs',
    description: 'Expert tips, training guides, and cricket news to help you improve your game.'
  },
  {
    icon: Trophy,
    title: 'Events & Leagues',
    description: 'Competitive tournaments and friendly leagues for the cricket community.'
  },
  {
    icon: HelpCircle,
    title: 'FAQ',
    description: 'Answers to frequently asked questions about our facilities and services.'
  }
];

export function ComingSoon() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Coming Soon
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We're working on exciting new features to enhance your cricket experience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <section.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{section.title}</h3>
              <p className="text-white/80">{section.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-white/90">
            Stay tuned for updates! Follow us on social media to be the first to know when these features launch.
          </p>
        </div>
      </div>
    </section>
  );
}
