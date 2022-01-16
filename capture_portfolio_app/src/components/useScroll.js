import { useInView } from "react-intersection-observer";
//? Control WHEN an animation starts in framer motion not
//? just when the components renders on screen
import { useAnimation } from "framer-motion";

export const useScroll = () => {
    const controls = useAnimation();
    const [element, view] = useInView({ threshold: 0.3 });
    if (view) {
        controls.start("show");
    } else {
        controls.start("hidden");
    }
    return [element, controls];
};
