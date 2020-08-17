import React from 'react';
import Lottie from 'react-lottie';
import errorAnimation from '../../assets/lotties/error404.json';
import { Link } from 'react-router-dom';

import './styles.css';

const Page404: React.FC = () => {
	const defaulOptions = {
		loop: true,
		autoplay: true,
		animationData: errorAnimation,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};

	return (
		<div id="page-404-error">
			<div className="container">
				<div className="content">
					<Lottie options={defaulOptions} height={120} width={120} />
					<h1>Oops! Página não encontrada...</h1>
					<p>
						Mas fique tranquilo! Por que não tenta retornar para a página
						inicial para encontrar outro caminho?
					</p>
				</div>
				<div className="footer">
					<Link to="/">Página Inicial</Link>
				</div>
			</div>
		</div>
	);
};

export default Page404;
