import React, { FormEvent, useState } from 'react';
import { Check, Lock, SignalIcon, Spline, User } from 'lucide-react';
import Link from 'next/link';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (username && password) {
      setIsLoading(true);
      
      // Simulate authentication
      setTimeout(() => {
        setIsLoading(false);
        setIsSuccess(true);
        
        setTimeout(() => {
          alert(`Bienvenido ${username}! ${rememberMe ? '(Recordar sesión activado)' : ''}`);
          setIsSuccess(false);
        }, 1000);
      }, 1500);
    } else {
      alert('Por favor completa todos los campos');
    }
  };

  return (
    <div className="shadow-xl flex items-center justify-center p-4 bg-gray-100 relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-400"></div>
      
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden z-10">
        <div className="bg-blue-900 py-6 px-8 text-center">
          <h1 className="text-3xl font-bold text-white">Bienvenido</h1>
          <p className="text-blue-300 mt-2">Ingresa tus credenciales para continuar</p>
        </div>
        
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative mb-6">
              <input 
                type="text" 
                id="username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent peer" 
                placeholder=" "
                required
              />
              <label 
                htmlFor="username" 
                className={`absolute left-3 top-3 text-gray-500 transition-all duration-300 peer-focus:-translate-y-5 peer-focus:scale-90 peer-focus:text-blue-700 ${
                  username ? '-translate-y-5 scale-90' : ''
                } bg-white px-1`}
              >
                <User className="inline mr-2" />
                Usuario
              </label>
            </div>
            
            <div className="relative mb-6">
              <input 
                type="password" 
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent peer" 
                placeholder=" "
                required
              />
              <label 
                htmlFor="password" 
                className={`absolute left-3 top-3 text-gray-500 transition-all duration-300 peer-focus:-translate-y-5 peer-focus:scale-90 peer-focus:text-blue-700 ${
                  password ? '-translate-y-5 scale-90' : ''
                } bg-white px-1`}
              >
                <Lock className="inline mr-2" />
                Contraseña
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input 
                  id="remember-me" 
                  type="checkbox" 
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-blue-700 focus:ring-blue-300 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Recordarme
                </label>
              </div>
              
              {/* <a href="#" className="text-sm text-blue-700 hover:text-blue-900">
                ¿Olvidaste tu contraseña?
              </a> */}
            </div>
            
            <button 
              type="submit" 
              className="w-full py-3 px-4 rounded-lg font-semibold shadow-md flex items-center justify-center bg-blue-700 text-white hover:bg-blue-900 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70"
              disabled={isLoading || isSuccess}
            >
              {isLoading ? (
                <>
                  <Spline className="animate-spin mr-2" /> Autenticando...
                </>
              ) : isSuccess ? (
                <>
                  <Check className="mr-2" /> ¡Bienvenido!
                </>
              ) : (
                <>
                  <SignalIcon className="mr-2" /> Iniciar Sesión
                </>
              )}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              ¿No tienes una cuenta? 
              <Link href="/auth/register" className="text-blue-700 font-medium hover:text-blue-900 ml-1">
                Regístrate
              </Link>
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[150px]"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            fill="#FFEA00"
          ></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            fill="#FFEA00"
          ></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            fill="#FFEA00"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Login;