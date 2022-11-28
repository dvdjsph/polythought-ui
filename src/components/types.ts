

export interface DumbNode {
    id: string;
    label: string;
    children?: Node[];
};

export interface SmartNode {
    id: string;
    elements: DumbNode[];
    properties: DumbNode[];
    categories: DumbNode[];
    concepts: DumbNode[];
}
