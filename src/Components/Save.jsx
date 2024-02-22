import React from "react";

export default function Save(props) {
  const {
    cancelImg,
    intrests,
    setintrests,
    cancel,
    uploadImg,
    changeIntrest,
    cancelBio,
    changeBio,
  } = props;
  return (
    <div className="flex gap-5">
      <button
        onClick={() => {
          cancel(false);
          intrests && setintrests(intrests);
          cancelImg && cancelImg();
          cancelBio && cancelBio();
        }}
        className="w-[7rem] h-[2rem] rounded-lg font-pm font-med text-[1rem] text-white bg-Pn-default-500"
      >
        Cancel
      </button>
      <button
        onClick={() => {
          uploadImg && uploadImg();
          changeIntrest && changeIntrest();
          changeBio && changeBio();
        }}
        className="w-[7rem] h-[2rem] rounded-lg font-pm font-med text-[1rem] text-white bg-Pn-default-500"
      >
        Save
      </button>
    </div>
  );
}
