import React from 'react';
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';
import { Button, Stack, Typography } from '@mui/material';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  //   console.log(gifUrl);

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];
  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: '3px', xs: '20px' } }}>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h6">
          Exercising regularly improves your muscular, bone health,
          cardiorespiratory fitness. {name} {` `} reduces your {target} of
          hypertension or high blood pressure, stroke, coronary heart disease
          and some cancers. It reduces depression and anxiety and boosts good
          mental health with good wellbeing and mood.
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: '#fff2db',
                borderRadius: '50%',
                width: '100px',
                height: '100px',
              }}
            >
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: '50px', height: '50px' }}
              />
            </Button>
            <Typography variant="h5" textTransform="capitalize">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
