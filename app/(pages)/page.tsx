import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 to-indigo-200 p-8 flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated Logo/Header */}
        <div className="relative mb-12">
          <div className="w-24 h-24 mx-auto border-4 border-violet-500 rounded-xl animate-pulse shadow-lg flex items-center justify-center">
            <div className="w-16 h-16 bg-violet-600 rounded-lg animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          </div>
          <h1 className="mt-6 text-5xl font-bold text-violet-800">SketchFlow</h1>
          <p className="text-xl text-violet-600 mt-2">Your Creative Canvas Awaits</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: '✏️',
              title: 'Intuitive Drawing',
              description: 'Create with natural drawing tools and smooth brushes'
            },
            {
              icon: '🖼️',
              title: 'Multiple Canvases',
              description: 'Organize your work across different artboards'
            },
            {
              icon: '🚀',
              title: 'Real-time Collaboration',
              description: 'Work together with your team seamlessly'
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-violet-700 mb-2">{feature.title}</h3>
              <p className="text-violet-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="relative group">
          <Link
            href="/workspace"
            className="inline-block px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"
          >
            Start Creating Now
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <div className="absolute -inset-2 bg-violet-400/30 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </div>

        {/* Animated Footer Elements */}
        <div className="mt-16 flex justify-center space-x-4">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className="w-3 h-3 bg-violet-400 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}