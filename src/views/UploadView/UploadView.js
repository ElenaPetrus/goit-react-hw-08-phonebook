import axios from 'axios';
import Button from '@mui/material/Button';

export default function UploadView() {
  const handleSubmit = e => {
    e.preventDefault();
    const file = e.target.file.files[0];
    const formData = new FormData();
    formData.append('image', file, file.name);

    axios
      .post('какой-то адрес куда скажет бекендщик', formData)
      .then(console.log)
      .catch(console.error);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="file" />
      <Button variant="contained" size="small" type="submit">
        Download{' '}
      </Button>
    </form>
  );
}
