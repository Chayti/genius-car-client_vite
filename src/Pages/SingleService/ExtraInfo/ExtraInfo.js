import React from "react";

const ExtraInfo = () => {
  return (
    <div>
      {/* title */}
      <div className="mt-10">
        <h1 className="text-3xl font-bold">Simple Steps to Process</h1>
      </div>
      {/* description */}
      <div className="mt-10">
        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          vulputate euismod magna sit amet fringilla. Ut in ante et odio
          eleifend elementum. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Praesent dolor est, mattis at laoreet in, fermentum sit amet
          nibh. In mauris nulla, efficitur a euismod vel, venenatis a ante.
          Quisque semper pretium mi, in aliquet metus congue non. Curabitur
          molestie rhoncus commodo. Nullam varius hendrerit diam vitae
          facilisis. Donec eleifend vulputate turpis, quis luctus nulla bibendum
          mattis.
        </p>
      </div>
      {/* video */}
      <div className="flex justify-center mt-10">
        <iframe
          width="1000"
          height="415"
          src="https://www.youtube.com/embed/SbNwS1qXj1Q"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default ExtraInfo;
