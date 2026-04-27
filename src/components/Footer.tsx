import { Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B00] to-[#48B2B7] rounded-xl flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <span className="text-2xl font-bold">AllyGo</span>
          </div>

          <div className="flex items-center space-x-2 text-gray-400">
            <Mail className="w-5 h-5" />
            <a
              href="mailto:admin@allygo.in"
              className="hover:text-[#48B2B7] transition-colors font-medium"
            >
              admin@allygo.in
            </a>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://www.linkedin.com/company/allygo/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#48B2B7] transition-all hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/allygolimited?igsh=MTh2dDFqY3FjbWN5eQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FF6B00] transition-all hover:scale-110"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          <div className="pt-8 border-t border-white/10 w-full text-center">
            <p className="text-gray-400 text-sm">
              © 2026 AllyGo. An early-stage startup initiative. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
