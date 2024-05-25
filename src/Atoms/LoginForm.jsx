import {useAuth} from "../Providers/AuthProvider";

const LoginForm = (props) => {
    const auth = useAuth();

    const events = {
        onSubmit: (e) => {
            e.preventDefault();

            const formData = {
                email: e.target[0].value,
                password: e.target[1].value,
                rememberMe: e.target[2].checked,

            }
            console.log(formData);
            auth.login(formData);
            return false;
        }
    }
    const {id} = props;
    return (
        <form id={id} {...events} ></form>
    );
}
export default LoginForm;