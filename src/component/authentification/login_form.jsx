import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {TailSpin} from 'react-loader-spinner';
import {useAuth} from '../../module/auth/useAuth';
import {jwtDecode} from 'jwt-decode'; // Corrected import statement
import {getSchoolID} from '../school/service';

export default function LoginForm () {
  const {login} = useAuth ();
  const [formData, setFormData] = useState ({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState (false);
  const [error, setError] = useState ('');
  const navigate = useNavigate ();

  const gatherData = event => {
    const {name, value} = event.target;
    setFormData (prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleLogin = async event => {
    event.preventDefault ();
    setError ('');
    setLoading (true);

    try {
      await login (formData);
      const token = sessionStorage.getItem ('token');
      if (token) {
        const decodedToken = jwtDecode (token);
        console.log (decodedToken);

        switch (decodedToken.authorities) {
          case 'ADMIN':
            navigate ('/schools');
            break;
          case 'DIRECTOR':
            const schoolID = await getSchoolID (); // Assuming getSchoolID needs an email
            navigate (`/schoolDirection/${schoolID}`);
            break;
          default:
            throw new Error ('Unauthorized role');
        }
      } else {
        throw new Error ('No token found');
      }
    } catch (loginError) {
      console.error (loginError);
      setError ('Email ou mot de passe incorrect.'); // Keep the error message user-friendly
    } finally {
      setLoading (false);
    }
  };

  return (
    <div className="login-section login-section- flex">
      <form onSubmit={handleLogin} method="post">
        <h2 className="form-title mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
          Connectez-vous
        </h2>
        {error && <div className="error-message">{error}</div>}
        <div className="email">
          <div>
            <label htmlFor="email">E-Mail</label>
          </div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="gloire@gmail.com"
            onChange={gatherData}
            value={formData.email}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="password">
          <div>
            <label htmlFor="password">Mot de passe</label>
          </div>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="Mot de passe"
            onChange={gatherData}
            value={formData.password}
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <button className="create-account-button" disabled={loading}>
          {loading
            ? <div className="flex justify-center">
                <TailSpin
                  visible={true}
                  height="30"
                  width="30"
                  color="rgb(255,255 ,255)"
                  ariaLabel="tail-spin-loading"
                  radius="0.5"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            : 'Connexion'}
        </button>
      </form>
    </div>
  );
}
