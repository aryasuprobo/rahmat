// src/app/components/Footer.js

const Footer = () => {
    return (
        <footer className=" bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg py-4 mb-8 text-center mt-6">
            <p className="text-sm">
                © {new Date().getFullYear()} Klinik Hewan. Hak Cipta Dilindungi.
            </p>
            <p className="text-xs">
                Dibuat dengan Next.js dan Firebase | Desain oleh Pulau ES
            </p>
        </footer>
    );
};

export default Footer;
