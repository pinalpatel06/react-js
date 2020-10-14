import React from 'react';
import { tsPropertySignature } from '@babel/types';

const withClass = (WrappedComponent: any, className: string) => {
    return (props: any) => (
        <div className={className}>
            <WrappedComponent />
        </div>
    )
}

export default withClass;