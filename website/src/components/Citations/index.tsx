import Styles from './styles.module.scss';
import type {Citations} from './types';
import publications from "../../../public/publications.json"

export const CitationsFormatted = ( ) => {



	return(
		<div>
			{publications.map((citation) => {
				     
				return (
					<div className="grid grid-flow-col gap-4">
					<h6> {citation.Title}</h6>
					</div>
				)})}
		</div>
	)
}

export default CitationsFormatted