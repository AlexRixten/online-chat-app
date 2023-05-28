import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db, storage } from '../../../config/firebase.ts';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { ERoutes } from '../../../emuns/routes.enum.ts';
import { MdAddPhotoAlternate } from 'react-icons/all';
import './RegisterForm.scss';

function RegisterForm() {
	const navigate = useNavigate();

	const [err, setErr] = useState(false);
	const [loading, setLoading] = useState(false);

	const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const target = event.target as HTMLFormElement;
		const displayName = (target[0] as HTMLInputElement).value;
		const email = (target[1] as HTMLInputElement).value;
		const password = (target[2] as HTMLInputElement).value;
		const file = (target[3] as HTMLInputElement).files?.[0];

		try {
			//Create user
			const res = await createUserWithEmailAndPassword(auth, email, password);

			//Create a unique image name
			const date = new Date().getTime();
			const storageRef = ref(storage, `${displayName + date}`);

			if (!file) return;

			await uploadBytesResumable(storageRef, file).then(() => {
				getDownloadURL(storageRef).then(async (downloadURL) => {
					try {
						//Update profile
						await updateProfile(res.user, {
							displayName,
							photoURL: downloadURL,
						});
						//create user on firestore
						await setDoc(doc(db, 'users', res.user.uid), {
							uid: res.user.uid,
							displayName,
							email,
							photoURL: downloadURL,
						});

						//create empty user chats on firestore
						await setDoc(doc(db, 'user-chats', res.user.uid), {});
						navigate(ERoutes.Home);
					} catch (err) {
						console.log(err);
						setErr(true);
						setLoading(false);
					}
				});
			});
		} catch (err) {
			setErr(true);
			setLoading(false);
		}
	};
	return (
		<>
			<span className="title">Register</span>
			<form onSubmit={submitHandler}>
				<input type="text" placeholder="Enter your name" />
				<input type="email" placeholder="Enter your email" />
				<input type="password" placeholder="Enter your password" />
				<input required style={{ display: 'none' }} type="file" id="file" />
				<label htmlFor="file">
					<MdAddPhotoAlternate />
					<span>Add an avatar</span>
				</label>
				<button disabled={loading}>Sign up</button>
				{loading && 'Uploading and compressing the image please wait...'}
				{err && <span>Something went wrong</span>}
			</form>
			<p>
				You do have an account? <Link to={ERoutes.SignIn}>Login</Link>
			</p>
		</>
	);
}

export default RegisterForm;
