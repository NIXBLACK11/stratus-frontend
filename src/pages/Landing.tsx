import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Activity,
  Bell,
  Monitor,
  Zap,
  LineChart,
  ChevronRight,
  ArrowRight,
  Github,
} from "lucide-react";

export const Landing = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="fixed inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-orange-900/20 animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,140,0,0.1)_0%,transparent_70%)] animate-pulse" />
      </div>

      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-lg border-b border-orange-500/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3 group">
              <Activity className="h-8 w-8 text-orange-500 animate-pulse" />
              <span className="text-3xl font-bold text-white">Stratus</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex space-x-8">
                {["Features", "Pricing"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-orange-400 transition-all duration-300 
                             group flex items-center space-x-1"
                  >
                    <span>{item}</span>
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                ))}
              </nav>
              <button
                onClick={()=>{navigate('/login')}}
                className="relative px-6 py-2.5 rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 
                         text-white font-medium transition-all duration-300 
                         hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5
                         group overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Start Monitoring</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div
                  className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </button>
              <a
                href="https://github.com/NIXBLACK11/stratus-core"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-2.5 rounded-lg border-2 border-orange-500/50
                         text-orange-400 font-medium transition-all duration-300
                         hover:bg-orange-500/10 hover:-translate-y-0.5
                         flex items-center space-x-2"
              >
                <Github className="h-5 w-5" />
                <span>CLI Tool</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 lg:pt-40 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Floating Icon */}
          <div className="inline-block mb-8 animate-bounce">
            <div className="p-4 rounded-2xl bg-orange-500/10 backdrop-blur-sm">
              <Monitor className="h-16 w-16 text-orange-400" />
            </div>
          </div>

          <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Never Miss a Downtime with
            <span
              className="block mt-2 bg-gradient-to-r from-orange-400 to-orange-500 
                           text-transparent bg-clip-text animate-pulse"
            >
              Stratus
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Real-time Monitoring, Instant Alerts to keep your site running smoothly.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button
              onClick={()=>{navigate('/login')}}
              className="group relative px-8 py-4 rounded-lg bg-gradient-to-r 
                       from-orange-600 to-orange-500 text-white font-medium
                       transition-all duration-300 hover:shadow-lg 
                       hover:shadow-orange-500/25 hover:-translate-y-0.5
                       overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>Start Monitoring now</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div
                className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </button>

            <a
              href="#features"
              className="group px-8 py-4 rounded-lg border-2 border-orange-500/50 
                       text-orange-400 font-medium transition-all duration-300
                       hover:bg-orange-500/10 flex items-center justify-center space-x-2"
            >
              <span>Explore Features</span>
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-20">
            {[
              { number: "99.9%", label: "Errors detected" },
              { number: "15min", label: "Check Interval" },
              { number: "24/7", label: "Expert Support" },
            ].map((stat, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-gray-900/50 border border-gray-800 
                         backdrop-blur-sm transition-all duration-300
                         hover:border-orange-500/50 hover:-translate-y-1
                         hover:shadow-lg hover:shadow-orange-500/10"
              >
                <p
                  className="text-4xl font-bold text-white mb-2 
                          group-hover:text-orange-400 transition-colors"
                >
                  {stat.number}
                </p>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Monitoring Features
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to keep your websites running smoothly
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Real-time Monitoring",
                description:
                  "Monitor your websites 24/7 with automated checks every 15 minutes",
              },
              {
                icon: <Bell className="w-8 h-8" />,
                title: "Instant Alerts",
                description:
                  "Get notified immediately via Email when issues are detected",
              },
              {
                icon: <LineChart className="w-8 h-8" />,
                title: "Detailed Analytics",
                description:
                  "Coming soon!",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-xl bg-gray-900/50 border border-gray-800 
                         backdrop-blur-sm transition-all duration-300
                         hover:border-orange-500/50 hover:-translate-y-1
                         hover:shadow-lg hover:shadow-orange-500/10"
              >
                <div
                  className="mb-6 p-4 rounded-xl bg-orange-500/10 w-fit
                            transition-transform group-hover:scale-110 duration-300"
                >
                  <div className="text-orange-400 transition-colors">
                    {feature.icon}
                  </div>
                </div>
                <h3
                  className="text-2xl font-semibold mb-4 text-white 
                           group-hover:text-orange-400 transition-colors"
                >
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Pricing Plans
            </h2>
            <p className="text-xl text-gray-400">
              Coming Soon!
            </p>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <div
              className="group p-12 rounded-xl bg-gray-900/50 border border-gray-800 
                       backdrop-blur-sm transition-all duration-300
                       hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10"
            >
              <h3 className="text-3xl font-bold text-white mb-6">
                Stay Tuned for Our Pricing Plans
              </h3>
              <p className="text-gray-400 mb-8">
                We're working on creating the perfect pricing plans for your needs. 
                Sign up now to be notified when our pricing plans are available.
              </p>
              <button
                onClick={()=>{navigate('/login')}}
                className="group relative px-8 py-4 rounded-lg bg-gradient-to-r 
                         from-orange-600 to-orange-500 text-white font-medium
                         transition-all duration-300 hover:shadow-lg 
                         hover:shadow-orange-500/25 hover:-translate-y-0.5"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Get Notified</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Never Miss a Down Time?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
          Be among the first to experience Stratus for reliable and innovative monitoring solutions
          </p>
          <button
            onClick={()=>{navigate('/login')}}
            className="group relative px-10 py-4 rounded-lg bg-gradient-to-r 
                     from-orange-600 to-orange-500 text-white font-medium
                     transition-all duration-300 hover:shadow-lg 
                     hover:shadow-orange-500/25 hover:-translate-y-0.5
                     overflow-hidden"
          >
            <span className="flex items-center justify-center space-x-2">
              <span>Get Started Now</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}