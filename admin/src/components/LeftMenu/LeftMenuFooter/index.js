/**
 *
 * LeftMenuFooter
 *
 */

import React from "react";
import Wrapper, { A } from "./Wrapper";

function LeftMenuFooter() {
  // PROJECT_TYPE is an env variable defined in the webpack config
  // eslint-disable-next-line no-undef

  return (
    <Wrapper>
      <div className="poweredBy">
        <A
          key="website"
          href="https://strapi.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rodrigo Camargo
        </A>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
