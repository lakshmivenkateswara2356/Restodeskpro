import { motion } from "framer-motion";
import { useState } from "react";

import {
  ArrowRight,
  CheckCircle,
  Download,
  Shield,
  Sparkles,
  Zap,
  Star,
  X,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/* ================= DEMO IMAGES ================= */

import demodata1 from "../assets/demos/Additem.png";
import demodata2 from "../assets/demos/bill.png";
import demodata3 from "../assets/demos/Billing.png";
import demodata4 from "../assets/demos/catogerypage.png";
import demodata5 from "../assets/demos/dash.png";
import demodata6 from "../assets/demos/Edditupdate.png";
import demodata7 from "../assets/demos/generatebil.png";
import demodata8 from "../assets/demos/menuitems.png";
import demodata9 from "../assets/demos/menuitemsm.png";
import demodata10 from "../assets/demos/Monthly report.png";
import demodata11 from "../assets/demos/processbil.png";
import demodata12 from "../assets/demos/Recepthystory.png";
import demodata13 from "../assets/demos/Reportdarea.png";
import demodata14 from "../assets/demos/Settingspage.png";
import demodata15 from "../assets/demos/viodrerecept.png";
import demodata16 from "../assets/demos/voided.png";
import demodata17 from "../assets/demos/voidprocess.png";
import demodata18 from "../assets/demos/voidrecept.png";

export default function App() {
  const [openDemo, setOpenDemo] = useState(false);

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

  const screenshots = [
     demodata5,
     demodata3,
     demodata7,
     demodata2,
     demodata12,
      demodata16,
      demodata17,
       demodata18,
       
       demodata9,
    demodata1,
    demodata6,
    
    
    demodata4,
   demodata14,
    
    
    
    
    demodata10,
    
    
    demodata13,
    
    demodata15,
   
    
   
  ];

  return (
    <div className="min-h-screen bg-white text-black overflow-hidden">
      {/* ================= NAVBAR ================= */}

      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-600 flex items-center justify-center font-bold text-xl text-white shadow-lg">
              N
            </div>

            <div>
              <h1 className="text-2xl font-black">
                Nexiquil
              </h1>

              <p className="text-zinc-500 text-sm">
                Restaurant Software
              </p>
            </div>
          </div>

          <nav className="hidden lg:flex gap-10 text-zinc-700 font-medium">
            <a href="#home" className="hover:text-purple-600 transition">
              Home
            </a>

            <a href="#product" className="hover:text-purple-600 transition">
              Product
            </a>

            <a href="#pricing" className="hover:text-purple-600 transition">
              Pricing
            </a>

            <a href="#contact" className="hover:text-purple-600 transition">
              Contact
            </a>
          </nav>

          <a
            href="https://drive.google.com/uc?export=download&id=1YCQXp6Ri5mJxkVSU5N8Q1_6gw3wAFB_G"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-lg">
              Download
            </button>
          </a>
        </div>
      </header>

      {/* ================= HERO ================= */}

      <section
        id="home"
        className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-20 items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 border border-purple-200 bg-purple-50 px-5 py-2 rounded-full mb-8 text-purple-700 font-medium">
            <Sparkles size={16} />

            Premium Restaurant Software
          </div>

          <h1 className="text-6xl lg:text-7xl font-black leading-tight mb-8">
            Modern POS
            <br />

            <span className="text-purple-600">
              For Restaurants
            </span>
          </h1>

          <p className="text-zinc-600 text-lg leading-8 max-w-xl mb-10">
            Powerful billing, inventory, analytics,
            kitchen management, reporting, and
            automation software built for modern
            restaurants and growing businesses.
          </p>

          <div className="flex flex-wrap gap-5">
            <motion.button
              whileHover={{ scale: 1.04 }}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-5 rounded-2xl font-semibold flex items-center gap-3 shadow-xl transition-all"
            >
              Explore Product

              <ArrowRight size={20} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              onClick={() => setOpenDemo(true)}
              className="border border-zinc-300 bg-white px-8 py-5 rounded-2xl font-semibold hover:border-purple-500 hover:text-purple-600 transition-all"
            >
              Watch Demo
            </motion.button>
          </div>

          <div className="flex gap-10 mt-14">
            <div>
              <h3 className="text-4xl font-black">
                3K+
              </h3>

              <p className="text-zinc-500">
                Downloads
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black">
                4.9★
              </h3>

              <p className="text-zinc-500">
                Rating
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black">
                24/7
              </h3>

              <p className="text-zinc-500">
                Support
              </p>
            </div>
          </div>
        </motion.div>

        {/* ================= DASHBOARD CARD ================= */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="bg-white border border-zinc-200 rounded-[40px] p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="text-zinc-500">
                  Restaurant POS
                </p>

                <h2 className="text-4xl font-black mt-2">
                  RestoDesk Pro
                </h2>
              </div>

              <div className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">
                Online
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5 mb-6">
              <div className="bg-zinc-100 rounded-3xl p-6">
                <p className="text-zinc-500 mb-2">
                  Today's Sales
                </p>

                <h3 className="text-4xl font-black">
                  ₹86K
                </h3>
              </div>

              <div className="bg-zinc-100 rounded-3xl p-6">
                <p className="text-zinc-500 mb-2">
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
                  className="bg-zinc-100 rounded-2xl p-5 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle
                      className="text-green-600"
                      size={20}
                    />

                    <span className="font-medium">
                      {item}
                    </span>
                  </div>

                  <span className="text-green-600 font-semibold">
                    Active
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= FEATURES ================= */}

      <section
        id="product"
        className="max-w-7xl mx-auto px-6 py-24"
      >
        <div className="text-center mb-20">
          <h2 className="text-6xl font-black mb-6">
            Powerful Features
          </h2>

          <p className="text-zinc-600 text-xl max-w-3xl mx-auto leading-8">
            Everything you need to run your
            restaurant efficiently with a modern
            and professional experience.
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
                whileHover={{ y: -8 }}
                className="bg-white border border-zinc-200 rounded-[30px] p-8 shadow-xl"
              >
                <div className="w-16 h-16 rounded-3xl bg-purple-600 text-white flex items-center justify-center mb-8 shadow-lg">
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

      {/* ================= PRICING ================= */}

      <section
        id="pricing"
        className="py-24 bg-zinc-100"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-6">
              Pricing Plans
            </h2>

            <p className="text-zinc-600 text-xl">
              Choose the perfect plan for your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className={`relative rounded-[40px] p-10 border shadow-2xl ${
                  plan.popular
                    ? "bg-purple-600 text-white border-purple-600"
                    : "bg-white border-zinc-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-5 right-5 bg-white text-purple-700 px-4 py-2 rounded-full text-sm font-bold">
                    Popular
                  </div>
                )}

                <h3 className="text-3xl font-black mb-4">
                  {plan.title}
                </h3>

                <h2 className="text-6xl font-black mb-6">
                  {plan.price}
                </h2>

                <p
                  className={`leading-8 mb-10 ${
                    plan.popular
                      ? "text-purple-100"
                      : "text-zinc-600"
                  }`}
                >
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
                      <CheckCircle size={20} />

                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://drive.google.com/uc?export=download&id=1YCQXp6Ri5mJxkVSU5N8Q1_6gw3wAFB_G"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className={`w-full py-4 rounded-2xl font-bold text-lg transition-all ${
                      plan.popular
                        ? "bg-white text-purple-700 hover:bg-zinc-100"
                        : "bg-purple-600 text-white hover:bg-purple-700"
                    }`}
                  >
                    Download Now
                  </button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DEMO MODAL ================= */}

      {openDemo && (
        <div className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center p-6">
          <button
            onClick={() => setOpenDemo(false)}
            className="absolute top-6 right-6 w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-xl"
          >
            <X size={28} />
          </button>

          <div className="w-full max-w-6xl">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
            >
              {screenshots.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="flex items-center justify-center">
                    <img
                      src={image}
                      alt={`Screenshot ${index + 1}`}
                      className="w-full max-h-[85vh] object-contain rounded-[30px] shadow-2xl"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}

      {/* ================= FOOTER ================= */}

      <footer
        id="contact"
        className="border-t border-zinc-200 py-14 px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-center justify-between">
          <div>
            <h3 className="text-3xl font-black mb-3">
              Nexiquil
            </h3>

            <p className="text-zinc-500">
              Premium Restaurant Software
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-10 text-center">
            <div>
              <p className="text-zinc-500 mb-2">
                Email
              </p>

              <p className="font-semibold">
                restodeskpro@gmail.com
              </p>
            </div>

            <div>
              <p className="text-zinc-500 mb-2">
                Phone
              </p>

              <p className="font-semibold">
                +91 7842802368
              </p>
            </div>

            <div>
              <p className="text-zinc-500 mb-2">
                Location
              </p>

              <p className="font-semibold">
                India
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}