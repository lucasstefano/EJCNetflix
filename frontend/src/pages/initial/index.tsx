import { 
    AreaButton, 
    AreaIcon, 
    AreaText, 
    AreaContainer, 
    ScreenView, 
    AreaTextBold, 
    WelcomeImg1,
    WelcomeImg2,
    BackgroundImage,
    ButtonsView,
    WelcomeImgContainer,
} from "./style";
import DesignLogo from '../../assets/PenNib.svg';
import CodeLogo from '../../assets/Code.svg';
import BemVindoImg from '../../assets/Boas-vindas ao.svg';
import EJCNETFLIXImg from '../../assets/Group 1.svg';
import BGI1 from '../../assets/Group 14.svg';
import BGI2 from '../../assets/Group 15.svg';
import BGI3 from '../../assets/Group 17.svg';

export default function InitialPage() {
    
    return (
        <ScreenView>
            <WelcomeImgContainer>
                <WelcomeImg1 src={BemVindoImg}></WelcomeImg1>
                <WelcomeImg2 src={EJCNETFLIXImg}></WelcomeImg2>
            </WelcomeImgContainer>
            <ButtonsView>
                <AreaContainer>
                    <AreaButton href="/Design">
                        <AreaIcon src={DesignLogo} />
                    </AreaButton>
                    <AreaText>Sou</AreaText>
                    <AreaTextBold>Designer</AreaTextBold>
                </AreaContainer>
                <AreaContainer>
                    <AreaButton href="/Desenvolvimento">
                        <AreaIcon src={CodeLogo} />
                    </AreaButton>
                    <AreaText>Sou</AreaText>
                    <AreaTextBold>Desenvolvedor</AreaTextBold>
                </AreaContainer>
            </ButtonsView>
            <BackgroundImage src={BGI1} position='bottom-left'></BackgroundImage>
            <BackgroundImage src={BGI2} position='top-right'></BackgroundImage>
            <BackgroundImage src={BGI3} position='bottom-right'></BackgroundImage>
        </ScreenView>
    );
}
