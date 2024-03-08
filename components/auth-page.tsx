import {ReactNode} from "react";

const AuthPage = ({heading,children,footer}:{heading:ReactNode,children:ReactNode,footer:ReactNode}) => {
    return (
        <div className="max-w-screen-xl grid lg:grid-cols-2 mx-auto px-3 relative">
            <div className="lg:h-screen sticky lg:top-1 gap-5 prose py-3 lg:overflow-hidden">
                {heading}
                <h3>Quick find with Job MM</h3>
                <ul>
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cumque delenit
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cumque delenit
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cumque delenit
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cumque delenit
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cumque delenit
                    </li>
                </ul>
                <h3>We are just connector in client and developers</h3>
                <ul>
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cumque delenit
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cumque delenit
                    </li>
                </ul>
                {footer}
            </div>
            <div className="w-full flex flex-col min-h-full justify-center items-center">
                {children}
            </div>
        </div>
    );
};

export default AuthPage;