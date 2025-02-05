import { RegisterForm } from "../../components/auth/RegisterForm";
import { Header } from "../../components/Header";

export function Register() {
  return (
    <>
      <Header />
      <main className="w-96 m-auto">
        <RegisterForm />
      </main>
    </>
  );
}
