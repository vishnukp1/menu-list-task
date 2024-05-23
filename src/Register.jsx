import { useRegister } from './services/useauth';
import InputField from './components/InputField';
import Button from './components/Button';

function Register() {
    const { formRef, handleSubmit, errors } = useRegister();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        handleSubmit(formData.get('email'), formData.get('username'), formData.get('password'));
    };

    return (
        <div className='ml-10'>
            <h2>Register</h2>
            <form ref={formRef} onSubmit={handleFormSubmit}>
            <InputField type="email" name="email" placeholder="Email" required />
                <InputField type="text" name="username" placeholder="Username" required />
                <InputField type="password" name="password" placeholder="Password"  error={errors.password} required />
                <Button type="submit">Register</Button>
            </form>
        </div>
    );
}

export default Register;
