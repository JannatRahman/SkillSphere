import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200">

      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300 blur-3xl rounded-full opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-rose-300 blur-3xl rounded-full opacity-30"></div>

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold text-gray-800">
              🎓 SkillSphere
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed">
              A modern online learning platform where users can explore
              courses, watch lessons, and enroll in skill-based programs like
              Web Development, Design, Marketing, and more.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-gray-800 mb-4">
              📞 Contact Info
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>Email: support@skillsphere.com</li>
              <li>Phone: +880 123 456 789</li>
              <li>Location: Dhaka, Bangladesh</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-bold text-gray-800 mb-4">
              🌐 Social Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="#" className="hover:text-pink-500 transition">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-pink-500 transition">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-pink-500 transition">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>

          {/* Terms */}
          <div>
            <h3 className="text-sm font-bold text-gray-800 mb-4">
              📄 Legal
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                
                  About Us
              
              </li>
              <li>
               
                  Terms & Conditions
                
              </li>
              <li>
                
                  Privacy Policy
               
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-12 h-px bg-white/50"></div>

        {/* Bottom */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-3">

          <p>
            © {new Date().getFullYear()} SkillSphere. All rights reserved.
          </p>

          <div className="flex gap-6">
            
              Privacy
           
            
              Terms
            
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;