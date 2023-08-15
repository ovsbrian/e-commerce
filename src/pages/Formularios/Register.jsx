import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcryptjs';

const supabase = createClient('https://wmmawvqjmhozkczcfjro.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtbWF3dnFqbWhvemtjemNmanJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIxMjc5NjksImV4cCI6MjAwNzcwMzk2OX0.PIce2nJhEmRJ99wRSXs4o_J2hU_0Gn9QtX9P8pOnwI8');

function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    if (!email || !password) {
      console.log('Please provide email and password');
      return;
    }

    // Validar formato de correo electrónico
    if (!/\S+@\S+\.\S+/.test(email)) {
      console.log('Please provide a valid email address');
      return;
    }

    // Generar hash de la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    const { data, error } = await supabase.from('users').upsert([
      {
        email,
        password: hashedPassword,
      },
    ]);

    if (error) {
      console.error('Error registering user:', error.message);
    } else {
      console.log('User registered successfully:', data);
    }
  };

  return (
    <div className='pt-20'>
      <h2>Registration Form</h2>
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
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
}

export default RegistrationForm;
