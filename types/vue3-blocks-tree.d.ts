export interface NodeContext {
    isExpanded():boolean;
    toggleExpand():void;
}

export interface PropsType {
    label: string;
    expand: string;
    children: string;
    key?:any| (() => any);
}