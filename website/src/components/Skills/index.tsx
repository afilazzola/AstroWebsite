import { h } from 'preact';
import Styles from './styles.module.scss';


export default function SkillSets() {

	const skills = {
		"SkillType": [
			"Data Science","Data Science","Data Science","Data Science","Data Science",
			"Web Dev","Web Dev","Web Dev","Web Dev","Web Dev",
			"Analytics","Analytics","Analytics","Analytics","Analytics"],
		"Skill": [
			"R","Git","Bash","Python","SQL",
			"JS/TS","HTML/CSS","Node","Astro","React",
			"GIS","GLMMs","Data Viz","Ordinations","ML"],
		"SkillLevel": [
			"100%","80%","80%","50%","40%",
			"80%","80%","60%","50%","50%",
			"100%","90%","90%","80%","50%"]
	}

	const allSkills = [
		"R","Git","Bash","Python","SQL",
		"JS/TS","HTML/CSS","Node","Astro","React",
		"GIS","GLMMs","Data Viz","Ordinations","ML"]

	const skillLevels = [
		
		"100%","80%","80%","50%","40%",
		"80%","80%","60%","50%","50%",
		"100%","90%","90%","80%","50%"

	]


	return(
<div> 
	  <div className={Styles.skillSets}>
		<h2 className="text-xl font-bold py-4"> {skills.SkillType[0]} </h2>
	<div className = {Styles.row}>
			{allSkills.map((skill, index) => {
				return(
					
		<div className = {Styles.column}>
		<h2 className="text-lg py-2"> {skill} </h2>
			
	<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
	  <div className="bg-orange-400 h-2.5 rounded-full" style={{width: skillLevels[index]}}></div>
	</div>
	</div>
			)})}
	</div>
	</div>
	
			</div>
	)
	}