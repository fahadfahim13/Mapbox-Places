import { ChangeEvent } from "react";

export interface Props {
    id?: string;
    name: string;
    value: string;
    type?: string;
    required?: boolean;
    label?: string;
    defaultValue?: string;
    onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
    multiline?: boolean;
    maxRows?: number;
    width?: string;
}