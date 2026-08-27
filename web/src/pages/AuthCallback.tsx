import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { Loader2 } from "lucide-react";

export const AuthCallback: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        const redirect = sessionStorage.getItem("auth_redirect") || "/portal";
        sessionStorage.removeItem("auth_redirect");
        navigate(redirect, { replace: true });
      } else {
        navigate("/", { replace: true });
      }
    });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#080c14] flex flex-col items-center justify-center text-slate-100 space-y-4">
      <Loader2 className="h-8 w-8 text-cyan-400 animate-spin" />
      <p className="text-sm font-medium text-slate-300">
        Authenticating with Google OAuth...
      </p>
    </div>
  );
};
