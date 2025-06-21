import React from 'react';

function Footer() {
  return (
    <footer className="bg-white text-center py-4 border-t text-sm text-gray-500">
      &copy; {new Date().getFullYear()} SkillSwap. All rights reserved.
    </footer>
  );
}

export default Footer;
