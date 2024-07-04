import Banner from "../../components/Header";
import Thumbnail from "../../components/thumbnail";
import {CloseButton, ModalBackground, ModalContent, RightSide, SubLine, TitleAulas, TitleContainer, TopContainer } from "./style";
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import { useEffect, useState } from "react";
import YoutubeComponent from "../../components/youtubeComponent";
import UserServices from "../../services/userServices/index";
import MiniThumb from "../../components/miniThumbnail";
interface Aula {
    data: string;
    title: string;
    monitor: string;
    image: string;
    ytLink: string;
    pdfLink: string;
    lock: string;
    // outros campos, se houver
}

export default function HomeDev() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [theLink, setTheLink] = useState('')

    const openModal = () =>{
        setModalOpen(true);
       }
    const closeModal = () => setModalOpen(false);
    const changeLink = (link: string) => {
        console.log(link);  // Para verificar o valor recebido
        setTheLink(link);
    };
    const [SemanaUm, setSemanaUm] = useState<Aula[]>([]);
    const [SemanaDois, setSemanaDois] = useState<Aula[]>([]);
    const [SemanaTres, setSemanaTres] = useState<Aula[]>([]);

    useEffect(() => {
        UserServices.getDesignAulas('Dev').then(response => {
            if(response){
                console.log(response.data)
                const sortedData = response?.data.sort((a: { id: number; }, b: { id: number; }) => a.id - b.id);

                const semanaUmData = sortedData.filter((item: { data: string; }) => {
                    const firstTwoDigits = parseInt(item.data.substring(0, 2));
                    return firstTwoDigits >= 15 && firstTwoDigits <= 19;
                });
                console.log(sortedData)

                const semanaDoisData = sortedData.filter((item: { data: string; }) => {
                    const firstTwoDigits = parseInt(item.data.substring(0, 2));
                    return firstTwoDigits >= 22 && firstTwoDigits <= 26;
                });
                const semanaTresData = sortedData.filter((item: { data: string; }) => {
                    const firstTwoDigits = parseInt(item.data.substring(0, 2));
                    return firstTwoDigits >= 29 && firstTwoDigits <= 31;
                });
                console.log('a',semanaDoisData)
                setSemanaUm(semanaUmData);
                setSemanaDois(semanaDoisData);
                setSemanaTres(semanaTresData);
            }
            });
        }, []);
    return (
        <>
        {isModalOpen === true ? (
        <ModalBackground>
        <CloseButton onClick={closeModal}>X</CloseButton>
       <ModalContent>
            <YoutubeComponent LinkVD={theLink} />
    
            <ScrollingCarousel>
                    {[...SemanaUm, ...SemanaDois, ...SemanaTres].map((item, index) => (
                        <MiniThumb key={index} Title={item.title} Monitor={item.monitor} Image={item.image} Link={item.ytLink} PDF={item.pdfLink} Lock = {item.lock} onGo={changeLink}/>
                    ))}
                </ScrollingCarousel>
                </ModalContent>
            </ModalBackground>  ):(null)}  
            <RightSide>
                <TopContainer>
                    <Banner Title={'Desenvolvimento'}></Banner>
                       {/*<CalendarButton><CronoImg src={calendarIcon}/></CalendarButton>*/}
                </TopContainer>
                <TitleContainer>
                    <TitleAulas>Aula da semana 15/07</TitleAulas>
                    <SubLine></SubLine>
                </TitleContainer>
                <ScrollingCarousel>
                    {SemanaUm.map((item, index) => (
                        <Thumbnail key={index} Title={item.title} Monitor={item.monitor} Image={item.image} Link={item.ytLink} PDF={item.pdfLink} Lock= {item.lock} EnviarLink={changeLink} AbrirVideo={openModal}/>
                    ))}
                </ScrollingCarousel>

                <TitleContainer>
                    <TitleAulas>Aula da semana 22/07</TitleAulas>
                    <SubLine></SubLine>
                </TitleContainer>
                <ScrollingCarousel>
                    {SemanaDois.map((item, index) => (
                        <Thumbnail key={index} Title={item.title} Monitor={item.monitor} Image={item.image} Link={item.ytLink} PDF={item.pdfLink} Lock= {item.lock} EnviarLink={changeLink} AbrirVideo={openModal}/>
                    ))}
                </ScrollingCarousel>
                <TitleContainer>
                    <TitleAulas>Aula da semana 29/07</TitleAulas>
                    <SubLine></SubLine>
                </TitleContainer>
                <ScrollingCarousel>
                    {SemanaTres.map((item, index) => (
                        <Thumbnail key={index} Title={item.title} Monitor={item.monitor} Image={item.image} Link={item.ytLink} PDF={item.pdfLink} Lock= {item.lock} EnviarLink={changeLink} AbrirVideo={openModal}/>
                    ))}
                </ScrollingCarousel>

            </RightSide>
            </>
    )
}