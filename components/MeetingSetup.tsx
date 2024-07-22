"use client"
import { DeviceSettings, useCall, VideoPreview } from '@stream-io/video-react-sdk'
import React, { useState,useEffect } from 'react'
import { Button } from './ui/button';


function MeetingSetup({ setIsSetupComplete }: {
  setIsSetupComplete: (value: boolean) => void;
}) {
  const [isMicCamToogledOn, setisMicCamToogledOn] = useState(false);
  const call = useCall();
  if (!call) {
    throw new Error('usecall must be used within StreamCall Component');
  }

  useEffect(() => {
    if (isMicCamToogledOn) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    }
  }, [isMicCamToogledOn, call?.camera, call?.microphone]);

  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-3 text-white '>
      <h1 className='text-2xl font-bold'>Setup</h1>
      <VideoPreview />
      <div className='flex h-16 items-center justify-center gap-3'>
        <label className='flex items-center justify-center gap-2 font-medium'>
          <input type="checkbox"
            checked={isMicCamToogledOn}
            onChange={(e) => setisMicCamToogledOn(e.target.checked)} />
          Join with mic and camera off
        </label>
        <DeviceSettings />
      </div>
      <Button className="rounded-md bg-blue-1 px-4 py-2.5" onClick={() => {
        call.join();
        setIsSetupComplete(true);
      } }>Join Meeting</Button>
    </div>
  );
}

export default MeetingSetup;