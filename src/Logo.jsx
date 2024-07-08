function Logo({ name }) {
  return (
    <a href="#" className={`logo ${name}__logo`}>
      <img src="/logo.svg" alt="logo" />
    </a>
  );
}

export default Logo;
