import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageSquare, UserPlus, Handshake, TrendingUp } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Post a Need',
    description: 'Academic or campus service',
  },
  {
    number: '02',
    icon: UserPlus,
    title: 'Connect with an Ally',
    description: 'Find trusted peer support',
  },
  {
    number: '03',
    icon: Handshake,
    title: 'Collaborate & Complete',
    description: 'Work together seamlessly',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Learn or Earn',
    description: 'Grow skills and income',
  },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-black mb-4">How It Works</h2>
          <p className="text-lg text-gray-600">Simple steps to connect and collaborate</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-1/3 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B00] to-[#48B2B7] opacity-20"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100"
              >
                <div className="absolute -top-4 left-8 w-12 h-12 bg-gradient-to-br from-[#FF6B00] to-[#48B2B7] rounded-xl flex items-center justify-center font-black text-white text-lg shadow-lg">
                  {step.number}
                </div>

                <div className="mt-6 mb-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-[#FF6B00]" strokeWidth={2} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-black mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
