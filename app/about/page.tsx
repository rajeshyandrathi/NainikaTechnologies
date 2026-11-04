"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
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
      <section className="relative bg-blue-50 pt-32 pb-16 px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative z-10 max-w-7xl mx-auto text-center text-black"
        >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-cyan-800">Us</span>
        </h1>
        <p className="text-slate-600 mb-6">
            We help B2B SaaS companies put AI agents to work and connect the systems that run their revenue. By bridging the gap between your tools, data, and teams, we reduce manual work and give leaders a clearer view of the business.
        </p> 
          <p className="text-slate-600 mb-6">  
          Our work spans agentic AI, RevOps and CRM systems, cloud platforms, integrations, and digital products. We stay with you from the first audit or pilot through rollout and long-term support.
          </p>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-6 text-slate-800">
                Our <span className="text-cyan-600">Story</span>
              </h2>
              <p className="text-slate-600 mb-4">
                Nainika Technologies was born out of a vision to turn technology into a strategic growth engine. In a world of constant digital acceleration, we saw the need for a partner that goes beyond implementation—to help organizations think bigger, move faster, and scale smarter.
              </p>
              <p className="text-slate-600 mb-4">
                Our mission is simple yet powerful: enable businesses to lead with technology that's aligned to purpose, built for agility, and designed to drive measurable impact.
              </p>
              <p className="text-slate-600 mb-4">
                Our team designs AI agents, RevOps and CRM systems, and cloud platforms that reduce manual work, connect revenue data, and give leaders a clearer view of their business.
              </p>
              <p className="text-slate-600">
                Today, our focus is helping B2B SaaS companies connect their revenue systems and put AI agents to work, while continuing to support organizations across other industries.
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
                src="/Quality Assurance.jpeg"
                alt="Team reviewing business charts"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-slate-800">
              Our <span className="text-cyan-600">Approach</span>
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
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
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-cyan-600">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-800 to-blue-500 text-black">
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
                    sizes="(min-width: 768px) 33vw, 100vw"
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
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-slate-800">
              Our <span className="text-cyan-600">Team</span>
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
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
                className="bg-slate-50 p-6 rounded-xl shadow-lg"
              >
                <div className="w-16 h-16 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mb-4">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-bold mb-1 text-slate-800">{member.name}</h3>
                <p className="text-cyan-600 mb-3">{member.role}</p>
                <p className="text-slate-600">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      */}

      {/* Our Clients Section */}
      <section className="py-20 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-slate-800">
              Our <span className="text-cyan-600">Clients</span>
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              We proudly partner with forward-thinking businesses, public sector organizations, and global enterprises. Our clients trust us to turn complexity into clarity and ideas into outcomes.
            </p>
          </motion.div>

          <div className="relative overflow-hidden">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{ duration: 45, ease: "linear", repeat: Infinity }}
              className="flex w-max"
            >
              {[...Array(2)].flatMap(() =>
                [
                  { src: "/AbinBev.png", name: "AB InBev" },
                  { src: "/ABSA.png", name: "Absa" },
                  { src: "/ADA.png", name: "ADA" },
                  { src: "/AumentCapital.png", name: "Aument Capital" },
                  { src: "/BCBS.png", name: "Blue Cross Blue Shield" },
                  { src: "/CapeUnionMart.png", name: "Cape Union Mart" },
                  { src: "/cenegenics.png", name: "Cenegenics" },
                  { src: "/ChangeHealthCare.png", name: "Change Healthcare" },
                  { src: "/CharterBrands_Logo_Black.png", name: "Charter Brands" },
                  { src: "/CHC.png", name: "CHC" },
                  { src: "/GymShark.png", name: "Gymshark" },
                  { src: "/HCSC.png", name: "HCSC" },
                  { src: "/Hipten.png", name: "Hipten" },
                  { src: "/House-Of-Makers.png", name: "House of Makers" },
                  { src: "/Hudl-logo-print-pantone.jpg", name: "Hudl" },
                  { src: "/LANDSA.png", name: "LANDSA" },
                  { src: "/Navancio.png", name: "Navancio" },
                  { src: "/OBG.png", name: "OBG" },
                  { src: "/Reliant.png", name: "Reliant" },
                  { src: "/Synatic.png", name: "Synatic" },
                  { src: "/UrbanFindr.png", name: "UrbanFindr" },
                  { src: "/vt_team_logo.png", name: "VT Team" },
                ].map((logo, index) => (
                  <div key={`${index}-${logo.src}`} className="flex items-center px-8 shrink-0">
                    <Image
                      src={logo.src}
                      alt={`${logo.name} logo`}
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
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-800 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
          <h2 className="text-3xl font-bold mb-6 text-white">
            Ready to Connect Your Revenue Systems?
          </h2>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            Tell us about your revenue systems and we'll show you where AI agents and RevOps can help.
          </p>

            <Link
              href={site.cta.href}
              className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-8 rounded-md transition-all inline-flex items-center justify-center gap-2"
            >
              {site.cta.label} <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
