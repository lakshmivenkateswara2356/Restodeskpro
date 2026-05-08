import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Download,
  Shield,
  Sparkles,
  Zap,
  Star,
} from "lucide-react";

export default function App() {
  const pricingPlans = [
    {
      title: "1 Year License",
      price: "₹2,499",
      desc: "Perfect for startups and small restaurants.",
    },
    {
      title: "3 Year License",
      price: "₹4,500",
      desc: "Most popular plan for growing businesses.",
      popular: true,
    },
    {
      title: "Lifetime License",
      price: "₹9,000",
      desc: "One-time payment with lifetime access.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Blur */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center font-bold text-xl">
              N
            </div>

            <div>
              <h1 className="text-2xl font-black">Nexiquil</h1>
              <p className="text-zinc-400 text-sm">
                Software Company
              </p>
            </div>
          </div>

          <nav className="hidden lg:flex gap-10 text-zinc-300">
            <a href="#home" className="hover:text-white transition">
              Home
            </a>

            <a href="#product" className="hover:text-white transition">
              Product
            </a>

            <a href="#pricing" className="hover:text-white transition">
              Pricing
            </a>

            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>

          <button className="bg-white text-black px-6 py-3 rounded-2xl font-semibold">
            Download
          </button>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-20 items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-5 py-2 rounded-full mb-8">
            <Sparkles size={16} className="text-yellow-400" />
            Premium Restaurant Software
          </div>

          <h1 className="text-6xl lg:text-8xl font-black leading-none mb-8">
            Nexiquil
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Software
            </span>
          </h1>

          <p className="text-zinc-400 text-lg leading-8 max-w-xl mb-10">
            Nexiquil develops modern business software products
            with premium UI, powerful features, billing systems,
            analytics, and automation solutions for restaurants
            and businesses.
          </p>

          <div className="flex flex-wrap gap-5">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-purple-500 to-cyan-500 px-8 py-5 rounded-2xl font-semibold flex items-center gap-3"
            >
              Explore Product
              <ArrowRight size={20} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="border border-white/10 bg-white/5 px-8 py-5 rounded-2xl"
            >
              Watch Demo
            </motion.button>
          </div>

          <div className="flex gap-10 mt-14">
            <div>
              <h3 className="text-4xl font-bold">10K+</h3>
              <p className="text-zinc-500">Downloads</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">4.9★</h3>
              <p className="text-zinc-500">Rating</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">24/7</h3>
              <p className="text-zinc-500">Support</p>
            </div>
          </div>
        </motion.div>

        {/* Dashboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 blur-[120px] opacity-20 rounded-full" />

          <div className="relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[40px] p-8">
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="text-zinc-400">Restaurant POS</p>
                <h2 className="text-4xl font-black mt-2">
                  RestoDesk Pro
                </h2>
              </div>

              <div className="bg-green-500/20 text-green-400 px-5 py-2 rounded-full">
                Online
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5 mb-6">
              <div className="bg-black/30 rounded-3xl p-6 border border-white/10">
                <p className="text-zinc-400 mb-2">
                  Today's Sales
                </p>

                <h3 className="text-4xl font-black">
                  ₹86K
                </h3>
              </div>

              <div className="bg-black/30 rounded-3xl p-6 border border-white/10">
                <p className="text-zinc-400 mb-2">
                  Orders
                </p>

                <h3 className="text-4xl font-black">
                  428
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              {[
                "Billing Management",
                "Kitchen Orders",
                "Inventory Tracking",
                "Receipt Export",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-black/30 border border-white/10 rounded-2xl p-5 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle
                      className="text-green-400"
                      size={20}
                    />

                    <span>{item}</span>
                  </div>

                  <span className="text-green-400">
                    Active
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Product */}
      <section
        id="product"
        className="max-w-7xl mx-auto px-6 py-28"
      >
        <div className="text-center mb-20">
          <h2 className="text-6xl font-black mb-6">
            RestoDesk Pro
          </h2>

          <p className="text-zinc-400 text-xl max-w-3xl mx-auto leading-8">
            Powerful restaurant billing and management software
            with POS, inventory, reports, kitchen management,
            customer tracking, and analytics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Zap,
              title: "Fast Billing",
            },
            {
              icon: Shield,
              title: "Secure System",
            },
            {
              icon: Star,
              title: "Premium UI",
            },
            {
              icon: Download,
              title: "Easy Download",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 rounded-[30px] p-8 backdrop-blur-xl"
              >
                <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center mb-8">
                  <Icon size={28} />
                </div>

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="py-28 bg-white/[0.03]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-6">
              Pricing Plans
            </h2>

            <p className="text-zinc-400 text-xl">
              Choose the best plan for your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className={`relative rounded-[40px] p-10 border backdrop-blur-xl ${
                  plan.popular
                    ? "bg-gradient-to-b from-purple-500/20 to-cyan-500/10 border-cyan-400"
                    : "bg-white/5 border-white/10"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-5 right-5 bg-cyan-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                    Popular
                  </div>
                )}

                <h3 className="text-3xl font-black mb-4">
                  {plan.title}
                </h3>

                <h2 className="text-6xl font-black mb-6">
                  {plan.price}
                </h2>

                <p className="text-zinc-400 leading-8 mb-10">
                  {plan.desc}
                </p>

                <div className="space-y-4 mb-10">
                  {[
                    "Unlimited Billing",
                    "Inventory Management",
                    "Reports & Analytics",
                    "Customer Support",
                  ].map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle
                        className="text-green-400"
                        size={20}
                      />

                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 py-4 rounded-2xl font-bold text-lg">
                  Download Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="border-t border-white/10 py-12 px-6"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-center justify-between">
          <div>
            <h3 className="text-3xl font-black mb-3">
              Nexiquil
            </h3>

            <p className="text-zinc-500">
              Premium Software Company
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-10 text-center">
            <div>
              <p className="text-zinc-500 mb-2">Email</p>
              <p>support@nexiquil.com</p>
            </div>

            <div>
              <p className="text-zinc-500 mb-2">Phone</p>
              <p>+91 98765 43210</p>
            </div>

            <div>
              <p className="text-zinc-500 mb-2">Location</p>
              <p>India</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}