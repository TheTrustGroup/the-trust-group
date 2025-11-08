"use client";

import * as React from "react";

export function ConsoleMessage() {
  React.useEffect(() => {
    const styles = [
      "color: #0066FF",
      "font-size: 16px",
      "font-weight: bold",
      "text-shadow: 0 0 5px rgba(0,102,255,0.5)",
    ].join(";");

    const message = `
%c👋 Hey there, developer!

Thanks for checking out our code. We're The Trust Group, and we build amazing things.

Interested in joining our team? Check out our careers page:
https://thetrustgroupsolutions.com/careers

Or just want to say hi? Drop us a line:
info@thetrustgroupsolutions.com

Built with ❤️ (and some AI) by The Trust Group
    `.trim();

    console.log(message, styles);
    
    // Additional fun message
    console.log(
      "%c💡 Pro tip: Try the Konami code! (↑↑↓↓←→←→BA)",
      "color: #00B8E6; font-size: 14px; font-style: italic;"
    );
  }, []);

  return null;
}

