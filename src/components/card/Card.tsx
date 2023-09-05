import { CardStyles } from "./card.styles";

export const Card = ({...props}) => {
	return (
		<CardStyles>
			<div className="card">
			<div className="card__header">
				<img className="card__header-img" src={props.imageUrl} alt={props.title} />
			</div>
			<div className="card__main">
				<h2 className="card__main-titleMovie">{props.title}</h2>
				<h4 className="card__main-country">
					Country: {props.country}
				</h4>
				<h4 className="card__main-country">
					Year: {props.year}
				</h4>
				<h5 className="card__main-scoreMovie">
					Score: {props.score}/5
				</h5>
				<div className="card__main-div">
					<h6 className="card__main-div-genreMovie">
						Genres:
						<ul className="card__main-div-ul">
							<li className="card__main-div-ul-genresList">{props.genresArray.join(', ')}</li>
						</ul>
					</h6>
				</div>
			</div>
			</div>
		</CardStyles>
	);
};
