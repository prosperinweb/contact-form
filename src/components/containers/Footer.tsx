const Footer = () => {
  return (
    <footer className="mt-4 flex justify-center gap-4">
      <p>
        Built by{" "}
        <a
          className="text-green-600"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/ProsperInWeb"
        >
          ProsperInWeb
        </a>
      </p>
      <span className="text-green-600">|</span>
      <p>
        Design challenge by{" "}
        <a
          className="text-green-600"
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.frontendmentor.io"
        >
          FrontendMentor
        </a>
      </p>
    </footer>
  );
};

export default Footer;
