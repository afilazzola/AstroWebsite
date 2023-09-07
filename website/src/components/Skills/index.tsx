export default function SkillSets() {
	const allSkills = [
	  "R", "Git", "Bash", "Python", "SQL",
	  "JS/TS", "HTML/CSS", "NodeJS", "Astro", "React",
	  "GIS", "GLMMs", "Data Viz", "Ordinations", "Machine Learning"
	];
  
	const skillLevels = [
	  "100%", "80%", "80%", "50%", "40%",
	  "80%", "80%", "60%", "50%", "50%",
	  "100%", "90%", "90%", "80%", "50%"
	];
  
	const skillsByCategory = [
	  allSkills.slice(0, 5),  // Data Science
	  allSkills.slice(5, 10), // Web Dev
	  allSkills.slice(10, 15) // Analytics
	];
  
	const skillLevelsByCategory = [
	  skillLevels.slice(0, 5),  // Data Science
	  skillLevels.slice(5, 10), // Web Dev
	  skillLevels.slice(10, 15) // Analytics
	];
  
	return (
	  <div className="flex flex-wrap">
		{skillsByCategory.map((categorySkills, categoryIndex) => (
		  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-8" key={categoryIndex}>
			<h2 className="text-xl font-bold py-4">
			  {["Data Science", "Web Dev", "Analytics"][categoryIndex]}
			</h2>
			{categorySkills.map((skill, index) => (
			  <div key={index}>
				<h2 className="text-lg py-2"> {skill} </h2>
				<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
				  <div
					className="bg-orange-400 h-2.5 rounded-full"
					style={{ width: skillLevelsByCategory[categoryIndex][index] }}
				  ></div>
				</div>
			  </div>
			))}
		  </div>
		))}
	  </div>
	);
  }
  