/// <reference types="react" />
import "./page.css";
export interface PageProps {
    user?: {};
    onLogin: () => void;
    onLogout: () => void;
    onCreateAccount: () => void;
}
declare const Page: ({}: PageProps) => JSX.Element;
export default Page;
//# sourceMappingURL=Page.d.ts.map