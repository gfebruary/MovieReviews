const Footer = () => {
  return (
    <footer className="relative flex bg-gray-800 text-gray-400 text-sm py-10 mt-8 md:mt-0">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
        <div className="space-y-2 text-center md:text-left">
          <p className="hover:text-orange-500 cursor-pointer">About Us</p>
          <p className="hover:text-orange-500 cursor-pointer">Contact</p>
          <p className="hover:text-orange-500 cursor-pointer">Privacy Policy</p>
        </div>
        <div className="space-y-2 text-center md:text-left">
          <p className="hover:text-orange-500 cursor-pointer">
            Terms of Service
          </p>
          <p className="hover:text-orange-500 cursor-pointer">Careers</p>
          <p className="hover:text-orange-500 cursor-pointer">Blog</p>
        </div>
        <div className="space-y-2 text-center md:text-left">
          <p className="hover:text-orange-500 cursor-pointer">Support</p>
          <p className="hover:text-orange-500 cursor-pointer">FAQ</p>
          <p className="hover:text-orange-500 cursor-pointer">Help Center</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
