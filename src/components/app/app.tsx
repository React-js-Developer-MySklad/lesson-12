import React, {useState} from "react";
import {LifecycleExample} from "../functional-based/lifecycle-example/lifecycle-example";
import {JSXExample} from "../jsx-example/JSXExample";
import {SimpleExample} from "../functional-based/simple-example/SimpleExample";
import {ErrorBoundary} from "../error-handler/ErrorHandler";
import {ChildWithError} from "../error-handler/child-with-error/ChildWtihError";
// import {SimpleExample} from "../class-based/simple-example/SimpleExample";
// import {StateExample} from "../functional-based/state-example/StateExample";
// import {StateExample} from "../class-based/state-example/StateExample";
// import {LiftingStateUpExample} from "../class-based/lifting-state-up-example/LiftingStateUpExample";
// import { LiftingStateUpExample } from "../class-based/lifting-state-up-example/LiftingStateUpExample";
// import {PropsExample} from "../functional-based/props-example/PropsExample";
// import {PropsExample} from "../class-based/props-example/PropsExample";


export const App: React.FC = () => {
    return (
        <div>
            {/*<SimpleExample/>*/}

            {/*<PropsExample counter={12}/>*/}

            {/*<StateExample/>*/}

            {/*<LiftingStateUpExample/>*/}

            {/*<JSXExample>*/}
            {/*    <span>Children Props</span>*/}
            {/*</JSXExample>*/}

            <ErrorBoundary><ChildWithError/></ErrorBoundary>

        </div>

    )
}