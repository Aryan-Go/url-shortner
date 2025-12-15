import { useState } from 'react'
import './App.css'
import axios from "axios"
import {Header} from "../components/Header.jsx"
import {Footer} from "../components/Footer.jsx"
import {Hero} from "../components/Hero.jsx"
import {ErrorMessage} from "../components/ErrorMessage.jsx"
import {SuccessMessage} from "../components/SuccessMessage.jsx"

const App = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleShorten = async (url) => {
    if (!url.trim()) {
      setError('Please enter a valid URL');
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      console.log(url)
      const response = await axios.post("http://localhost:3000/urlShortner" , 
         {
          url: url,
        },
        {
        headers: {
          'Content-Type': 'application/json'
        }}
      )

      const data = response.data;

      if (data.status=="success") {
        setSuccess({
          message: 'URL shortened successfully!',
          shortUrl: data.received_url
        });
      } else {
        setError(data.message);
      }
    } catch (err) {
      if(err.response.data.status == "failure"){
        setError(err.response.data.message);

      }
      else{
        console.error(err);
        setError('Network error. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900">
      <Header />
      <main className="min-h-[calc(100vh-180px)] flex flex-col">
        <Hero onShorten={handleShorten} loading={loading} />
        
        {error && (
          <ErrorMessage 
            message={error} 
            onClose={() => setError(null)} 
          />
        )}
        
        {success && (
          <SuccessMessage 
            message={success.message}
            shortUrl={success.shortUrl}
            onClose={() => setSuccess(null)} 
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;