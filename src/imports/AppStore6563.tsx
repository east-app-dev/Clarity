import svgPaths from "./svg-85gmyejvj1";
import imgScreenChangeMe1 from "figma:asset/55d91e66d6d167ddd50e4649edb9d716e6a2cda1.png";
import { imgScreenChangeMe } from "./svg-lfpgo";

function Text() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center leading-[1.5] left-1/2 not-italic text-[#413d3d] text-center top-[2204px] tracking-[0.16px] w-[890px] whitespace-pre-wrap" data-name="Text">
      <p className="font-['Livvic:SemiBold',sans-serif] relative shrink-0 text-[150px] w-[1106px]">Daily Planner</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium min-w-full relative shrink-0 text-[65px] w-[min-content]">View your day in a percise Timeline</p>
    </div>
  );
}

function Screen() {
  return (
    <div className="absolute contents inset-[1.67%_3.48%]" data-name="Screen">
      <div className="absolute inset-[1.67%_3.48%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[890.615px_1928.853px]" data-name="Screen [CHANGE ME]" style={{ maskImage: `url('${imgScreenChangeMe}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenChangeMe1} />
      </div>
    </div>
  );
}

function Camera() {
  return (
    <div className="absolute inset-[1.81%_40.65%_97.08%_57.03%]" data-name="Camera">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.1961 22.2186">
        <g id="Camera">
          <path clipRule="evenodd" d={svgPaths.p2cc10600} fill="var(--fill-0, white)" fillRule="evenodd" id="Oval" />
        </g>
      </svg>
    </div>
  );
}

function Speaker() {
  return (
    <div className="absolute inset-[2.16%_44.78%_97.15%_44.78%]" data-name="Speaker">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 99.8821 13.8866">
        <g id="Speaker">
          <path clipRule="evenodd" d={svgPaths.p34042d00} fill="var(--fill-0, white)" fillRule="evenodd" id="Speaker_2" />
        </g>
      </svg>
    </div>
  );
}

function Iphone12Max() {
  return (
    <div className="-translate-x-1/2 absolute h-[1995.509px] left-[calc(50%-0.4px)] top-[119px] w-[957.203px]" data-name="Iphone 12 Max">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 957.203 1995.51">
        <path d={svgPaths.p510e680} fill="var(--fill-0, #483D3D)" id="Background" />
      </svg>
      <Screen />
      <Camera />
      <Speaker />
    </div>
  );
}

export default function AppStore() {
  return (
    <div className="bg-[#e7f6ff] relative size-full" data-name="app store 6.5 6.3">
      <Text />
      <Iphone12Max />
    </div>
  );
}