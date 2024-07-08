import { callData } from "../data";
import CallSvg from "./CallSvg";

function Call({ name }) {
  const data = callData;
  return (
    <div className={name}>
      <CallSvg />
      <div className={`${name}__wrapper`}>
        <a className={`${name}__link`} href={data.linkHref}>
          {data.linkContent}
        </a>
        <span className="call__descr"> {data.descr} </span>
      </div>
    </div>
  );
}

export default Call;
