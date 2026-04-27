import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Users as UsersIcon, Search, Flag } from 'lucide-react';

const roles = [
  {
    icon: TrendingUp,
    title: 'Growth & Marketing',
    description: 'Drive user acquisition and engagement',
  },
  {
    icon: UsersIcon,
    title: 'Community Building',
    description: 'Foster connections on campus',
  },
  {
    icon: Search,
    title: 'Product Research',
    description: 'Understand student needs deeply',
  },
  {
    icon: Flag,
    title: 'Campus Ambassadors',
    description: 'Be the face of AllyGo',
  },
];

const Internships = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="internships" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-black mb-6">Build With Us.</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We are looking for passionate students to join our founding team.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#48B2B7] transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B00] to-[#48B2B7] rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-lg font-bold text-black mb-2">{role.title}</h3>
                <p className="text-gray-600 text-sm">{role.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          {/* UPDATED BUTTON: Now a link with Orange styling */}
          <a 
            href="https://forms.gle/n2hEUBK3oVXgNjn18"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#FF6B00] px-10 py-4 rounded-xl border-2 border-[#FF6B00] hover:bg-[#FF6B00] hover:text-white transition-all font-bold text-lg"
          >
            Apply for Internship
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Internships;