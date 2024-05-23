import { useProfile } from './services/useauth';
import Button from './components/Button';

function Profile() {
    const { profile, formRef, handleUpdate } = useProfile();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        handleUpdate(formData.get('firstName'), formData.get('lastName'), formData.get('gender'), formData.get('address'));
    };


    return (
        <div>
            <h2>Profile</h2>
            {profile ? (
                <div>
                    <p>Email: {profile.email}</p>
                    <p>Username: {profile.username}</p>
                    <form ref={formRef} onSubmit={handleFormSubmit}>
                        <div>
                            <label>First Name:</label>
                            <input type="text" name="firstName" defaultValue={profile.firstName} />
                        </div>
                        <div>
                            <label>Last Name:</label>
                            <input type="text" name="lastName" defaultValue={profile.lastName} />
                        </div>
                        <div>
                            <label>Gender:</label>
                            <input type="text" name="gender" defaultValue={profile.gender} />
                        </div>
                        <div>
                            <label>Address:</label>
                            <input type="text" name="address" defaultValue={profile.address} />
                        </div>
                        <Button type="submit">Update Button</Button>
                    </form>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Profile;
