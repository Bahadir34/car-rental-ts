import React, { type FC } from "react";

interface Props {
  children: React.ReactNode; // jsx elementi veya elementlerinin tyep idir (JSX.Element) ile benzerdir.
}

const Warning: FC<Props> = ({ children }) => {
  return (
    <div className="padding-x max-width">
      <div className="home-error-container">{children}</div>
    </div>
  );
};

export default Warning;
