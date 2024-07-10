import React, { useState, useEffect } from 'react';
import UserServices from "../../services/userServices/index";
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Form, CheckboxContainer, CheckboxInput, CheckboxLabel, Input, Select, SubMessage, Title, Image, ImageContainer, InputImg, UploadButton, ScreenView, ButtonContainer, ReturnArrow, Container, DeleteContainer, DeleteButtonContainer } from './style';
import ArrowRight from '../../assets/Vector.svg';
import userServices from '../../services/userServices/index';
import { UrlBase } from '../../services/api';
interface FormData {
  id: number;
  type: string;
  title: string;
  monitor: string;
  ytLink: string;
  pdfLink: string;
  lock: boolean;
  data: string;
}

interface FormImgData {
  id: number;
  imagemUrl?: File | null | string; // Adicionado campo para o arquivo de imagem
}

export default function EditForms() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [ImageChange, setImageChange] = useState('parado')

  const [formData, setFormData] = useState<FormData>({
    id: Number(id),
    type: 'Desenvolvimento',
    title: '',
    monitor: '',
    ytLink: '',
    pdfLink: '',
    lock: false,
    data: '',
  });

  const [formImgData, setFormImgData] = useState<FormImgData>({
    id: Number(id),
    imagemUrl: null, // Inicialmente nenhum arquivo selecionado
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await UserServices.getSpecific(formData.id);
        if (response && response.data) {
          const data = response.data;
          setFormData({
            id: data.id,
            type: data.type,
            title: data.title,
            monitor: data.monitor,
            ytLink: data.ytLink,
            pdfLink: data.pdfLink,
            lock: data.lock === 'bloqueado',
            data: data.data.toString(),
          });
        }
      } catch (error) {
        console.error('Error fetching class data:', error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData({ ...formData, [name]: checked });
    } else if (type === 'file') {
      const file = (e.target as HTMLInputElement).files?.[0] || null;
      setFormImgData({ ...formImgData, imagemUrl: file });
      handleImageSubmit(file);
      
    } else if (name === 'ytLink' && value.includes('youtube.com/watch?v=')) {
      const videoId = value.split('v=')[1];
      const newValue = videoId.substring(0, 11);
      setFormData({ ...formData, [name]: newValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleImageSubmit = async (file: File | null) => {

    try {
      if (!file) return;

      // Preparar FormData para envio, incluindo o arquivo de imagem se estiver presente
      const formDataToSend = new FormData();
      formDataToSend.append('id', String(formImgData.id));
      formDataToSend.append('imagemUrl', file);

      const config = { headers: { 'Content-Type': 'multipart/form-data' } }
      await UserServices.ChangeImage(formData.id, formDataToSend, config);
      console.log('Class updated successfully!');
      setImageChange('mudou');

    } catch (error) {
      console.error('Error updating class:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Preparar FormData para envio
      const formDataToSend = new FormData();
      formDataToSend.append('id', String(formData.id));
      formDataToSend.append('type', formData.type);
      formDataToSend.append('title', formData.title);
      formDataToSend.append('monitor', formData.monitor);
      formDataToSend.append('ytLink', formData.ytLink);
      formDataToSend.append('pdfLink', formData.pdfLink);
      formDataToSend.append('lock', formData.lock ? 'bloqueado' : 'livre');
      formDataToSend.append('data', formData.data);

      const config = { headers: { 'Content-Type': 'multipart/form-data' } }
      await UserServices.ChangeClass(formData.id, formDataToSend, config);
      console.log('Class updated successfully!');
      navigate('/Edit');

    } catch (error) {
      console.error('Error updating class:', error);
    }
  };
  const handleDeleteImage = async () => {
    try {
       const formDataToSend = new FormData();
       formDataToSend.append('id', String(formImgData.id));
       formDataToSend.append('imagemUrl', '');
       await UserServices.DeleteImage(formData.id);
       setImageChange('apagou');
       console.log('Imagem deletada com sucesso!');

    } catch (error) {
      console.error('Erro ao deletar imagem:', error);
    }
  };
  const [deleteModal, setDeleteModal] = useState(false)
  const OpendeleteModal = ()=>{
    setDeleteModal(!deleteModal)
  }

  const handleDeleteClasse = ()=>{
    userServices.DeleteClass(id)
    navigate('/')
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await UserServices.getSpecific(formData.id);
        if (response && response.data) {
          const data = response.data;
          setFormImgData({
            id: data.id,
            imagemUrl: data.imageUrl, // Limpar qualquer imagem anteriormente selecionada
          });
        }
      } catch (error) {
        console.error('Error fetching class data:', error);
      }
    };
    fetchData();
  }, [handleDeleteImage,handleChange]);
  return (
    <>
    {deleteModal === true ? (
    <DeleteContainer>
      <SubMessage>Deseja apagar mesmo ?</SubMessage>
      <DeleteButtonContainer>
      <Button style={{width:100,background:'red'}} onClick={handleDeleteClasse}>APAGAR AULA</Button> 
      <Button style={{width:100,marginLeft:10,background:'blue'}} onClick={OpendeleteModal}>NÃO</Button> 
      </DeleteButtonContainer>
    </DeleteContainer>
    ):(null)}
      <Container>
        <a href="/Edit">
          <ReturnArrow src={ArrowRight} />
        </a>
        <Title>Aula de {formData.title}</Title>
      </Container>
      <ScreenView>
        <Form>
          <ImageContainer>
          {formImgData.imagemUrl !== '' ?(
            <Image src={`${UrlBase}${formImgData.imagemUrl}`} alt='IMG'/>):(<h1 style={{color:'white'}}>NO IMG</h1>)}
          </ImageContainer>
          <br></br>
          <InputImg type="file" name="imagemUrl" id="fileUpload" onChange={handleChange} />
       <ButtonContainer>
        <UploadButton htmlFor="fileUpload">Selecionar Imagem</UploadButton>
        {formImgData.imagemUrl !== '' ? (
            <Button onClick={handleDeleteImage}>Apagar Imagem</Button> 
            ):(null)}
      </ButtonContainer>
      </Form>

        <Form onSubmit={handleSubmit}>
          <SubMessage>Área:</SubMessage>
          <Select name="type" value={formData.type} onChange={handleChange}>
            <option value="Dev">Desenvolvimento</option>
            <option value="Design">Design</option>
            <option value="Ambos">Ambos</option>
          </Select>

          <SubMessage>Título da Aula:</SubMessage>
          <Input type="text" name="title" value={formData.title} onChange={handleChange} />

          <SubMessage>Instrutor:</SubMessage>
          <Input type="text" name="monitor" value={formData.monitor} onChange={handleChange} />

          <SubMessage>YouTube Link:</SubMessage>
          <Input type="text" name="ytLink" value={formData.ytLink} onChange={handleChange} />

          <SubMessage>PDF Link:</SubMessage>
          <Input type="text" name="pdfLink" value={formData.pdfLink} onChange={handleChange} />

          <SubMessage>Disponibilidade da Aula:</SubMessage>
          <CheckboxContainer>
            <CheckboxInput type="checkbox" name="lock" checked={formData.lock} onChange={handleChange} />
            <CheckboxLabel>Bloqueada</CheckboxLabel>
          </CheckboxContainer>

          <SubMessage>Data de Publicação:</SubMessage>
          <Input type="text" name="data" value={formData.data} onChange={handleChange} />
          <Container>
          <Button type="submit">Salvar</Button>


          </Container>
        </Form>
        <Button style={{width:100,height:50,marginRight:40,background:'red'}} onClick={OpendeleteModal}>APAGAR AULA</Button> 
        
      </ScreenView>
    </>
  );
};

