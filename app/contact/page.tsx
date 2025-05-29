"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

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
            Contact <span className="text-cyan-400">Us</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-200">
            Get in touch with our team to discuss how Cloudforce Technologies can help your business succeed.
          </p>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-slate-800 dark:text-white">
                Get in <span className="text-cyan-600">Touch</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-8">
                We'd love to hear from you. Fill out the form and our team will get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400 rounded-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-1">
                      Our Location
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                  1 Boschendal, 28 Harry Galaun Dr<br />
                  Halfway Gardens, Midrand, South Africa, 1686
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400 rounded-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-1">
                      Email Us
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      info@cftechnologies.co.za
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400 rounded-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-1">
                      Call Us
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      +27 68 890 6854
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={`w-full px-4 py-2 rounded-md border ${
                      errors.name ? "border-red-500" : "border-slate-300 dark:border-slate-600"
                    } bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                    placeholder=""
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`w-full px-4 py-2 rounded-md border ${
                      errors.email ? "border-red-500" : "border-slate-300 dark:border-slate-600"
                    } bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                    placeholder=""
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder=""
                      {...register("phone")}
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Company Name
                    </label>
                    <input
                      id="company"
                      type="text"
                      className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder=""
                      {...register("company")}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`w-full px-4 py-2 rounded-md border ${
                      errors.message ? "border-red-500" : "border-slate-300 dark:border-slate-600"
                    } bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                    placeholder=""
                    {...register("message")}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-6 rounded-md transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <ArrowRight size={18} />
                    </>
                  )}
                </button>

                {isSuccess && (
                  <div className="p-4 bg-green-100 text-green-800 rounded-md">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
  <section className="py-20 px-4 bg-slate-100 dark:bg-slate-800/50">
  <div className="max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl font-bold mb-4 text-slate-800 dark:text-white">
        Our <span className="text-cyan-600">Location</span>
      </h2>
      <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
        Visit us at our Midrand office. Use the map below to find directions.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-xl shadow-lg"
    >
      <iframe
        title="Our Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.0533280523784!2d28.12112127532317!3d-25.989064077231155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956bd27be5295b%3A0x57fe84cd372c1746!2s1%20Boschendal%2C%2028%20Harry%20Galaun%20Dr%2C%20Halfway%20Gardens%2C%20Midrand%2C%201686%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1716998916691!5m2!1sen!2sus"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[450px] rounded-xl border-0"
      ></iframe>
    </motion.div>
  </div>
</section>
    </div>
  );
}
