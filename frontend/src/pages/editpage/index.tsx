import { useState, useEffect } from 'react';
import UserServices from '../../services/userServices/index';
import ArrowRight from '../../assets/Vector.svg';
import EditThumbnail from '../../components/Edit Thumb';
import { Container, ReturnArrow, RightSide, SubMessage, ThumbnailContainer, SearchBar } from './style';

export default function EditPage(){
  const [change, setChange] = useState('');
  const [data, setData] = useState([{
    id: 0,
    type: '',
    title: '',
    monitor: '',
    ytLink: '',
    imageUrl: '',
    pdfLink: '',
    lock: '',
    data: ''
  }]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    UserServices.getAllAulas().then((response) => {
      if (response?.data) {
        const sortedData = response.data.sort((a: { id: number; }, b: { id: number; }) => b.id - a.id);
        setData(sortedData);
        console.log(sortedData);
      }
    }).catch((error) => {
      console.error("Error fetching classes:", error);
    });
  }, [ ,change]);

  const handleCreation = () => {
    const datax = {
      type: 'Design',
      title: 'Nova Aula',
      monitor: 'Instrutor',
      imageUrl: '',
      ytLink: '',
      pdfLink: '',
      lock: 'bloqueado',
      data: '15/07/24'
    };
    UserServices.CreateClass(datax).then(() => {
      setChange('nova Aula');
      window.location.reload();
    }).catch((error) => {
      console.error("Error creating class:", error);
    });
  };

  const handleSearch = (event:any) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.monitor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <RightSide>
      <Container>
        <a href="/">
          <ReturnArrow src={ArrowRight} />
        </a>
        <SubMessage>Editar Aulas</SubMessage>
        <button onClick={handleCreation}>+</button>
      </Container>
      <SearchBar
        type="text"
        placeholder="Pesquisar..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ThumbnailContainer>
        {filteredData.map((item, index) => (
          <EditThumbnail
            key={index}
            Title={item.title}
            Monitor={item.monitor}
            Link={`/update/${item.id}`}
            imageUrl={item.imageUrl}
            Type={item.type}
          />
        ))}
      </ThumbnailContainer>
    </RightSide>
  );
};

