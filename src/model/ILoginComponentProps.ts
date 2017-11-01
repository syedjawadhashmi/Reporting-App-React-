import * as React from "react";

export interface ILoginCompProps extends React.Props<any> {
    email?: string;
    password?: string;
    click: (state:{ email: string; password: string }) => void;
    click2: () => void;
    Input ?: (e: any) => any;
};