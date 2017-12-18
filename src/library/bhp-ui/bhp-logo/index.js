import React from 'react';
import { themeColours } from '../colours';

export default ({ width, height, color, ...otherProps }) => {
  width = width || 74;
  height = height || (width * 28 / 74);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 74 28`}
      {...otherProps}
    >
      <path
        fill={color || themeColours.primary}
        fillRule="evenodd"
        d="M11.113 6H7v6h4.113C13.019 12 14 10.586 14 9s-.981-3-2.887-3zm.262 11H7v5h4.375C13.067 22 14 20.881 14 19.5c0-1.38-1.175-2.5-2.625-2.5zM22 20.386C22 25.008 17.775 28 13.185 28H0V0h12.75c4.679 0 8.563 3.354 8.563 7.492 0 3.273-1.571 5.032-3.743 6.356C20.08 14.903 22 16.48 22 20.386zM40.926 0v11.298h-9.853V0H24v28h7.073V17.684h9.853V28H48V0h-7.074zm23.178 6H59v6h5.104C65.704 12 67 10.586 67 9s-1.297-3-2.896-3zM74 8.842c0 4.883-4.013 8.842-8.962 8.842H58.97V28H52V0h13.038C69.988 0 74 3.959 74 8.842z"
      />
    </svg>
  );
}
