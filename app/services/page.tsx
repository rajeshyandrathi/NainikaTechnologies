"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { ArrowRight, CheckCircle, Code, Cloud, Database, Globe, ShoppingBag, TestTube } from "lucide-react";

export default function ServicesPage() {
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

  const services = [
    {
      id: "software-development",
      icon: <Code size={32} />,
      title: "Cloud-Native Application Development",
      description: "Custom-built applications tailored to your specific business needs and objectives.",
      image: "https://cdn.pixabay.com/photo/2023/06/23/05/08/software-8082767_1280.jpg",
      features: [
        "Custom application development",
        "Legacy system modernization",
        "Mobile app development",
        "API development and integration",
        "Enterprise software solutions"
      ]
    },
    {
      id: "web-development",
      icon: <Globe size={32} />,
      title: "Innovative Web & Mobile Development",
      description: "Engaging, high-performance websites and web applications that deliver exceptional user experiences.",
      image: "https://st4.depositphotos.com/12981370/24312/i/1600/depositphotos_243120806-stock-photo-programmer-working-software-development-coding.jpg",
      features: [
        "Responsive website design",
        "Progressive Web Applications (PWAs)",
        "Content Management Systems",
        "Web portal development",
        "UI/UX design and optimization"
      ]
    },
    {
      id: "cloud-implementation",
      icon: <Cloud size={32} />,
      title: "Enterprise Cloud Architecture & Migration",
      description: "Seamless migration and optimization of cloud environments for improved efficiency and scalability.",
      image: "https://freerangestock.com/sample/140034/cloud-computing--digital-cloud-on-circuit-board.jpg",
      features: [
        "Cloud migration strategy",
        "AWS, Azure, and Google Cloud solutions",
        "Cloud infrastructure optimization",
        "Serverless architecture implementation",
        "Cloud security and compliance"
      ]
    },
    {
      id: "custom-integrations",
      icon: <Database size={32} />,
      title: "API-Driven Integration & Intelligent Automation",
      description: "Connecting disparate systems for streamlined operations and enhanced productivity.",
      image: "https://static.vecteezy.com/system/resources/previews/008/804/844/original/integration-data-system-system-integration-technology-concept-in-wireframe-hands-industrial-and-smart-technology-business-and-automation-solutions-illustration-vector.jpg",
      features: [
        "Enterprise application integration",
        "Data integration and ETL",
        "CRM and ERP integration",
        "Third-party API integration",
        "Middleware development"
      ]
    },
    {
      id: "ecommerce-solutions",
      icon: <ShoppingBag size={32} />,
      title: "AI-Powered E-commerce Solutions",
      description: "Scalable platforms designed for online business success and growth.",
      image: "https://img.freepik.com/premium-photo/ecommerce-hd-8k-wallpaper-stock-photographic-image_890746-30616.jpg?w=2000",
      features: [
        "Custom ecommerce development",
        "Shopify and WooCommerce solutions",
        "Payment gateway integration",
        "Inventory management systems",
        "Omnichannel retail solutions"
      ]
    },
    {
      id: "quality-assurance",
      icon: <TestTube size={32} />,
      title: "Intelligent Quality Engineering",
      description: "Rigorous testing methodologies ensuring flawless performance and reliability.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
      features: [
        "Automated testing frameworks",
        "Performance and load testing",
        "Security testing",
        "User acceptance testing",
        "Continuous integration/continuous delivery"
      ]
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-cyan-900 to-blue-900"></div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative z-10 max-w-7xl mx-auto text-center text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-cyan-400">Services</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-200">
            Explore our comprehensive range of technology solutions designed to help your business thrive in the digital age.
          </p>
        </motion.div>
      </section>

      {/* Services List */}
      <section className="py-16 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-24"
          >
            {services.map((service, index) => {
              const [ref, inView] = useInView({
                triggerOnce: true,
                threshold: 0.1,
              });

              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  ref={ref}
                  variants={fadeIn}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={`order-1 ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
                    <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className={`order-2 ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400 rounded-lg">
                        {service.icon}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 mb-6">
                      {service.description}
                    </p>
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">
                      Key Features:
                    </h3>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: idx * 0.1, duration: 0.5 }}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle className="text-cyan-600 mt-1 flex-shrink-0" size={20} />
                          <span className="text-slate-700 dark:text-slate-200">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-200">
              Contact us today to discuss how our services can help you achieve your business goals.
            </p>
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-cyan-800 font-medium py-3 px-8 rounded-md transition-all inline-flex items-center justify-center gap-2"
            >
              Get in Touch <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
