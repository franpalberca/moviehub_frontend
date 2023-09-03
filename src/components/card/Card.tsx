import { CardStyles } from "./card.styles";

export const Card = ({...props}) => {
	return (
		<CardStyles>
			<div className="card__header">
				<img className="card__header-img" src={props.imageUrl} alt={props.title} />
			</div>
			<div className="card__main">
				<p className="card__main-country">
					{props.country},{props.year}
				</p>
				<h2 className="card__main-titleMovie">{props.title}</h2>
				<h3 className="card__main-scoreMovie">
					Score: {props.score}/100
				</h3>
				<p></p>

				<div className="card__main-div">
					<h3 className="card__main-div-genreMovie">
						Genres:
						<ul className="card__main-div-ul">
							<li className="card__main-div-ul-genresList">{props.genresArray.join(', ')}</li>
						</ul>
					</h3>
				</div>
			</div>
		</CardStyles>
	);
};
