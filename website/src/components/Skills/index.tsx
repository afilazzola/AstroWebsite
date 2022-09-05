import Styles from './styles.module.scss';


export default function SkillSets() {

	const allSkills = [
		"R","Git","Bash","Python","SQL",
		"JS/TS","HTML/CSS","Node","Astro","React",
		"GIS","GLMMs","Data Viz","Ordinations","Machine Learning"]

	const skillLevels = [
		
		"100%","80%","80%","50%","40%",
		"80%","80%","60%","50%","50%",
		"100%","90%","90%","80%","50%"

	]


	return(
	  <div className={Styles.grid}>
		<div className="column">
		<h2 className="text-xl font-bold py-4"> Data Science</h2>
			{allSkills.slice(0, 5).map((skill, index) => {
				return(
					<div>
					<h2 className="text-lg py-2"> {skill} </h2>
			
	<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
	  <div className="bg-orange-400 h-2.5 rounded-full" style={{width: skillLevels[index]}}></div>
	</div>
	</div>
			)})}
	</div>
	<div className="column">
		<h2 className="text-xl font-bold py-4"> Web Dev</h2>
			{allSkills.slice(5, 10).map((skill, index) => {
				return(
					<div>
					

		<h2 className="text-lg py-2"> {skill} </h2>
			
	<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
	  <div className="bg-orange-400 h-2.5 rounded-full" style={{width: skillLevels[index+5]}}></div>
	</div>
	</div>
			)})}
			</div>
			<div className="column">
		<h2 className="text-xl font-bold py-4"> Analytics</h2>
			{allSkills.slice(10, 15).map((skill, index) => {
				return(
					<div>
					<h2 className="text-lg py-2"> {skill} </h2>
				<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
	  <div className="bg-orange-400 h-2.5 rounded-full" style={{width: skillLevels[index+10]}}></div>
	</div>
	</div>
			)})}
			</div>
				</div>

	
	)
	}