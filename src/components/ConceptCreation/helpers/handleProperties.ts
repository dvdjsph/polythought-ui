import { Property } from "../types";
export const handleProperties = (propertiesStrArr:string[]):Property[] => {
    return propertiesStrArr.map(propertyStr => ({id: propertyStr, label:propertyStr }));
};
