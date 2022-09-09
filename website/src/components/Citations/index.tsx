import Styles from './styles.module.scss';
import type {Citations} from './types';
import publications from "../../../public/publications.json"

export const CitationsFormatted = ( ) => {



	return(
		<div>
			{publications.map((citation, index) => {
				     
				return (
					<div className="grid grid-flow-col gap-4">
					<h6>{index+1}. {citation.Authors} ({citation.Year}) {citation.Title} {citation.Journal} <a href={citation.Link}> Link </a> </h6> 
					</div>
				)})}
		</div>
	)
}

export default CitationsFormatted