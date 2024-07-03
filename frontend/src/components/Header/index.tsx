import { BannerView, HelloMessage, ReturnArrow, SubAreaMessage, SubContainer, SubMessage, TTicon, TextContainer } from "./style";
import ArrowRight from '../../assets/Vector.svg'
import TT from '../../assets/Union.svg'
interface BannerName{
    Title:String;
}
export default function Banner({Title}:any){
    return(
        <BannerView >
            <a style={{zIndex: 1}} href="/">
            <ReturnArrow src={ArrowRight}></ReturnArrow>
            </a>
            <TTicon src={TT}></TTicon>
            <TextContainer>
            <HelloMessage>Olá Samurai!</HelloMessage>
            <SubContainer>
                <SubMessage>Seja bem vindo ao nosso</SubMessage>
                <SubAreaMessage>TT de {Title}!</SubAreaMessage>
            </SubContainer>
            </TextContainer>
        </BannerView>
    )
}