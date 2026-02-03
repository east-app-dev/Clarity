import svgPaths from "./svg-hvfavtdt99";
import imgScreenChangeMe1 from "figma:asset/7d85c5ab4d7888e3cd9ee78d844f7662e5a419b7.png";
import imgScreenChangeMe3 from "figma:asset/6053ae0f866ffe3a22c0c68b4db2edd44572490a.png";
import { imgScreenChangeMe, imgScreenChangeMe2 } from "./svg-ar0te";

function Screen() {
  return (
    <div className="absolute contents inset-[1.67%_3.48%]" data-name="Screen">
      <div className="absolute inset-[1.67%_3.48%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[888.565px_1975.724px]" data-name="Screen [CHANGE ME]" style={{ maskImage: `url('${imgScreenChangeMe}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenChangeMe1} />
      </div>
    </div>
  );
}

function Camera() {
  return (
    <div className="absolute inset-[1.81%_40.65%_97.08%_57.03%]" data-name="Camera">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.145 22.7585">
        <g id="Camera">
          <path clipRule="evenodd" d={svgPaths.pe7f1400} fill="var(--fill-0, white)" fillRule="evenodd" id="Oval" />
        </g>
      </svg>
    </div>
  );
}

function Speaker() {
  return (
    <div className="absolute inset-[2.16%_44.78%_97.15%_44.78%]" data-name="Speaker">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 99.6522 14.2241">
        <g id="Speaker">
          <path clipRule="evenodd" d={svgPaths.p3489f400} fill="var(--fill-0, white)" fillRule="evenodd" id="Speaker_2" />
        </g>
      </svg>
    </div>
  );
}

function Iphone12Max() {
  return (
    <div className="-translate-x-1/2 absolute h-[2044px] left-[calc(50%+563.5px)] top-[538px] w-[955px]" data-name="Iphone 12 Max">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 955 2044">
        <path d={svgPaths.p28887400} fill="var(--fill-0, #483D3D)" id="Background" />
      </svg>
      <Screen />
      <Camera />
      <Speaker />
    </div>
  );
}

function Screen1() {
  return (
    <div className="absolute contents inset-[1.67%_3.48%]" data-name="Screen">
      <div className="absolute inset-[1.67%_3.48%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[888.565px_1976.691px]" data-name="Screen [CHANGE ME]" style={{ maskImage: `url('${imgScreenChangeMe2}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenChangeMe3} />
      </div>
    </div>
  );
}

function Camera1() {
  return (
    <div className="absolute inset-[1.81%_40.65%_97.08%_57.03%]" data-name="Camera">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.145 22.7697">
        <g id="Camera">
          <path clipRule="evenodd" d={svgPaths.p33ba3880} fill="var(--fill-0, white)" fillRule="evenodd" id="Oval" />
        </g>
      </svg>
    </div>
  );
}

function Speaker1() {
  return (
    <div className="absolute inset-[2.16%_44.78%_97.15%_44.78%]" data-name="Speaker">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 99.6522 14.231">
        <g id="Speaker">
          <path clipRule="evenodd" d={svgPaths.p889b580} fill="var(--fill-0, white)" fillRule="evenodd" id="Speaker_2" />
        </g>
      </svg>
    </div>
  );
}

function Iphone12Max1() {
  return (
    <div className="-translate-x-1/2 absolute h-[2045px] left-[calc(50%+29.5px)] top-[617px] w-[955px]" data-name="Iphone 12 Max">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 955 2045">
        <path d={svgPaths.p23b8ba80} fill="var(--fill-0, #483D3D)" id="Background" />
      </svg>
      <Screen1 />
      <Camera1 />
      <Speaker1 />
    </div>
  );
}

function Text() {
  return <div className="-translate-x-1/2 absolute bottom-[73.03%] left-[calc(50%+580px)] top-[22.36%] w-[948px]" data-name="Text" />;
}

function Text1() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center leading-[1.5] left-1/2 not-italic text-[#413d3d] text-center top-[69px] tracking-[0.16px] w-[890px] whitespace-pre-wrap" data-name="Text">
      <p className="font-['Livvic:SemiBold',sans-serif] relative shrink-0 text-[150px] w-[1106px]">Features</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium min-w-full relative shrink-0 text-[65px] w-[min-content]">Built-in Functions to help specific Tasks</p>
    </div>
  );
}

export default function AppStore() {
  return (
    <div className="bg-[#e7f6ff] relative size-full" data-name="app store 6.5 6.2">
      <Iphone12Max />
      <Iphone12Max1 />
      <Text />
      <Text1 />
    </div>
  );
}