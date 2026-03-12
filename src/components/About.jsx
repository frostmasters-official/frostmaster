import Image from "next/image";
import { CheckCircle, Users, Clock, Award } from "lucide-react"; // Using Lucide icons for consistency
import all from "../../public/service/all.webp";

const AboutUs = () => {
  return (
    <section
      className="py-20 lg:py-28 bg-white font-general overflow-hidden"
      id="about"
    >
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image with Decorative Elements */}
          <div className="relative group">
            <div className="absolute -inset-4 rounded-2xl rotate-2 opacity-50 group-hover:rotate-1 transition-transform duration-500 blur-sm" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src={all}
                alt="Frost Masters Home Appliance Repair Team"
                width={600}
                height={800}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Stat Card */}
            <div className="absolute -bottom-10 -right-4 md:-right-10 bg-white p-6 rounded-xl shadow-xl border border-gray-100 animate-bounce-slow hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-[#B6F500] p-3 rounded-full">
                  <Users className="w-6 h-6 text-[#111B34]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#111B34] font-main">
                    5000+
                  </p>
                  <p className="text-sm text-gray-500 font-medium">
                    Happy Customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div>
              <span className="text-[#B6F500] font-bold tracking-widest uppercase text-sm mb-2 block">
                Who We Are
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111B34] leading-tight">
                Trusted Appliance <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#111B34] to-gray-600">
                  Repair Experts
                </span>
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed text-justify">
              At <span className="font-bold text-[#111B34]">Frost Masters</span>
              , we bring{" "}
              <span className="font-bold text-[#111B34]">
                4+ years of expertise
              </span>{" "}
              in restoring the comfort of your home. We understand that a broken
              appliance disrupts your life, which is why we provide fast,
              transparent, and high-quality repair services for all major brands
              in{" "}
              <span className="font-bold text-[#111B34]">
                Chennai & Coimbatore
              </span>
              .
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 py-2">
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-[#B6F500] transition-colors">
                <h4 className="text-3xl font-extrabold text-[#111B34] font-main mb-1">
                  4+
                </h4>
                <p className="text-sm font-semibold text-gray-500">
                  Years Successfully Completed
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-[#B6F500] transition-colors">
                <h4 className="text-3xl font-extrabold text-[#111B34] font-main mb-1">
                  5000+
                </h4>
                <p className="text-sm font-semibold text-gray-500">
                  Five-Star Reviews
                </p>
              </div>
            </div>

            {/* Features List */}
            <ul className="space-y-4">
              {[
                "Certified & Skilled Technicians",
                "100% Genuine Spare Parts",
                "Same-Day Doorstep Service",
                "1 Year Warranty on Repairs",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 group">
                  <CheckCircle className="text-[#B6F500] w-6 h-6 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-[#111B34] font-medium text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            {/* <div className="pt-4">
               <a href="tel:+916282450300" className="inline-flex items-center gap-2 bg-[#111B34] text-white px-8 py-4 rounded-full font-bold hover:bg-[#B6F500] hover:text-[#111B34] transition-all duration-300">
                  <span>Book a Repair</span>
               </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
