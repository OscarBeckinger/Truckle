import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import "./review-box.css"
import { useAddReview } from '../hooks/useAddReview';

const FoodTruckReviewForm = ({associatedTruck}) => {
  const [open, setOpen] = useState(false);
  const [stars, setStars] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { addReview } = useAddReview();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    addReview({ 
      title: title, 
      review: description, 
      stars: stars, 
      associatedTruck: associatedTruck 
    });
    setTitle("");
    setDescription("");
    setStars("");
    handleClose(); // Close the modal after submitting the review
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Button variant="contained" onClick={handleOpen} sx={{ mt: 2 }}>
        Add a Review
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ 
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          width: 400,
        }}>
          <Typography variant="h6">Add a Review</Typography>
          <TextField
            label="Review Title"
            value={title} required
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            sx={{ mt: 2 }}
          />
          <TextField
            label="Your Name"
            fullWidth
            sx={{ mt: 2 }}
          />
          <Typography variant="subtitle1">{`Food Truck: ${associatedTruck}`}</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
            <Rating
              name="food-truck-rating"
              value={stars}
              onChange={(event, newValue) => setStars(newValue)}
              size="large"
            />
          </Box>
          <TextField
            label="Review Description"
            value={description} required
            onChange={(e) => setDescription(e.target.value)}
            multiline
            rows={4}
            fullWidth
            sx={{ mt: 2 }}
          />
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={!stars || !title || !description}
            sx={{ mt: 2 }}
          >
            Submit Review
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default FoodTruckReviewForm;