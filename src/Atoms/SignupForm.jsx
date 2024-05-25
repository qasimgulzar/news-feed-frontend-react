import {useAuth} from "../Providers/AuthProvider";

const SignupForm = (props) => {
    const {id, callbacks} = props;
    const auth = useAuth()
    const events = {
        onSubmit: async (e) => {
            e.preventDefault();
            const formData = {
                name: e.target[0].value,
                email: e.target[1].value,
                password: e.target[2].value,
            }

            const resp = await auth.register(formData);
            if(callbacks && callbacks.onResponse){
                callbacks.onResponse(resp)
            }
        }
    };
    return (
        <form {...events} id={id}></form>
    );
}

export default SignupForm;