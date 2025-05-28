"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { ArrowRight, CheckCircle, Cloud, Code, Database, Globe, ShoppingBag, TestTube } from "lucide-react";

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://static.vecteezy.com/system/resources/previews/022/406/036/large_2x/cloud-technology-cloud-computing-devices-connected-to-digital-storage-in-data-center-ai-generated-free-photo.jpeg"
            alt="Cloud Technology"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <motion.div
          ref={heroRef}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={fadeIn}
          className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] px-4 py-20 text-center text-white"
        >
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Empowering Businesses Through{" "}
              <span className="text-cyan-400">Innovative Technology</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-200">
              Cloudforce Technologies is your strategic technology partner, delivering cutting-edge cloud services and IT solutions tailored to your unique business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services" className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-6 rounded-md transition-all flex items-center justify-center gap-2">
                Explore Our Services <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="bg-transparent hover:bg-white/10 border border-white text-white font-medium py-3 px-6 rounded-md transition-all flex items-center justify-center gap-2">
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800 dark:text-white">
                Your Strategic <span className="text-cyan-600">Technology Partner</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                At Cloudforce Technologies, we take a tailored approach to analyze each client's unique needs, maximizing the return on IT investments. Our team of experienced technical experts is dedicated to helping businesses stay ahead in the digital landscape.
              </p>
              <ul className="space-y-3">
                {[
                  "Custom solutions tailored to your business",
                  "Experienced team of technical experts",
                  "Maximizing return on IT investments",
                  "Strategic approach to digital transformation"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle className="text-cyan-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700 dark:text-slate-200">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Link href="/about" className="inline-flex items-center mt-8 text-cyan-600 font-medium hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300">
                Learn more about us <ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://c8.alamy.com/comp/T0F3NK/partnership-business-collaboration-and-modern-technology-concept-vector-of-entrepreneurs-and-freelance-community-members-team-working-on-a-handshake-T0F3NK.jpg"
                alt="Business Technology Partnership"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
     <section className="py-20 px-4 bg-slate-100 dark:bg-slate-800/50">
  <div className="max-w-7xl mx-auto">
    <motion.div
      ref={servicesRef}
      initial="hidden"
      animate={servicesInView ? "visible" : "hidden"}
      variants={fadeIn}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
        Our Core <span className="text-cyan-600">Services</span>
      </h2>
      <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
        We deliver cutting-edge technology services that accelerate innovation, boost scalability, and future-proof your business.
      </p>
    </motion.div>

    <motion.div
      initial="hidden"
      animate={servicesInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {[
        {
          icon: <Code size={32} />,
          title: "Cloud-Native Development",
          description: "Build scalable, high-performance applications using microservices, containers, and serverless architectures.",
          image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*ZzDGsBqv2EMcltQf7_S4pQ.jpeg"
        },
        {
          icon: <Globe size={32} />,
          title: "Modern Web & Mobile Platforms",
          description: "Craft immersive digital experiences powered by the latest web and mobile technologies.",
          image: "https://assets-global.website-files.com/621b1f2990f6ed1f6e5c28eb/64d14c2ffdc055b7ed9b2f71_Web%20Development.jpg"
        },
        {
          icon: <Cloud size={32} />,
          title: "Cloud Strategy & Migration",
          description: "Design and migrate enterprise systems to AWS, Azure, or GCP with security and performance in mind.",
          image: "https://www.spiceworks.com/wp-content/uploads/2023/07/Cloud-Migration-Strategy.jpg"
        },
        {
          icon: <Database size={32} />,
          title: "API Integrations & Automation",
          description: "Connect ecosystems with robust APIs and intelligent workflows that drive seamless operations.",
          image: "https://miro.medium.com/v2/resize:fit:1400/1*eFtMN9v0Jg8wFSQvNIlqtg.jpeg"
        },
        {
          icon: <ShoppingBag size={32} />,
          title: "AI-Driven Ecommerce Solutions",
          description: "Launch intelligent commerce experiences that scale, personalize, and convert—powered by data and AI.",
          image: "https://img.freepik.com/premium-photo/artificial-intelligence-ecommerce-online-shopping-digital-marketing-concept_34663-3361.jpg"
        },
        {
          icon: <TestTube size={32} />,
          title: "Intelligent Quality Engineering",
          description: "Leverage automation, AI, and continuous testing to ensure digital reliability at speed and scale.",
          image: "https://www.qentelli.com/sites/default/files/styles/blogs/public/2021-05/AI_Testing_2.jpg"
        }
      ].map((service, index) => (
        <motion.div
          key={index}
          variants={fadeIn}
          className="service-card bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg"
        >
          <div className="relative h-48">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400 rounded-lg">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">{service.title}</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300">{service.description}</p>
            <Link
              href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="inline-flex items-center mt-4 text-cyan-600 font-medium hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
            >
              Learn more <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={statsRef}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { value: "100+", label: "Clients Served" },
              { value: "250+", label: "Projects Completed" },
              { value: "13+", label: "Years Experience" },
              { value: "98%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="p-6 bg-white/10 backdrop-blur-sm rounded-lg"
              >
                <CounterAnimation
                  target={parseInt(stat.value) || 100}
                  suffix={stat.value.includes("+") ? "+" : stat.value.includes("%") ? "%" : ""}
                  className="text-3xl md:text-4xl font-bold mb-2"
                />
                <p className="text-cyan-100">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://i.pinimg.com/originals/53/75/08/5375082f5c4787caa60715ed0e42faa8.jpg"
            alt="IT Infrastructure"
            fill
            className="object-cover brightness-[0.3]"
          />
        </div>
        <motion.div
          ref={ctaRef}
          initial="hidden"
          animate={ctaInView ? "visible" : "hidden"}
          variants={fadeIn}
          className="relative z-10 max-w-5xl mx-auto text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business with Technology?
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-200">
            Let's discuss how Cloudforce Technologies can help you achieve your business goals through innovative IT solutions.
          </p>
          <Link href="/contact" className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-8 rounded-md transition-all inline-flex items-center justify-center gap-2">
            Get Started Today <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

// Counter Animation Component with proper TypeScript types
interface CounterAnimationProps {
  target: number;
  suffix?: string;
  className?: string;
}

const CounterAnimation: React.FC<CounterAnimationProps> = ({ target, suffix = "", className = "" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | undefined;
    let animationFrame: number | undefined;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 2000, 1);
      setCount(Math.floor(progress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    if (inView) {
      animationFrame = requestAnimationFrame(step);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [inView, target]);

  return (
    <div ref={ref} className={className}>
      {count}{suffix}
    </div>
  );
};
