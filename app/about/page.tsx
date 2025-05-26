"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Award, CheckCircle, Clock, Globe, Lightbulb, Users } from "lucide-react";

export default function AboutPage() {
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

  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://thumbs.dreamstime.com/b/digital-handshake-blue-technology-background-concept-business-technology-partnership-digital-handshake-blue-339455562.jpg"
            alt="Digital Handshake"
            fill
            className="object-cover brightness-[0.4]"
          />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative z-10 max-w-7xl mx-auto text-center text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-cyan-400">Cloudforce Technologies</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-200">
            Your strategic technology partner focused on empowering businesses through cutting-edge Cloud Services and innovative IT solutions.
          </p>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-slate-800 dark:text-white">
                Our <span className="text-cyan-600">Story</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Cloudforce Technologies was founded with a clear mission: to help businesses harness the power of technology to drive growth, efficiency, and innovation. We recognized that many organizations struggle to keep pace with rapidly evolving technology landscapes and need a trusted partner to guide their digital transformation journey.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Since our inception, we've been dedicated to delivering tailored technology solutions that address the unique challenges and opportunities of each client we serve. Our team of experienced professionals combines deep technical expertise with business acumen to ensure that every solution we provide delivers measurable value.
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                Today, Cloudforce Technologies stands as a leading technology partner for businesses across various industries, helping them navigate the complexities of the digital landscape and achieve their strategic objectives.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://i.pinimg.com/originals/53/75/08/5375082f5c4787caa60715ed0e42faa8.jpg"
                alt="IT Infrastructure"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-slate-800 dark:text-white">
              Our <span className="text-cyan-600">Approach</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              At Cloudforce Technologies, we take a tailored approach to analyze each client's unique needs, maximizing the return on IT investments.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb size={32} />,
                title: "Discover",
                description: "We begin by thoroughly understanding your business objectives, challenges, and current technology landscape."
              },
              {
                icon: <Globe size={32} />,
                title: "Design",
                description: "Our experts design customized solutions that align with your business goals and address your specific needs."
              },
              {
                icon: <Award size={32} />,
                title: "Deliver",
                description: "We implement solutions with precision, ensuring seamless integration and minimal disruption to your operations."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg"
              >
                <div className="p-3 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400 rounded-lg inline-block mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">
              Our <span className="text-cyan-300">Values</span>
            </h2>
            <p className="text-gray-200 max-w-3xl mx-auto">
              These core principles guide everything we do at Cloudforce Technologies.
            </p>
          </motion.div>

          <motion.div
            ref={valuesRef}
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                title: "Excellence",
                description: "We strive for excellence in every solution we deliver, ensuring the highest quality and performance."
              },
              {
                title: "Innovation",
                description: "We embrace innovation and continuously explore new technologies to provide cutting-edge solutions."
              },
              {
                title: "Integrity",
                description: "We operate with honesty, transparency, and ethical standards in all our business relationships."
              },
              {
                title: "Partnership",
                description: "We build long-term partnerships with our clients, focusing on their success as our primary goal."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold mb-3 text-cyan-300">{value.title}</h3>
                <p className="text-gray-200">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-slate-800 dark:text-white">
              Our <span className="text-cyan-600">Team</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Our team of experienced technical experts is dedicated to helping businesses stay ahead in the digital landscape.
            </p>
          </motion.div>

          <motion.div
            ref={teamRef}
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Sarah Johnson",
                role: "Chief Technology Officer",
                bio: "With over 15 years of experience in software development and cloud architecture, Sarah leads our technical strategy and innovation initiatives."
              },
              {
                name: "Michael Chen",
                role: "Lead Software Developer",
                bio: "Michael specializes in building scalable, high-performance applications using the latest technologies and best practices."
              },
              {
                name: "Priya Patel",
                role: "Cloud Solutions Architect",
                bio: "Priya has extensive experience designing and implementing cloud solutions that optimize performance, security, and cost-efficiency."
              },
              {
                name: "David Rodriguez",
                role: "Web Development Lead",
                bio: "David combines technical expertise with creative vision to deliver exceptional web experiences that drive business results."
              },
              {
                name: "Emma Wilson",
                role: "Quality Assurance Manager",
                bio: "Emma ensures that all our solutions meet the highest standards of quality, reliability, and performance."
              },
              {
                name: "James Thompson",
                role: "Integration Specialist",
                bio: "James excels at connecting disparate systems and technologies to create seamless, efficient workflows."
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl shadow-lg"
              >
                <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400 rounded-full flex items-center justify-center mb-4">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-bold mb-1 text-slate-800 dark:text-white">{member.name}</h3>
                <p className="text-cyan-600 dark:text-cyan-400 mb-3">{member.role}</p>
                <p className="text-slate-600 dark:text-slate-300">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-100 dark:bg-slate-800/50">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-slate-800 dark:text-white">
              Ready to Partner with <span className="text-cyan-600">Cloudforce Technologies</span>?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss how we can help your business leverage technology for growth and success.
            </p>
            <Link
              href="/contact"
              className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-8 rounded-md transition-all inline-flex items-center justify-center gap-2"
            >
              Get in Touch <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}