const Styles = {
    boxwidth: "xl:max-w-[1280px] w-full",
    heading1: "font-sans animate-pulse  font-bold xs:text-[48px] text-[40px]  text-red-500/75 xs: leading-[76.8px]  leading-[66.8px] w-full",
    heading2: "font-sans  font-bold xs:text-[48px] text-[40px]  text-white xs: leading-[56.8px]  leading-[46.8px] w-full",
    paragraph: "font-sans font-normal text-white text-[18px] leading- [30.8px] mt-1",
    flexCenter: "flex justify-center items-center",
    flexstart: "flex justify-center items-start",
    paddingX: "sm:px-]16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-h6 px-6 sm:py-12 py-4",
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
    border: 'border border-white',
    red: 'text-red-500  animate-pulse font-bold '
}

export const layout = {
    section: `flex md:flex-row  flex-col ${Styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${Styles.paddingY}`,

    sectionImgReverse: `flex-1 flex ${Styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,

    sectionImg: `flex-1 flex ${Styles.flexCenter}
        md:ml-10 ml-0 md:mt-0 mt-10 relative`,
    sectionInfo: `flex-1 ${Styles.flexstart} flex-col`,

}
export default Styles;