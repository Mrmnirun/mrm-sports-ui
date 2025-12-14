import { Target, Users, Award, Clock } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Target,
      title: 'Professional Equipment',
      description: 'State-of-the-art cricket lanes and bowling machines for optimal training'
    },
    {
      icon: Users,
      title: 'Expert Coaching',
      description: 'Learn from experienced coaches dedicated to improving your game'
    },
    {
      icon: Award,
      title: 'Top-Tier Facilities',
      description: 'Climate-controlled indoor environment with premium playing surfaces'
    },
    {
      icon: Clock,
      title: 'Flexible Hours',
      description: 'Book lanes at times that work for your schedule'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About MRM Sports
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are Canada's premier indoor cricket facility, dedicated to providing world-class training 
            and playing experiences for cricketers of all skill levels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1761757106447-e6f2aba2dad6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwdHJhaW5pbmclMjBiYXR0aW5nfGVufDF8fHx8MTc2NTcwMTY2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Cricket Training"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Who We Are
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              MRM Sports is a state-of-the-art indoor cricket facility designed to help players 
              hone their skills year-round, regardless of weather conditions. Our facility features 
              multiple cricket lanes equipped with modern amenities and professional-grade equipment.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Whether you're a beginner looking to learn the fundamentals or an experienced player 
              seeking to refine your technique, we provide the perfect environment to elevate your game.
            </p>
            <p className="text-lg text-gray-700">
              Our mission is to grow the sport of cricket in Canada by providing accessible, 
              high-quality facilities and fostering a vibrant cricket community.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
