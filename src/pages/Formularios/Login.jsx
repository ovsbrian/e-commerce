import  { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcryptjs';

const supabase = createClient('https://wmmawvqjmhozkczcfjro.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtbWF3dnFqbWhvemtjemNmanJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIxMjc5NjksImV4cCI6MjAwNzcwMzk2OX0.PIce2nJhEmRJ99wRSXs4o_J2hU_0Gn9QtX9P8pOnwI8');

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      console.log('Please provide email and password');
      return;
    }

    const { data, error } = await supabase
      .from('users')
      .select('password')
      .eq('email', email)
      .single();

    if (error) {
      console.error('Error logging in:', error.message);
    } else {
      if (data) {
        const storedHash = data.password;
        const passwordMatch = await bcrypt.compare(password, storedHash);

        if (passwordMatch) {
          console.log('User logged in successfully');
        } else {
          console.log('Incorrect password');
        }
      } else {
        console.log('User not found');
      }
    }
  };

  return (
    <div className='pt-20 '>
      <h2>Login</h2>
      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <div>
        <p>Aun no tienes tu cuenta en ovsbrianStore? haz clic <a className='underline' href="/register">aquí</a> para crearla 😄</p>
      </div>
    </div>
  );
}

export default Login;
