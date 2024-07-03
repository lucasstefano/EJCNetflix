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
  data: string; // Alterado para string
}

const ModelForms = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate()
  const [formData, setFormData] = useState<FormData>({
    id: Number(id),
    type: 'Desenvolvimento',
    title: '',
    monitor: '',
    ytLink: '',
    pdfLink: '',
    lock: false,
    data: '', // Valor padrão
  });

  useEffect(() => {
    UserServices.getSpecific(formData.id).then(response => {
      console.log(response?.data);
      if (response) {
        const data = response.data;
        setFormData({
          id: data.id,
          type: data.type,
          title: data.title,
          monitor: data.monitor,
          ytLink: data.ytLink,
          pdfLink: data.pdfLink,
          lock: data.lock === 'bloqueado',
          data: data.data.toString(), // Converte para string
        });
      }
    }).catch(error => {
      console.error('Error fetching class data:', error);
    });
  }, [formData.id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData({ ...formData, [name]: checked });
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
      const updatedFormData = {
        ...formData,
        lock: formData.lock ? 'bloqueado' : 'livre'
      };
      await UserServices.ChangeClass(formData.id, updatedFormData);
      console.log('Class updated successfully!');
      navigate('/')

    } catch (error) {
      console.error('Error updating class:', error);
    }
  };
  return (
    <>
      <Title>Editar Aula: {formData.title}</Title>
      <Form onSubmit={handleSubmit}>
        <SubMessage>
          Área:
        </SubMessage>
        <Select name="type" value={formData.type} onChange={handleChange}>
          <option value="Desenvolvimento">Desenvolvimento</option>
          <option value="Design">Design</option>
          <option value="Ambos">Ambos</option>
        </Select>

        <SubMessage>
          Titulo da Aula:
        </SubMessage>
        <Input type="text" name="title" value={formData.title} onChange={handleChange} />

        <SubMessage>
          Instrutor:
        </SubMessage>
        <Input type="text" name="monitor" value={formData.monitor} onChange={handleChange} />

        <SubMessage>
          YouTube Link:
        </SubMessage>
        <Input type="text" name="ytLink" value={formData.ytLink} onChange={handleChange} />

        <SubMessage>
          PDF Link:
        </SubMessage>
        <Input type="text" name="pdfLink" value={formData.pdfLink} onChange={handleChange} />

        <SubMessage>
          Disponibilidade da aula:
        </SubMessage>
        <CheckboxContainer>
          <CheckboxInput type="checkbox" name="lock" checked={formData.lock} onChange={handleChange} />
          <CheckboxLabel>Bloqueada</CheckboxLabel>
        </CheckboxContainer>


        <SubMessage>
          Data de Publicacão:
        </SubMessage>
        <Input type="text" name="data" value={formData.data} onChange={handleChange} />

        <Button type="submit">Salvar</Button>
      </Form>
    </>
  );
};

export default ModelForms;

