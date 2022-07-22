import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={240}
    height={346}
    viewBox="0 0 240 346"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="93" y="240" rx="0" ry="0" width="0" height="54" />
    <rect x="99" y="346" rx="0" ry="0" width="0" height="1" />
    <rect x="98" y="326" rx="0" ry="0" width="0" height="1" />
    <rect x="105" y="357" rx="0" ry="0" width="240" height="103" />
    <rect x="0" y="0" rx="7" ry="7" width="240" height="346" />
  </ContentLoader>
);

export default Skeleton;
