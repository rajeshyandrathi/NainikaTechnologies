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
      <section className="relative bg-blue-50 py-20 px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative z-10 max-w-7xl mx-auto text-center text-white"
        >
        <p className="text-slate-600 mb-6">
            Your strategic technology partner focused on empowering businesses through cutting-edge Cloud Services and innovative IT solutions. We specialize in delivering scalable digital architectures and secure infrastructure management that drive operational efficiency and long-term competitive advantage. By bridging the gap between complex technology and business goals, we ensure your organization is equipped to thrive in an ever-evolving global marketplace.
        </p> 
          <p className="text-slate-600 mb-6">  
          Our comprehensive IT services encompass everything from managed infrastructure and cybersecurity to custom software development and strategic consulting. We provide end-to-end support designed to optimize your technology stack, minimize downtime, and ensure your business remains agile in a digital-first world.
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
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-6 text-slate-800 dark:text-white">
                Our <span className="text-cyan-600">Story</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Nainika Technologies was born out of a vision to turn technology into a strategic growth engine. In a world of constant digital acceleration, we saw the need for a partner that goes beyond implementation—to help organizations think bigger, move faster, and scale smarter.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Our mission is simple yet powerful: enable businesses to lead with technology that's aligned to purpose, built for agility, and designed to drive measurable impact.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                With a team of technologists, architects, and strategists, we deliver intelligent, cloud-native, and data-driven solutions that reimagine operations, elevate customer experiences, and future-proof digital infrastructure.
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                Today, we proudly serve visionary organizations across industries—as a transformation partner that's as committed to innovation as we are to outcomes.
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
              At Nainika Technologies, we believe digital transformation must be intentional, iterative, and impact-driven. Our proven three-phase methodology—<strong>Discover, Design, Deliver</strong>—ensures that every solution we create is tightly aligned with your goals and built to scale with your vision.
              <br /><br />
              We don't believe in one-size-fits-all solutions. Each engagement begins with a deep understanding of your business environment, continues through thoughtful and agile design, and culminates in execution that prioritizes performance, security, and user adoption. Whether modernizing existing infrastructure or building next-generation digital capabilities, we guide our clients through every phase of transformation—with clarity, confidence, and measurable results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "/Discover.jpeg",
                title: "Discover",
                description:
                  "We begin by deeply understanding your business goals, current systems, and strategic challenges. This phase ensures that we align our solutions with your long-term vision from the outset."
              },
              {
                image: "/Design.jpeg",
                title: "Design",
                description:
                  "We architect intelligent, scalable, and secure solutions tailored to your needs. Our designs are flexible, future-ready, and optimized for agility, performance, and user experience."
              },
              {
                image: "/Deliver.jpeg",
                title: "Deliver",
                description:
                  "We execute with precision—ensuring seamless deployment, robust change management, and high adoption. We focus on outcomes, not just implementation, to maximize ROI and business impact."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-cyan-600">{step.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{step.description}</p>
                </div>
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
              At Nainika Technologies, our values fuel transformative outcomes. They guide how we innovate, collaborate, and scale technology for impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/Excellence.jpeg",
                title: "Excellence",
                description: "We engineer with precision, uphold the highest standards, and deliver scalable, future-proof digital solutions."
              },
              {
                image: "/Innovation.jpeg",
                title: "Innovation",
                description: "We foster a culture of continuous innovation, leveraging emerging tech to unlock untapped opportunities."
              },
              {
                image: "/Integrity.jpeg",
                title: "Integrity",
                description: "We build trust through transparency, secure development practices, and ethical use of technology."
              },
              {
                image: "/Accountability.jpeg",
                title: "Accountability",
                description: "We take full ownership—from ideation to execution—ensuring every solution delivers measurable business value."
              },
              {
                image: "/Customer Centricity.jpeg",
                title: "Customer Centricity",
                description: "We co-create with clients, aligning digital strategy with user experience and long-term transformation goals."
              },
              {
                image: "/Partnership.jpeg",
                title: "Partnership",
                description: "We serve as strategic allies, embedding ourselves in your mission to accelerate growth through technology."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={value.image}
                    alt={value.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-cyan-300">{value.title}</h3>
                  <p className="text-gray-200">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      {/*
      <section className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-slate-800 dark:text-black">
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
      */}

      {/* Our Clients Section */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-slate-800 dark:text-black">
              Our <span className="text-cyan-600">Clients</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              We proudly partner with forward-thinking businesses, public sector organizations, and global enterprises. Our clients trust us to turn complexity into clarity and ideas into outcomes.
            </p>
          </motion.div>

          <div className="relative overflow-hidden">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{ duration: 20, ease: "linear", repeat: Infinity }}
              className="flex w-[200%]"
            >
              {[...Array(2)].flatMap(() =>
                [
                  "/AbinBev.png",
                  "/ABSA.png",
                  "/ADA.png",
                  "/AumentCapital.png",
                  "/BCBS.png",
                  "/CapeUnionMart.png",
                  "/cenegenics.png",
                  "/ChangeHealthCare.png",
                  "/CharterBrands_Logo_Black.png",
                  "/CHC.png",
                  "/GymShark.png",
                  "/HCSC.png",
                  "/Hipten.png",
                  "/House-Of-Makers.png",
                  "/Hudl-logo-print-pantone.png",
                  "/LANDSA.png",
                  "/Navancio.png",
                  "/OBG.png",
                  "/Reliant.png",
                  "/Synatic.png",
                  "/UrbanFindr.png",
                  "/vt_team_logo.png",
                ].map((logo, index) => (
                  <div key={index + logo} className="flex items-center px-8 shrink-0">
                    <Image
                      src={logo}
                      alt={`Client ${index + 1}`}
                      width={120}
                      height={60}
                      className="object-contain grayscale hover:grayscale-0 transition"
                    />
                  </div>
                ))
              )}
            </motion.div>
          </div>
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
              Ready to Partner with <span className="text-cyan-600">Nainika Technologies</span>?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
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
