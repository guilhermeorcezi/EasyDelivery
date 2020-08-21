import React from 'react';
import {Link} from 'react-router-dom'

import imgSignUpSucess from '../../assets/images/signup-success.png'

import './styles.css';

interface Props{
	title:string;
	message:string;
	link:string;
}

const Success: React.FC<Props> = ({title, message, link}) => {
	return (
		<div id="page-signup-success">
			<div className="container">
				<div className="content">
					<img src={imgSignUpSucess} alt="Sign Up Success"/>
					<h1>{title}</h1>
					<p>
						{message}
					</p>
				</div>
				<div className="footer">
					<Link to="/">Voltar</Link>
				</div>
			</div>
		</div>
	);
};

export default Success;
