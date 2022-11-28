import { Instance } from "../types";
export const handleInstances = (instancesStrArr:string[]):Instance[] => {
    console.log(instancesStrArr);
    return instancesStrArr.map(instanceStr => ({id: instanceStr, label:instanceStr, properties: []}));
};
