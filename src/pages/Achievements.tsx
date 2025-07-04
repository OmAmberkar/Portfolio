import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Achievements = () => {
  return (
    <section className="min-h-[70vh] bg-gradient-to-t from-black to-blue-800 text-blue-200 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <motion.h2
          className="text-4xl pb-4 font-bold text-center bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 text-transparent bg-clip-text mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🏃🏿‍♂️‍➡️ My Coding Journey
        </motion.h2>

        {/* LeetCode Stats */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl pb-4 font-bold text-center bg-blue-100 text-transparent bg-clip-text mb-12">
              Leet Code Stats
          </h2>
          <Tilt tiltMaxAngleX={30} tiltMaxAngleY={30} scale={1.2} transitionSpeed={100} glareEnable={true} glareMaxOpacity={0.} className="w-full" >
          
          <div className="max-w-[500px] mx-auto bg-[#1e1e1e] p-4 rounded-xl shadow-lg border border-blue-800">
            <img
              src="https://leetcard.jacoblin.cool/Om_Amberkar?theme=dark&font=baloo"
              alt="LeetCode Stats"
              className="w-full rounded-md"
            />
          </div>
           </Tilt>
        </motion.div>
       
        

        {/* GitHub Heatmap */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl pb-4 font-bold text-center bg-blue-100 to-blue-500 text-transparent bg-clip-text mb-12">
            Github HeatMap
          </h2>
          <Tilt tiltMaxAngleX={30} tiltMaxAngleY={30} scale={1.2} transitionSpeed={100} glareEnable={true} glareMaxOpacity={0.} className="w-full" >
        
          <div className="max-w-[800px] mx-auto bg-[#1e1e1e] p-4 rounded-xl shadow-lg border border-blue-800">
            <img
              src="https://ghchart.rshah.org/OmAmberkar"
              alt="GitHub Heatmap"
              className="w-full rounded-md"
            />
          </div>
          </Tilt>
        </motion.div>
         
      </div>
    </section>
  );
};

export default Achievements;
