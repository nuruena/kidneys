/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

import Image from "next/image";

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url('/img/kidney.jpg')",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            
            <Image
              src="/img/kidney-logo.png"
              alt="Kidneys Logo"
              className="n-logo"
              width="180"
              height="150"
            />

            <h1 className="h1-seo">Kidneys</h1>
            <h3>Servicio de nefrologia.</h3>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
