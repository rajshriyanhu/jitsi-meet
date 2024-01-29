import React, { useEffect } from 'react';

const JitsiMeetComponent = () => {
  useEffect(() => {
    const loadJitsiMeet = async () => {
      // Load the JitsiMeetExternalAPI script asynchronously
      const script = document.createElement('script');
      script.src = 'https://8x8.vc/vpaas-magic-cookie-5194b8f33ea944f0840e95ae0fb2cff5/external_api.js';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        const api = new window.JitsiMeetExternalAPI('8x8.vc', {
          roomName: 'vpaas-magic-cookie-5194b8f33ea944f0840e95ae0fb2cff5/SampleAppComprehensiveBridgesBelongHourly',
          parentNode: document.querySelector('#jaas-container'),
          // Add JWT if needed
          // jwt: 'eyJraWQiOiJ2cGFhcy1tYWdpYy1jb29raWUtNTE5NGI4ZjMzZWE5NDRmMDg0MGU5NWFlMGZiMmNmZjUvZjBhMjFhLVNBTVBMRV9BUFAiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJqaXRzaSIsImlzcyI6ImNoYXQiLCJpYXQiOjE3MDY0MzY4MjIsImV4cCI6MTcwNjQ0NDAyMiwibmJmIjoxNzA2NDM2ODE3LCJzdWIiOiJ2cGFhcy1tYWdpYy1jb29raWUtNTE5NGI4ZjMzZWE5NDRmMDg0MGU5NWFlMGZiMmNmZjUiLCJjb250ZXh0Ijp7ImZlYXR1cmVzIjp7ImxpdmVzdHJlYW1pbmciOnRydWUsIm91dGJvdW5kLWNhbGwiOnRydWUsInNpcC1vdXRib3VuZC1jYWxsIjpmYWxzZSwidHJhbnNjcmlwdGlvbiI6dHJ1ZSwicmVjb3JkaW5nIjp0cnVlfSwidXNlciI6eyJoaWRkZW4tZnJvbS1yZWNvcmRlciI6ZmFsc2UsIm1vZGVyYXRvciI6dHJ1ZSwibmFtZSI6InNocml5YW5zaHVyYWo1NSIsImlkIjoiZ29vZ2xlLW9hdXRoMnwxMTMzOTU5MTA5MDE2OTMwNTc0OTIiLCJhdmF0YXIiOiIiLCJlbWFpbCI6InNocml5YW5zaHVyYWo1NUBnbWFpbC5jb20ifX0sInJvb20iOiIqIn0.DbXkjlqXykinR8Xz-6XPzLs2iBQXgNN6k1w9I0JTE_aeLfZqDzqW6Am6n6v56Siik1X2Cn_Ha3HlHOwuD_FphklaJom1hrmeQwhBIc06cmkOOPy0qHINrkjzkjhnRgECwYdT3_rFPjlzB2DVFWne453FBy-FYPXF1JWHGPxTocSJKpNjsYq3P-KkeEKvYIob4hl0YOW5hFH9t0BNmT-B5iDDGA9Kzd89Nuqh1NJJp2grWeKiit3UhAHznqfani7UvxERAkXWZ7xNvJcdArZD6_OpLuuTrS5xAVmC9XkDhCIaLpn20gFreoZePV2HkznO7bSKGWFdv1NjF2Fn8aV9Eg'
        });
      };
    };

    loadJitsiMeet();

    // Cleanup function
    return () => {
      // Remove JitsiMeetExternalAPI script if unmounted
      const script = document.querySelector('script[src="https://8x8.vc/vpaas-magic-cookie-5194b8f33ea944f0840e95ae0fb2cff5/external_api.js"]');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div>
      <div id="jaas-container" style={{ height: '100vh' }} />
    </div>
  );
};

export default JitsiMeetComponent;
