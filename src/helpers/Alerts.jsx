import Swal from "sweetalert2";

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

export const validaFormulario = (e) => {
  e.preventDefault();
  if (
    email.toLowerCase().trim() == "" ||
    password.trim() == "" ||
    confirmPassword.trim() == ""
  ) {
    Swal.fire({
      title: "Error!",
      text: "Debes llenar todos los campos",
      icon: "error",
      confirmButtonText: "Cerrar",
    });
  } else {
    if (password === confirmPassword && password.length >= 6) {
      Swal.fire({
        title: "Success!",
        text: "Formulario enviado con éxito",
        icon: "success",
        confirmButtonText: "Cerrar",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "El password y el password confirmation deben ser iguales y superior 6 carácteres",
        icon: "error",
        confirmButtonText: "Cerrar",
      });
    }
  }
  const pattern = new RegExp(
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  );

  setEmail("");
  setPassword("");
  setConfirmPassword("");
};
