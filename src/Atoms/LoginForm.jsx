import {useAuth} from "../Providers/AuthProvider";

const LoginForm = (props) => {
    const auth = useAuth();
    const {id, onError} = props;

    const events = {
        onSubmit: async (e) => {
            e.preventDefault();

            const formData = {
                email: e.target[0].value,
                password: e.target[1].value,
                rememberMe: e.target[2].checked,

            }
            console.log(formData);
            try {
                await auth.login(formData);
            } catch (e) {
                if (onError)
                    onError('Incorrect email or password!');
            }
            return false;
        }
    }
    return (
        <form id={id} {...events} ></form>
    );
}
export default LoginForm;