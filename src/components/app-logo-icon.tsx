import React from 'react';
import logoImage from '../../../public/assets/images/logo/Logo.png'; // Update the path as needed

export default function AppLogoIcon(props: React.ImgHTMLAttributes<HTMLImageElement>) {
    return (
     <img
    {...props}
    src={logoImage}
    alt="App Logo"
    style={{ width: '40px', height: '42px', ...props.style }}
/>
    );
}
