import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);
const Login = () => {
	const navigate = useNavigate();
	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
		validationSchema: Yup.object({
			firstName: Yup.string()
				.max(20, "Must be 20 characters or less")
				.required("Required"),
			lastName: Yup.string()
				.max(20, "Must be 20 characters or less")
				.required("Required"),
			email: Yup.string()
				.email("Invalid email address")
				.required("Required"),
			password: Yup.string().password().required("Required"),

			confirmPassword: Yup.string()
				.required("Required")
				.oneOf([Yup.ref("password"), null], "Passwords must match"),
		}),
		onSubmit: (values) => {
			navigate("/");
		},
	});

	return (
		<form onSubmit={formik.handleSubmit} className="form-login">
			<div class="form__first-name">
				<label htmlFor="firstName">First Name</label>
				<input
					id="firstName"
					type="text"
					{...formik.getFieldProps("firstName")}
				/>
				{formik.touched.firstName && formik.errors.firstName ? (
					<div className="error">{formik.errors.firstName}</div>
				) : null}
			</div>
			<div class="form__last-name">
				<label htmlFor="lastName">Last Name</label>
				<input
					id="lastName"
					type="text"
					{...formik.getFieldProps("lastName")}
				/>
				{formik.touched.lastName && formik.errors.lastName ? (
					<div className="error">{formik.errors.lastName}</div>
				) : null}
			</div>
			<div class="form__email">
				<label htmlFor="email">Email Address</label>
				<input
					id="email"
					type="email"
					{...formik.getFieldProps("email")}
				/>
				{formik.touched.email && formik.errors.email ? (
					<div className="error">{formik.errors.email}</div>
				) : null}
			</div>
			<div class="form__password">
				<label htmlFor="password">Password</label>
				<input
					id="password"
					type="password"
					{...formik.getFieldProps("password")}
				/>
				{formik.touched.password && formik.errors.password ? (
					<div className="error">{formik.errors.password}</div>
				) : null}
			</div>
			<div class="form__confirm-password">
				<label htmlFor="confirmPassword">Confirm Password</label>
				<input
					id="confirmPassword"
					type="password"
					{...formik.getFieldProps("confirmPassword")}
				/>
				{formik.touched.confirmPassword &&
				formik.errors.confirmPassword ? (
					<div className="error">{formik.errors.confirmPassword}</div>
				) : null}
			</div>
			<button type="submit" className="form__btn">
				Submit
			</button>
		</form>
	);
};

export default Login;
