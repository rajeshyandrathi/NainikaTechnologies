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
    id: "cloud-application-development",
    icon: <Code size={32} />,
    title: "Cloud Application Development",
    description: "We design and build scalable, secure, and high-performance cloud-native applications tailored to your business goals. From modernizing legacy systems to developing next-generation applications, we deliver solutions that are agile, future-ready, and cloud-optimized.",
    image: "/Cloud-Application-Development.jpeg",
    features: [
      "Custom application development for cloud environments",
      "Legacy system modernization with minimal disruption",
      "Mobile and web app development",
      "API-first development and microservices architecture",
      "Serverless computing and event-driven architecture implementation",
      "Robust security design and compliance adherence",
      "Integration with platforms like Salesforce, AWS, Azure, Google Cloud, and HubSpot"
    ]
  },
  {
    id: "web-development",
    icon: <Globe size={32} />,
    title: "Innovative Web & Mobile Development",
    description: "We create engaging, high-performance websites and mobile applications that deliver exceptional user experiences across all platforms and devices.",
    image: "/Website-Mobile-App-Design-Development.jpeg",
    features: [
      "Responsive, mobile-first website design",
      "Progressive Web Applications (PWAs)",
      "Custom Content Management Systems (CMS)",
      "Web portals for internal and external users",
      "UI/UX design, wireframing, and performance optimization",
      "Custom iOS and Android app development",
      "Native and cross-platform apps using React Native, Flutter, Swift, or Kotlin",
      "API integration and scalable backend development"
    ]
  },
  {
    id: "cloud-implementation",
    icon: <Cloud size={32} />,
    title: "Enterprise Cloud Architecture & Migration",
    description: "We help organizations modernize and scale through seamless cloud migration and intelligent architecture design, ensuring cost-effective, secure, and scalable cloud environments.",
    image: "/Cloud Architecture.jpeg",
    features: [
      "Cloud migration strategy and execution",
      "Cloud infrastructure planning, design, and optimization",
      "Serverless architecture implementation for scalability and cost-efficiency",
      "Cloud security, governance, and regulatory compliance",
      "Hybrid and multi-cloud environment setup and management",
      "Cost control, performance tuning, and monitoring setup",
      "Disaster recovery planning and high availability design",
      "Cloud resource automation using Terraform and CloudFormation"
    ]
  },
  {
    id: "custom-integrations",
    icon: <Database size={32} />,
    title: "API-Driven Integration & Intelligent Automation",
    description: "Connecting disparate systems and automating workflows to streamline operations, improve data accuracy, and boost productivity across your enterprise.",
    image: "/API Integration.jpeg",
    features: [
      "Enterprise application and system integration",
      "Data integration, transformation, and ETL processes",
      "CRM and ERP integration for unified business data",
      "Third-party API development and integration",
      "Middleware design and workflow orchestration",
      "Intelligent automation with RPA and workflow engines",
      "Real-time data synchronization and event-driven architecture",
      "API management, monitoring, and security best practices"
    ]
  },
  {
    id: "ecommerce-solutions",
    icon: <ShoppingBag size={32} />,
    title: "AI-Powered E-commerce Solutions",
    description: "Building scalable, intelligent e-commerce platforms designed to drive growth, optimize customer experience, and streamline online business operations.",
    image: "/Ecommerce.jpeg",
    features: [
      "Custom e-commerce platform development tailored to your business needs",
      "Shopify and WooCommerce store setup, customization, and optimization",
      "Secure payment gateway integration for smooth transactions",
      "Advanced inventory and order management systems",
      "Omnichannel retail solutions for unified customer engagement",
      "AI-powered product recommendations and personalized shopping experiences",
      "Automated marketing and customer segmentation using AI analytics",
      "Scalable cloud hosting and performance optimization"
    ]
  },
  {
    id: "quality-assurance",
    icon: <TestTube size={32} />,
    title: "Intelligent Quality Engineering",
    description: "Implementing rigorous and intelligent testing methodologies to ensure flawless performance, security, and reliability throughout the software development lifecycle.",
    image: "/Quality Assurance.jpeg",
    features: [
      "Automated testing frameworks for consistent quality assurance",
      "Performance, load, and stress testing to validate scalability",
      "Comprehensive security testing to identify vulnerabilities",
      "User acceptance testing (UAT) to meet business requirements",
      "Continuous integration and continuous delivery (CI/CD) pipelines",
      "Test automation strategy and maintenance",
      "Real-time monitoring and analytics for quality metrics"
    ]
  }
];
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-blue-50 py-20 px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative z-10 max-w-7xl mx-auto text-center text-black"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-cyan-600">Services</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-black">
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
