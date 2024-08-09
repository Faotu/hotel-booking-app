const Footer = () => {
  return (
    <div className="bg-green-700 py-10 ">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
          TessyHotels.com
        </span>
        <span className="text-white font-bold tracking-tight flex gap-4 ">
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Terms and Services</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
