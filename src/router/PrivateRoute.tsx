import { FC } from 'react';
import { Navigate } from 'react-router-dom';

type Props = {
    children: JSX.Element
}
const PrivateRoute: FC<Props> = ({ children }) => {
    
    // eslint-disable-next-line no-constant-condition
    return true ? children : <Navigate to="/login" replace/>
}

export default PrivateRoute