// DynamicWindowSizeWrapper.tsx
"use client";
import dynamic from 'next/dynamic';

const DynamicWindowSize = dynamic(() => import('./window-size'), {
    loading: () => <p>Loading...</p>
});

const DynamicWindowSizeWrapper = () => {
    return <DynamicWindowSize />;
};

export default DynamicWindowSizeWrapper;