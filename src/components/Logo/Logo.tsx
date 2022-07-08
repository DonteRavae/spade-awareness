import React, {
  useState,
  useEffect,
  forwardRef,
  MouseEventHandler,
  WheelEvent,
  ForwardedRef,
} from "react";
import Icon from "../Icons/Icons";
import LogoContainer from "./Logo.styled";

type LogoProps = {
  withText?: boolean;
  size?: "small" | "xlarge";
  handleScroll?: (event: WheelEvent) => void;
};

const Logo = forwardRef(
  (
    { withText, size, handleScroll }: LogoProps,
    ref: ForwardedRef<HTMLElement>
  ) => {
    const [sizeCnv, setSizeCnv] = useState({ height: 360, width: 450 });

    useEffect(() => {
      if (size === "xlarge") setSizeCnv({ height: 700, width: 1000 });
      else if (size === "small") setSizeCnv({ height: 80, width: 100 });
      else setSizeCnv({ height: 360, width: 450 });
    }, [size]);

    /**************/
    /* HANDLERS
    /**************
     * TODO - add 'click' event listener; redirect to home ('/')
     * 
     * 
     **************/

    const handleClick: MouseEventHandler = (event) => {
      console.log(event.currentTarget);
    };

    return (
      <LogoContainer
        className="logo"
        onClick={handleClick}
        size={size}
        ref={ref}
      >
        <Icon icon="logo" height={sizeCnv.height} width={sizeCnv.width} />
        {withText && (
          <h3>
            POST TRAUMATIC STRESS DISORDER <br /> SUICIDE | ANXIETY | DEPRESSION
            | EPILEPSY
          </h3>
        )}
      </LogoContainer>
    );
  }
);

export default Logo;
