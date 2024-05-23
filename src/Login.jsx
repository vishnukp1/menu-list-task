import { useLogin } from './services/useauth';
import Button from './components/Button';

function Login() {
    const { formRef, handleSubmit } = useLogin();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        handleSubmit(formData.get('email'), formData.get('password'));
    };

    return (
        <div  >
            <h2>Login</h2>
            <form className='flex flex-col gap-2 mt-4' ref={formRef} onSubmit={handleFormSubmit}>
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Password" required />
                <Button type="submit">Login</Button>
            </form>
        </div>
    );
}

export default Login;
