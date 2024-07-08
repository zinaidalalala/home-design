function Nav({ data }) {
  const cards = data.map((item) => {
    return (
      <li className={`${item.name}__item hvr-grow`} key={item.id}>
        <a href="#" className={`${item.name}__link`}>
          {item.title}
        </a>
      </li>
    );
  });
  return (
    <nav className={data[0].name}>
      <ul className={`${data[0].name}__list`}>{cards}</ul>
    </nav>
  );
}

export default Nav;
