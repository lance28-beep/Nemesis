'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="section-title">
            Stay <span className="text-gradient">Updated</span>
          </h2>
          <p className="section-subtitle">
            Subscribe to our newsletter for the latest updates, insights, and web development tips.
            Join our community of digital innovators.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex max-w-md mx-auto"
        >
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-lg border border-gray-700 bg-white/5 pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:border-primary-purple focus:outline-none focus:ring-1 focus:ring-primary-purple"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={status === 'loading'}
                className="btn-primary magnetic-button whitespace-nowrap"
              >
                {status === 'loading' ? (
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                    Subscribing...
                  </div>
                ) : status === 'success' ? (
                  'Subscribed!'
                ) : status === 'error' ? (
                  'Try Again'
                ) : (
                  'Subscribe'
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 text-center text-sm text-gray-400"
        >
          We respect your privacy. Unsubscribe at any time.
        </motion.p>
      </div>
    </section>
  );
} 