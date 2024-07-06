import React, { useState, useEffect } from 'react';
import UserServices from "../../services/userServices/index";
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Form, CheckboxContainer, CheckboxInput, CheckboxLabel, Input, Select, SubMessage, Title } from './style';

interface FormData {
  id: number;
  type: string;
  title: string;
  monitor: string;
  ytLink: string;
  pdfLink: string;
  lock: boolean;
  data: string;
  imagemUrl?: File | null; // Adicionado campo para o arquivo de imagem
}

const ModelForms: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    id: Number(id),
    type: 'Desenvolvimento',
    title: '',
    monitor: '',
    ytLink: '',
    pdfLink: '',
    lock: false,
    data: '',
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
            imagemUrl: null, // Limpar qualquer imagem anteriormente selecionada
          });
        }
      } catch (error) {
        console.error('Error fetching class data:', error);
      }
    };
    fetchData();
  }, [formData.id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData({ ...formData, [name]: checked });
    } else if (type === 'file') {
      const file = (e.target as HTMLInputElement).files?.[0] || null;
      setFormData({ ...formData, imagemUrl: file });
    } else if (name === 'ytLink' && value.includes('youtube.com/watch?v=')) {
      const videoId = value.split('v=')[1];
      const newValue = videoId.substring(0, 11);
      setFormData({ ...formData, [name]: newValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Preparar FormData para envio, incluindo o arquivo de imagem se estiver presente
      const formDataToSend = new FormData();
      formDataToSend.append('id', String(formData.id));
      formDataToSend.append('type', formData.type);
      formDataToSend.append('title', formData.title);
      formDataToSend.append('monitor', formData.monitor);
      formDataToSend.append('ytLink', formData.ytLink);
      formDataToSend.append('pdfLink', formData.pdfLink);
      formDataToSend.append('lock', formData.lock ? 'bloqueado' : 'livre');
      formDataToSend.append('data', formData.data);

      if (formData.imagemUrl) {
        formDataToSend.append('imagemUrl', formData.imagemUrl);
      }
      const config = {headers: {'Content-Type': 'multipart/form-data'}}
      await UserServices.ChangeClass(formData.id, formDataToSend, config);
      console.log('Class updated successfully!');
      navigate('/Edit');

    } catch (error) {
      console.error('Error updating class:', error);
    }
  };

  return (
    <>
      <Title>Editar Aula: {formData.title}</Title>
      <Form onSubmit={handleSubmit}>
        <SubMessage>Área:</SubMessage>
        <Select name="type" value={formData.type} onChange={handleChange}>
          <option value="Desenvolvimento">Desenvolvimento</option>
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

        <SubMessage>Imagem da Aula:</SubMessage>
        <Input type="file" name="imagemUrl" onChange={handleChange} />

        <Button type="submit">Salvar</Button>
      </Form>
    </>
  );
};

export default ModelForms;
