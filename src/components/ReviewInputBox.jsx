import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import "./review-box.css"
import { useGetUserInfo } from '../hooks/useGetUserInfo';
import { useAddReview } from '../hooks/useAddReview';

const FoodTruckReviewForm = ({ associatedTruck }) => {
  const [open, setOpen] = useState(false);
  const [stars, setStars] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { addReview } = useAddReview();
  const {getUserInfo} = useGetUserInfo();

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
      associatedTruck: associatedTruck,
      getUserInfo: getUserInfo

    });
    setTitle("");
    setDescription("");
    setStars("");
    handleClose(); 
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Button
  variant="contained"
  onClick={handleOpen}
  sx={{
    mt: 2,
    fontSize: '12px',
    padding: '6px 12px', 
    borderRadius: '20px' 
  }}
>
  Add a Review
</Button>
      <Button
    variant="contained"
    onClick={handleOpen}
    sx={{
      mt: 2,
      fontSize: '12px',
      padding: '6px 12px', 
      borderRadius: '20px' 
    }}
  >
    Add a Review
  </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 7,
          width: 400,
        }}>
          <Button onClick={handleClose} sx={{ position: 'absolute', top: '10px', left: '10px', fontSize: '20px', color: 'black' }}>X</Button>
          <Typography variant="h6" sx={{ fontFamily: 'Merriweather', fontSize: '22px', textAlign: 'center' }}>Add a Review</Typography>
          <Typography variant="subtitle1" sx={{ fontFamily: 'Georgia', fontSize: '18px', textAlign: 'center', mt: 1 }}>{` ${associatedTruck}`}</Typography>
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
            sx={{ mt: 2, fontFamily: 'Georgia', fontSize: '16px' }}
          />
          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              onClick={handleSubmit}
              disabled={!stars || !description}
              sx={{ mt: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default FoodTruckReviewForm;