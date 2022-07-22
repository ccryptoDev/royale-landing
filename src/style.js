import styled from "styled-components";
import BgImage from "./assets/launcher-bg.png";

export const PageContainer = styled.div`
	background: linear-gradient(120.36deg, #191C21 -2.08%, #0B1014 71.5%);
	width: 100vw;
	height: 100vh;
`;

export const HomeBg = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

export const BottomLeft = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;

	img {
		width: 80%;
	}
`;

export const TopRight = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	img {
		width: 50%;
		height: 20%;
		float: right;
	}
`;

export const HeaderWrapper = styled.div`
	position: absolute;
	top: 32px;
	left: 15%;
	width: 145px;
	height: 89px;
`;

export const LauncherContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media (max-width: 500px) {
		img {
			position: absolute;
			top: 2%;
			left: 2%;
			width: 17px;
			height: 15px;
		}
	}
`;

export const ComingSoon = styled.h1`
	margin-top: 80px;
	font-family: Work Sans;
	font-weight: 600;
	font-size: 80px;
	line-height: 88px;
	text-align: center;
	letter-spacing: 0.01em;
	color: #FFFFFF;
`;

export const ComingSoonText = styled.p`
	font-family: SF Pro Text;
	font-size: 24px;
	line-height: 32px;
	text-align: center;
	letter-spacing: 0.01em;
	color: #A0A5AD;
	max-width: 720px;
	margin-top: 32px;
	margin-bottom: 0;
`;

export const BtnContainer = styled.div`
	margin-top: 40px;
	padding: 22px 31px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const YourSubmitGame = styled.a`
	color: white;
    text-decoration: none;
    font-weight: 600;
	font-size: 16px;
	line-height: 32px;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const GoToContainer = styled.div`
	background: conic-gradient(from 180deg at 50% 50%, #FFFFFF 0deg, #000000 51.64deg, #FFFFFF 79.77deg, #000000 141.65deg, #FFFFFF 194.15deg, #000000 254.15deg, #FFFFFF 286.03deg, #000000 331.03deg, #FFFFFF 360deg), conic-gradient(from 180deg at 50% 50%, #FFFFFF 0deg, #000000 51.64deg, #FFFFFF 79.77deg, #000000 141.65deg, #FFFFFF 194.15deg, #000000 254.15deg, #FFFFFF 286.03deg, #000000 331.03deg, #FFFFFF 360deg), radial-gradient(95% 95% at 36.4% 1.4%, #F7D4CB 0%, #FFFAE2 20.64%, rgba(255, 186, 255, 0.850701) 42.07%, #FFD5B7 62.26%, #FFFEE2 80.49%, #79A2F2 100%);
	background-blend-mode: screen, difference, normal;
	mix-blend-mode: normal;
	box-shadow: 2px 2px 0px rgba(66, 80, 92, 0.82);
	border-radius: 8px;
	cursor: pointer;
	letter-spacing: 0.01em;
	color: #263339;
	width: 201px;
	height: 48px;
	margin-left: 24px;
`;

export const GoToApp = styled.a`
	text-decoration: none;
	color: #263339;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 600;
	font-size: 16px;
	line-height: 32px;
`;

export const LinksContainer = styled.div`
	position: absolute;
	margin-left: auto;
	margin-right: auto;
	bottom: 12%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 500px) {
		margin-top: 10px;
	}
`;

export const SocialLinks = styled.div`
	width: 64px;
	height: 64px;
	margin-left: 12px;
	margin-right: 12px;
	cursor: pointer;

	img {
		width: 100%;
		height: 100%;
	}
`;
