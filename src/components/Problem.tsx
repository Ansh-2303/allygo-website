import { motion } from 'framer-motion';
import { Book, Wallet, Home, Users } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const problems = [
  {
    icon: Book,
    title: 'Academic Overload',
    description: 'Too much work, no quick help',
  },
  {
    icon: Wallet,
    title: 'Empty Pockets',
    description: 'Limited ways to earn on campus',
  },
  {
    icon: Home,
    title: 'Daily Hassles',
    description: 'Finding trusted PGs, mess, laundry',
  },
  {
    icon: Users,
    title: 'Disconnected',
    description: 'Hard to find reliable peers',
  },
];

const Problem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="problem" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-black mb-4">
            Being a student is harder than it looks.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#FF6B00] to-[#48B2B7] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{problem.title}</h3>
                <p className="text-gray-600 leading-relaxed">{problem.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Problem;
