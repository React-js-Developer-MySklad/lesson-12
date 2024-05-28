import React, {useState} from "react";
import {LifecycleExample} from "../functional-based/lifecycle-example/lifecycle-example";
import {JSXExample} from "../jsx-example/JSXExample";
// import {SimpleExample} from "../functional-based/simple-example/SimpleExample";

import {ChildWithError} from "../error-boundary/child-with-error/ChildWtihError";
// import {SimpleExample} from "../class-based/simple-example/SimpleExample";
// import {SimpleExample} from "../functional-based/simple-example/SimpleExample";
// import SimpleExample from "../functional-based/simple-example/SimpleExample";
import {StateExample} from "../class-based/state-example/StateExample";
import {LiftingStateUpExample} from "../functional-based/lifting-state-up-example/LiftingStateUpExample";
import {ErrorBoundary} from "../error-boundary/ErrorBoundary";

// import {StateExample} from "../functional-based/state-example/StateExample";

// import {LiftingStateUpExample} from "../class-based/lifting-state-up-example/LiftingStateUpExample";

// import {PropsExample} from "../class-based/props-example/PropsExample";
// import {PropsExample} from "../functional-based/props-example/PropsExample";



export const App: React.FC = () => {
    const [state, setState]= useState(0)

    return (
        <main>
            <h1>Основы React</h1>
            {/*<SimpleExample/>*/}

            {/*<PropsExample counter={state}/>*/}
            {/*<button onClick={() => setState(state + 1)}>Parent State Change</button>*/}

            {/*<StateExample/>*/}

            {/*<LiftingStateUpExample/>*/}

            {/*<JSXExample>*/}
            {/*    <div>*/}
            {/*        <span>Children Props</span>*/}

            {/*    </div>*/}
            {/*</JSXExample>*/}

            <ErrorBoundary>
                <ChildWithError/>
            </ErrorBoundary>

        </main>

    )
}