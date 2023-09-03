import { Box } from '@mui/material';
import { DragEvent, useState } from 'react';

function FileDrop() {
  const [dragIsOver, setDragIsOver] = useState(false);

  // Define the event handlers
  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragIsOver(true);
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragIsOver(false);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragIsOver(false);
  };

  

  return (
    <Box
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 350,
        width: 350,
        border: '1px solid blue',
        borderRadius: '30px',
        backgroundColor: dragIsOver ? 'lightgray' : 'white',
      }}
    >
      Drag and drop the image here
    </Box>
  );
}

export default FileDrop;