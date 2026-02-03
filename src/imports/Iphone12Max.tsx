import svgPaths from "./svg-qs511f6699";
import imgScreenChangeMe1 from "figma:asset/c68fb1d1161db183f83831fc6203f7c652b56306.png";
import { imgScreenChangeMe } from "./svg-0b66p";

function Screen() {
  return (
    <div className="absolute contents inset-[1.67%_3.48%]" data-name="Screen">
      <div className="absolute inset-[1.67%_3.48%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[923.196px_1999.415px]" data-name="Screen [CHANGE ME]" style={{ maskImage: `url('${imgScreenChangeMe}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenChangeMe1} />
      </div>
    </div>
  );
}

function Camera() {
  return (
    <div className="absolute inset-[1.81%_40.65%_97.08%_57.03%]" data-name="Camera">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.008 23.0314">
        <g id="Camera">
          <path clipRule="evenodd" d={svgPaths.pabba200} fill="var(--fill-0, white)" fillRule="evenodd" id="Oval" />
        </g>
      </svg>
    </div>
  );
}

function Speaker() {
  return (
    <div className="absolute inset-[2.16%_44.78%_97.15%_44.78%]" data-name="Speaker">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 103.536 14.3946">
        <g id="Speaker">
          <path clipRule="evenodd" d={svgPaths.p1a07a100} fill="var(--fill-0, white)" fillRule="evenodd" id="Speaker_2" />
        </g>
      </svg>
    </div>
  );
}

export default function Iphone12Max() {
  return (
    <div className="relative size-full" data-name="Iphone 12 Max">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 992.22 2068.51">
        <path d={svgPaths.p9000800} fill="var(--fill-0, #483D3D)" id="Background" />
      </svg>
      <Screen />
      <Camera />
      <Speaker />
    </div>
  );
}