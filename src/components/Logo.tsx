
import { useTheme } from "@/components/ThemeProvider";

export default function Logo() {
  const { theme } = useTheme();
  
  return (
    <div className="flex items-center">
      {theme === "light" ? (
        <img 
          src="/lovable-uploads/db541bab-4280-4ed3-b55e-ae1ba756da15.png" 
          alt="Carevolution Logo" 
          className="h-8 md:h-10" 
        />
      ) : (
        <img 
          src="/lovable-uploads/81c3ca66-d030-4a8c-9705-9549d7664168.png" 
          alt="Carevolution Logo" 
          className="h-8 md:h-10" 
        />
      )}
    </div>
  );
}
