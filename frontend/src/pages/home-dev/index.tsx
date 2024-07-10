import Banner from "../../components/Header";
import Thumbnail from "../../components/thumbnail";
import { BackgroundImage, BackgroundImage2, CalendarButton, CloseButton, CronogramText, CronogramView, CronoImg, ModalBackground, ModalContent, RightSide, SubLine, TitleAulas, TitleContainer, TopContainer } from "./style";
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import { useEffect, useState } from "react";
import YoutubeComponent from "../../components/youtubeComponent";
import UserServices from "../../services/userServices/index";
import calendarIcon from "../../assets/CalendarIcon.svg";
import BGI1 from '../../assets/BG-ESPADA.svg';
import BGI2 from '../../assets/BG-WAVE.svg'
import MiniThumb from "../../components/miniThumbnail";

interface Aula {
    data: string;
    title: string;
    monitor: string;
    imageUrl: string;
    ytLink: string;
    pdfLink: string;
    lock: string;
    // outros campos, se houver
}

export default function Home() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [theLink, setTheLink] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => setModalOpen(false);
    const changeLink = (link: string) => {
        console.log(link);  // Para verificar o valor recebido
        setTheLink(link);
    };
    const [WeekOne, setWeekOne] = useState<Aula[]>([]);
    const [WeekTwo, setWeekTwo] = useState<Aula[]>([]);
    const [WeekThree, setWeekThree] = useState<Aula[]>([]);

    useEffect(() => {
        UserServices.getDesignAulas('Dev').then(response => {
            if (response) {
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

                const sortedWeekOne = semanaUmData.sort((a: Aula, b: Aula) => {
                    const dateA = parseInt(a.data.substring(0, 2));
                    const dateB = parseInt(b.data.substring(0, 2));
                    return dateA - dateB;
                });
                const sortedWeekTwo = semanaDoisData.sort((a: Aula, b: Aula) => {
                    const dateA = parseInt(a.data.substring(0, 2));
                    const dateB = parseInt(b.data.substring(0, 2));
                    return dateA - dateB;
                });
                const sortedWeekThree = semanaTresData.sort((a: Aula, b: Aula) => {
                    const dateA = parseInt(a.data.substring(0, 2));
                    const dateB = parseInt(b.data.substring(0, 2));
                    return dateA - dateB;
                });

                setWeekOne(sortedWeekOne);
                setWeekTwo(sortedWeekTwo);
                setWeekThree(sortedWeekThree);

            }
        });
    }, []);



    return (
        <>
            {isModalOpen === true ? (
                <ModalBackground>
                    <CloseButton onClick={closeModal}>X</CloseButton>
                    <ModalContent>
                        <YoutubeComponent LinkVideo={theLink} />
                        <ScrollingCarousel>
                            {[...WeekOne, ...WeekTwo].map((item, index) => (
                                <MiniThumb key={index} Title={item.title} Monitor={item.monitor} imageUrl={item.imageUrl} Link={item.ytLink} PDF={item.pdfLink} Lock={item.lock} onGo={changeLink} />
                            ))}
                        </ScrollingCarousel>
                    </ModalContent>
                </ModalBackground>) : (null)}
            <RightSide>
                <TopContainer>
                    <Banner Title={'Desenvolvimento'}></Banner>
                    <CronogramView>
                        <CalendarButton href={'https://docs.google.com/spreadsheets/d/1KvILc92hjfUPnJiKQdax0aPpm7yR6ZYe3It0_d2dYO8/edit?usp=sharing'} target="_blank" rel="noopener noreferrer"><CronoImg src={calendarIcon} /></CalendarButton>
                        <CronogramText>cronograma</CronogramText>
                    </CronogramView>
                </TopContainer>
                <TitleContainer>
                    <TitleAulas>Aula da semana 15/07</TitleAulas>
                    <SubLine></SubLine>
                </TitleContainer>
                <ScrollingCarousel>
                    {WeekOne.map((item, index) => (
                        <Thumbnail key={index} Title={item.title} Monitor={item.monitor} imageUrl={item.imageUrl} Link={item.ytLink} PDF={item.pdfLink} Lock={item.lock} EnviarLink={changeLink} AbrirVideo={openModal} />
                    ))}
                </ScrollingCarousel>
                <TitleContainer>
                    <TitleAulas>Aula da semana 22/07</TitleAulas>
                    <SubLine></SubLine>
                </TitleContainer>
                <ScrollingCarousel>
                    {WeekTwo.map((item, index) => (
                        <Thumbnail key={index} Title={item.title} Monitor={item.monitor} imageUrl={item.imageUrl} Link={item.ytLink} PDF={item.pdfLink} Lock={item.lock} EnviarLink={changeLink} AbrirVideo={openModal} />
                    ))}
                </ScrollingCarousel>
                <TitleContainer>
                    <TitleAulas>Aula da semana 29/07</TitleAulas>
                    <SubLine></SubLine>
                </TitleContainer>
                <ScrollingCarousel>
                    {WeekThree.map((item, index) => (
                        <Thumbnail key={index} Title={item.title} Monitor={item.monitor} imageUrl={item.imageUrl} Link={item.ytLink} PDF={item.pdfLink} Lock={item.lock} EnviarLink={changeLink} AbrirVideo={openModal} />
                    ))}
                </ScrollingCarousel>
                <BackgroundImage src={BGI1} ></BackgroundImage>
                <BackgroundImage2 src={BGI2} ></BackgroundImage2>
            </RightSide>
        </>
    )
}