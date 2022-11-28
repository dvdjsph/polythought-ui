import { Group } from "../types";
export const handleGroups = (groupsStrArr:string[]):Group[] => {
    return groupsStrArr.map(groupStr => ({id: groupStr, label:groupStr }));
};
