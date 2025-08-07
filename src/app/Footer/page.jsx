import { motion } from 'framer-motion';
function Footer() {
    const footerLinks = [
    {
        title: "Company",
        links: ["About Us", "Careers", "Blog", "Press"]
    },
    {
        title: "Services",
        links: ["Consulting", "Development", "Analytics", "Support"]
    },
    {
        title: "Resources",
        links: ["Case Studies", "Whitepapers", "Webinars", "FAQ"]
    }
];
    return (
        <footer className="px-6 py-12 bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-white mb-4">
                        CompanyName
                    </h3>
                    <p className="mb-4">Innovative solutions for modern businesses.</p>
                    <div className="flex space-x-4">
                        {['Twitter', 'LinkedIn', 'Facebook'].map((social, index) => (
                            <a key={index} href="#" className="text-gray-400 hover:text-white transition-colors">
                                {social}
                            </a>
                        ))}
                    </div>
                </motion.div>

                {footerLinks.map((column, colIndex) => (
                    <motion.div
                        key={colIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: colIndex * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-white font-bold mb-4">{column.title}</h4>
                        <ul className="space-y-2">
                            {column.links.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-800 text-center text-gray-500">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    © {new Date().getFullYear()} CompanyName. All rights reserved.
                </motion.p>
            </div>
        </footer>
    )
}

export default Footer;