import React from 'react';
import {Link} from 'react-router-dom'

import imgSignUpSucess from '../../assets/images/signup-success.png'

import './styles.css';

const Success: React.FC = () => {
	return (
		<div id="page-signup-success">
			<div className="container">
				<div className="content">
					<img src={imgSignUpSucess} alt="Sign Up Success"/>
					<h1>Oops! Página não encontrada...</h1>
					<p>
						Mas fique tranquilo! Por que não tenta retornar para a página
						inicial para encontrar outro caminho?
					</p>
				</div>
				<div className="footer">
					<Link to="/">Fazer Login</Link>
				</div>
			</div>
		</div>
	);
};

export default Success;
