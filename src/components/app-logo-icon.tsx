import React from 'react';
import Image, { ImageProps } from 'next/image';
import logoImage from '../../../public/assets/images/logo/Logo.png'; // Update the path as needed

type AppLogoIconProps = Omit<ImageProps, 'src' | 'alt'>

export default function AppLogoIcon({ style, ...props }: AppLogoIconProps) {
  return (
    <Image
      {...props}
      src={logoImage}
      alt="App Logo"
      width={40}
      height={42}
      style={{
        width: '40px',
        height: '42px',
        ...style,
      }}
      // Optional performance optimizations:
      priority={false} // Set to true if this is above the fold
      quality={85}    // Adjust based on your needs
      placeholder="blur" // If you want blur-up placeholder
      blurDataURL="data:image/png;base64,[YOUR_TINY_BASE64_PLACEHOLDER]" // Add if using placeholder
    />
  );
}