import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

export default function CcFooter() {
  return (
    <div className="outer bg-gradient-to-r from-[#B0E5F2] to-[#0071BC] text-[#3E5C75] flex flex-col items-center justify-center mx-0 h-[250px] md:h-[300px] rounded-3xl shadow-lg">
      <div className="inner bg-white h-[220px] w-[95%] md:h-[250px] md:w-[90%] rounded-3xl p-4 md:p-8 flex flex-col justify-between shadow-md">
        <div className="items flex flex-wrap items-center justify-evenly space-x-2 md:space-x-16 mt-4 mb-6 md:mt-5 md:mb-8">
          <ul className="space-y-1 md:space-y-3 text-center md:text-left">
            <li className="text-xs md:text-lg font-semibold text-gray-900 uppercase tracking-wide">Company</li>
            <li className="text-[10px] md:text-sm text-gray-600 hover:text-gray-900 transition duration-300">What's New</li>
            <li className="text-[10px] md:text-sm text-gray-600 hover:text-gray-900 transition duration-300">About Us</li>
            <li className="text-[10px] md:text-sm text-gray-600 hover:text-gray-900 transition duration-300">Contact Us</li>
          </ul>

          <ul className="space-y-1 md:space-y-3 text-center md:text-left">
            <li className="text-xs md:text-lg font-semibold text-gray-900 uppercase tracking-wide">Community</li>
            <li className="text-[10px] md:text-sm text-gray-600 hover:text-gray-900 transition duration-300">CureCart for Business</li>
            <li className="text-[10px] md:text-sm text-gray-600 hover:text-gray-900 transition duration-300">Our Impact</li>
            <li className="text-[10px] md:text-sm text-gray-600 hover:text-gray-900 transition duration-300">Join Us</li>
          </ul>

          <ul className="md:block hidden space-y-1 md:space-y-3 text-center md:text-left">
            <li className="text-xs md:text-lg font-semibold text-gray-900 uppercase tracking-wide">Cure Cart Family</li>
            <li className="text-[10px] md:text-sm text-gray-600 hover:text-gray-900 transition duration-300">CureCart for Business</li>
            <li className="text-[10px] md:text-sm text-gray-600 hover:text-gray-900 transition duration-300">Salman Impact</li>
            <li className="text-[10px] md:text-sm text-gray-600 hover:text-gray-900 transition duration-300">Salman Impact</li>
          </ul>

          <ul className="space-y-1 md:space-y-3 text-center md:text-left">
            <li className="text-xs md:text-lg font-semibold text-gray-900 uppercase tracking-wide">Support</li>
            <li className="text-[10px] md:text-sm text-gray-600 hover:text-gray-900 transition duration-300">Getting Started</li>
            <li className="text-[10px] md:text-sm text-gray-600 hover:text-gray-900 transition duration-300">FAQs</li>
            <li className="text-[10px] md:text-sm text-gray-600 hover:text-gray-900 transition duration-300">Report a Violation</li>
          </ul>
        </div>

        <div className="w-full flex items-center justify-between px-[1rem] md:px-[6rem] text-zinc-500">
          <div className="footer-logo flex items-center justify-center">
            <img src="../../../pictures/smalllogo.png" width={110} md:width={130} alt="Logo" className="mix-blend-multiply" />
          </div>
          <div className="flex space-x-3 md:space-x-4">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#E4405F] transition duration-300">
              <BsInstagram className="text-base md:text-xl" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#4267B2] transition duration-300">
              <BsFacebook className="text-base md:text-xl" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#1DA1F2] transition duration-300">
              <BsTwitter className="text-base md:text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
