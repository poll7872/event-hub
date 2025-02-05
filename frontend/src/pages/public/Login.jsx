import { LoginForm } from "../../components/auth/LoginForm";

export function Login() {
  return (
    <div className="flex">
      <div className="bg-blue-800 text-white bg-[url(/logo.png)] w-lg h-screen bg-no-repeat bg-top">
        <img className="mx-auto" src="/login-presentation.png" />
        <p className="w-auto p-12 font-bold relative bottom-20">
          "Conecta, aprende y crece. Bienvenido a EventHub, tu puerta a
          experiencias que inspiran."
        </p>
      </div>
      <LoginForm />
    </div>
  );
}
