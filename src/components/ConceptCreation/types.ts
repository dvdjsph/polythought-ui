export interface Node {
    id: string;
    label: string;
};

export interface Property extends Node {
    group?: Group;
};

export interface Instance extends Node {
    properties?: Property[];
};

export interface Concept extends Node {
    created_by: string;
};

export interface Aspect extends Node {
    polythought?: Concept;
};

export interface Group extends Node {
    aspect?: Aspect;
};
