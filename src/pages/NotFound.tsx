
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container-section text-center max-w-md">
        <div className="glass rounded-2xl p-8 md:p-12">
          <h1 className="heading-xl mb-6 text-primary">404</h1>
          <p className="subtitle mb-8">
            Oops! We couldn't find the page you're looking for.
          </p>
          <a 
            href="/" 
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-white font-medium transition-standard focus-ring"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
