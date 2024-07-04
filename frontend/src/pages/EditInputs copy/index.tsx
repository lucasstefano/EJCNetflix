import React, { useState } from 'react';
import axios from 'axios';

const Editevd = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string>('');

  const fileSelectedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
      setPreviewUrl(URL.createObjectURL(event.target.files[0]));
    }
  };

  const fileUploadHandler = async () => {
    if (!selectedFile) {
      console.error('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setUploadedImageUrl(response.data.url);
    } catch (error) {
      console.error('Error uploading the image', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={fileSelectedHandler} />
      <button onClick={fileUploadHandler}>Upload</button>
      {previewUrl && <img src={previewUrl} alt="Preview" width="100" />}
      {uploadedImageUrl && (
        <div>
          <h3>Uploaded Image:</h3>
          <img src={`/${uploadedImageUrl}`} alt="Uploaded" width="100" />
        </div>
      )}
    </div>
  );
};

export default Editevd;
