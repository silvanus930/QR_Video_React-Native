import * as React from 'react';
import VideoView from '../components/VideoView';
import QRScanner from '../components/QRScanner'
import Background from '../components/Background';

export default function VideoScreen() {
  return (
    <Background>
      <VideoView address={"/sdcard/2.mp4"}/>
    </Background>
  );
}