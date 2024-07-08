function Logo({ name }) {
  return (
    <a href="#" className={`logo ${name}__logo`}>
      <img src="public/logo.svg" alt="logo" />
    </a>
  );
}

export default Logo;
