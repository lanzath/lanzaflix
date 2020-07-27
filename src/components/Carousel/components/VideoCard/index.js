import React from 'react';
import { VideoCardContainer } from './styles';

/**
 * Get the video Id by youtube URL
 * @param {String} youtubeURL
 * @returns {String} string
 */
function getYouTubeId(youtubeURL) {
    return youtubeURL
        .replace(
            /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
            '$7',
        );
}

/**
 * Video Card Component
 * @param {String} videoTitle
 * @param {String} videoURL
 * @param {String} categoryColor
 * @returns {Element} JSX
 */
function VideoCard({ videoTitle, videoURL, categoryColor }) {
    const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
    return (
        <VideoCardContainer
            url={ image }
            href={ videoURL }
            target="_blank"
            style={{ borderColor: categoryColor || 'red' }}
            title={ videoTitle }
        />
    );
}

export default VideoCard;
