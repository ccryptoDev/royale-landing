import {
	PageContainer,
	HomeBg,
	BottomLeft,
	TopRight,
	LauncherContainer,
	ComingSoon,
	ComingSoonText,
	BtnContainer,
	YourSubmitGame,
	GoToContainer,
	GoToApp,
	LinksContainer,
	SocialLinks,
} from "./style";
import RoyaleLogo from "./assets/Logo.png";
import TwitterLogo from "./assets/icon-twitter.png";
import TelegramLogo from "./assets/icon-telegram.png";
import MediumLogo from "./assets/icon-medium.png";
import BottomLeftBg from "./assets/bottom-left.png";
import TopRightBg from "./assets/top-right.png";
import SubmitGame from "./assets/submit-game.png";

const App = () => {
	return (
		<PageContainer>
			<HomeBg>
				<BottomLeft>
					<img src={BottomLeftBg} alt="home-bg-img" />
				</BottomLeft>
				<TopRight>
					<img src={TopRightBg} alt="home-bg-img" />
				</TopRight>
			</HomeBg>
			<LauncherContainer>
				<img src={RoyaleLogo} alt="royale logo" />
				<ComingSoon>
					Coming Soon
				</ComingSoon>
				<ComingSoonText>
					Curabitur odio nisl, sollicitudin vel vulputate eget, luctus at nulla. Morbi iaculis lectus vel turpis hendrerit efficitur.
				</ComingSoonText>
				<BtnContainer>
					<div class="container container--alt">
						<div class="container__bg">
							<YourSubmitGame
								href="https://app.royale.finance"
								target="_blank"
								rel="noopener noreferrer"
							>
								Submit Your Game
							</YourSubmitGame>
						</div>
					</div>
					<GoToContainer>
						<GoToApp
							href="https://app.royale.finance"
							target="_blank"
							rel="noopener noreferrer"
						>
							Go To the app
						</GoToApp>
					</GoToContainer>
				</BtnContainer>
			</LauncherContainer>
			<LinksContainer>
				<SocialLinks
					href="https://t.me/Royalefinanceofficial"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={TelegramLogo} alt="telegram" />
				</SocialLinks>
				<SocialLinks
					href="https://t.me/RoyaleFinance"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={TelegramLogo} alt="telegram" />
				</SocialLinks>
				<SocialLinks
					href="https://medium.com/@officialroyale"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={MediumLogo} alt="medium" />
				</SocialLinks>
				<SocialLinks
					href="https://twitter.com/Royale_Finance"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={TwitterLogo} alt="twitter" />
				</SocialLinks>
			</LinksContainer>
		</PageContainer>
	);
};

export default App;
