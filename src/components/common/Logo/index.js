// @flow
import * as React from 'react';

const Logo = () => (
  <div className="logo">
    <a href="/" className="logo-wrap">
      <svg className="logo-img" width="5" height="10" viewBox="0 0 5 10" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.0739746 0.728532L0.36501 0.0396729L4.44805 0.0396729L4.73909 0.728532L2.97265 2.54544L4.73909
            4.36235L4.73857 4.92878L2.97365 6.73758L4.73857 8.54638L4.44805 9.23577H0.36501L0.0744866 8.54638L1.83941 6.73758L0.0744866 4.92878L0.0739746 4.36235L1.84041 2.54544L0.0739746 0.728532ZM2.40653 1.96314L3.48729 0.851491L1.32577 0.851491L2.40653 1.96314ZM2.40653 3.12774L0.931632 4.64479L2.40653 6.15636L3.88143 4.64479L2.40653 3.12774ZM2.40653 7.3188L1.32819 8.42395H3.48487L2.40653 7.3188Z" />
      </svg>
      <div className="logo-text">spacemesh</div>
    </a>
  </div>
);

export default Logo;
