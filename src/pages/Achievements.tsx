const Achievements = () => {
  return (
    <div className="text-center space-y-8 p-4">
      <h2 className="text-3xl font-bold">My Coding Journey</h2>
      
      <div>
        <h3 className="text-xl font-semibold mb-2">LeetCode Stats</h3>
        <img 
          src="https://leetcard.jacoblin.cool/Om_Amberkar?theme=light&font=baloo"
          alt="LeetCode Stats"
          className="mx-auto rounded-lg shadow-md"
        />
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">GitHub Heatmap</h3>
        <img 
          src="https://ghchart.rshah.org/OmAmberkar"
          alt="GitHub Heatmap"
          className="mx-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default Achievements;
