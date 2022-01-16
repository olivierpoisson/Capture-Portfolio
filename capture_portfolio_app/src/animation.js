export const pageAnimation = {
    hidden: {
        opacity:0,
        y: 300
    },
    show: {
        opacity:1,
        y: 0,
        transition: {
            duration: 1,
            
        },
    },
    //? When the component un-renders
    exit: {
        opacity:0,
        y: 300,
        transition: {
            duration: 1,
        },
    }
}