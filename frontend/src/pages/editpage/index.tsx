import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserServices from '../../services/userServices/index';
import ArrowRight from '../../assets/Vector.svg';
import styled from 'styled-components';
import EditThumbnail from '../../components/Edit Thumb';
import { Container, ReturnArrow, SubMessage, ThumbnailContainer } from './style';

//
const UpdateClassForm = () => {
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

  useEffect(() => {
    UserServices.getAllAulas().then((response) => {
      if (response?.data) {
        const sortedData = response.data.sort((a: { id: number; }, b: { id: number; }) => a.id - b.id);
        setData(sortedData);
      }
    });
  }, []);

  return (
    <>
      <Container>
        <a href="/">
          <ReturnArrow src={ArrowRight} />
        </a>
        <SubMessage>Editar Aulas</SubMessage>
      </Container>
      <ThumbnailContainer>
        {data.map((item, index) => (
          <EditThumbnail
            key={index}
            Title={item.title}
            Monitor={item.monitor}
            Link={`/update/${item.id}`}
            imageUrl={item.imageUrl}
          />
        ))}
      </ThumbnailContainer>
    </>
  );
};

export default UpdateClassForm;
