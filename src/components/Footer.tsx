const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-12 px-4">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <img 
            src="https://scontent.fmli2-1.fna.fbcdn.net/v/t39.30808-6/481260423_10230962476503788_1949751788931603672_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=2mDAmAvxSnMQ7kNvwF8F7BL&_nc_oc=Adl362wkeGiBcpAryqC_NlduqG32_JDkvHYV3kmNaVoWBrpr1TPe-6c7QCo6dAx28Gc&_nc_zt=23&_nc_ht=scontent.fmli2-1.fna&_nc_gid=2Hef_QA1HzieN6E7XqeaTw&oh=00_AfJDfSK_xt2RDf4P3jvkxusDa5MeMUrtvaKNvP48he4A8g&oe=68453D34" 
            alt="VoltEdge Lawn Solutions Logo" 
            className="h-10 w-auto"
          />
          <div>
            <h3 className="text-xl font-bold">VoltEdge Lawn Solutions</h3>
            <p className="text-green-200">Quiet, powerful, 100% electric lawn care</p>
          </div>
        </div>
        <p className="text-green-200 mb-4">
          Serving the Quad Cities & Beyond with eco-friendly electric lawn care since day one.
        </p>
        <p className="text-green-300">
          © 2024 VoltEdge Lawn Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;