/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/nicolas-uruena/"
                target="_blank"
              >
                Nicolas Urueña
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nicolas-uruena/"
                target="_blank"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}
          .
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
