export const setAttributeData = (element: string, attribute: string, value: string) => {
    document.querySelector(element)?.setAttribute("data-" + attribute, value);
};