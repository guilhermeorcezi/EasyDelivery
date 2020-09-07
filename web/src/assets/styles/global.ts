import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root{
    --color-background: #f0f0f7;
	--color-primary-lighter:#ffaaa6;
	--color-primary-light: #fd908b;
	--color-primary:#f86f68;
	--color-primary-dark: #d85d56;
	--color-primary-darker: #bd463f;
	--color-secundary: #5b3aba;
	--color-secundary-dark: #563f97;
	--color-title-in-primary: #ffffff;
	--color-text-in-primary: #fff;
	--color-text-title: #32264d;
	--color-text-complement: #9c98a6;
	--color-text-base: #6a6180;
	--color-line-in-white: #e6e6f0;
	--color-input-background: #f8f8fc;
	--color-button-text: #ffffff;
	--color-box-base: #ffffff;
	--color-box-footer: #fafafc;
	--color-background-primary:#E5E5E5;
	--color-select-selected:#EBEBF5;
  --color-error:#c53030;

	font-size: 60%;
}

*{
    padding:0;
    margin:0;
    box-sizing:border-box;
}

html, body, #root{
    height: 100vh;
}

body{
    background: --var(--color-background)
}

#root{
    display:flex;
    align-items:center;
    justify-content:center;
}

body,input,button,textarea{
	font: 500 1.6rem Poppins;
	outline:0;
}

.input-initial{
  border-radius: 8px 8px 0px 0px;
}

.input-final{
  border-radius: 0px 0px 8px 8px;
}

@media (min-width: 700px) {
	:root {
		font-size: 62.5%;
	}
}
`;

export default GlobalStyle;
