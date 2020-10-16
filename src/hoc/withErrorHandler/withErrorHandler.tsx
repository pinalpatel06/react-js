import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

interface Props { }
interface State {
    error: any
}

const withErrorHandler = (WrappedComponent: any, axios: any) => {
    return class extends Component<Props, State> {

        reqInterceptor: any;
        resInterceptor: any;

        constructor(props: Props) {
            super(props);
        }

        // state = {
        //     error: null
        // }

        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use((req: Request) => {
                this.setState({ error: null });
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use((res: Request) => res, (error: Error) => {
                this.setState({ error: error });
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null });
        }

        render() {
            
            return (
                <Aux>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        { this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
}

export default withErrorHandler;