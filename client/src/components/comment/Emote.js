import RecommendIcon from '@mui/icons-material/Recommend';
import EmojiEmotionsRoundedIcon from '@mui/icons-material/EmojiEmotionsRounded';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import React, { useState } from 'react';
import { IconButton } from '@mui/material';

function Emote() {
    const [recommendUp, setRecommendUp] = useState(0)
    const [smileUp, setSmileUp] = useState(0)
    const [exclamationUp, setExclamationUp] = useState(0)

    return (
        <div>
        <IconButton onClick={() => setRecommendUp(recommendUp + 1)}>
            <RecommendIcon />{`${recommendUp === 0 ? ' ' : recommendUp}`}
        </IconButton>
        <IconButton onClick={() => setSmileUp(smileUp + 1)}>
            <EmojiEmotionsRoundedIcon />{`${smileUp === 0 ? ' ' : smileUp}`}
        </IconButton>
        <IconButton onClick={() => setExclamationUp(exclamationUp + 1)}>
            <ErrorRoundedIcon />{`${exclamationUp === 0 ? ' ' : exclamationUp}`}
        </IconButton>
        </div>
    )
}

export default Emote;



