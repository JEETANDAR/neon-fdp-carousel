
import { motion } from "framer-motion";

export default function AboutDepartment() {
  return (
    <section className="py-20 relative" id="about-department">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center mb-8">
            <div className="mr-6">
              <img 
                src="src\components\pegasus.png" 
                alt="Pegasus Logo" 
                className="w-20 h-20 object-contain" 
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              About Our Department
            </h2>
          </div>

          <div className="glass-card p-8">
            <p className="text-gray-300 mb-4">
              The Department of Computer Science at our institution is committed to excellence in education, research, and innovation. Founded with a vision to create technology leaders of tomorrow, we offer a comprehensive curriculum that blends theoretical knowledge with practical skills.
            </p>
            <p className="text-gray-300 mb-4">
              Our faculty comprises renowned experts in various domains of computer science, including artificial intelligence, machine learning, cybersecurity, and software engineering. We pride ourselves on providing state-of-the-art facilities and a conducive learning environment.
            </p>
            <p className="text-gray-300">
              The Pegasus symbol represents our aspiration to soar high and achieve greatness in the field of computer science and technology. It embodies our commitment to excellence, innovation, and the pursuit of knowledge without boundaries.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
