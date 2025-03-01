import { SpinnerIosFilled } from "@fluentui/react-icons";

export function Button({
  type = "button", //Por defecto es button
  color = "primary",
  size = "medium",
  onClick,
  children,
  disabled = false,
  loading = false,
  icon,
  iconPosition,
}) {
  // Estilos base del botón
  const baseStyles =
    "font-semibold rounded-lg transition-all duration-200 focus:outline-none flex items-center justify-center";

  // Estilos de color
  const colorStyles = {
    primary:
      "bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",
    secondary:
      "bg-gray-500 text-white hover:bg-gray-600 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50",
    danger:
      "bg-red-500 text-white hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50",
    success:
      "bg-green-500 text-white hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50",
  };

  // Estilos de tamaño
  const sizeStyles = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  // Combinar todos los estilos
  const buttonStyles = `${baseStyles} ${colorStyles[color]} ${sizeStyles[size]} ${
    disabled || loading ? "opacity-50 cursor-not-allowed" : ""
  }`;

  return (
    <button
      type={type}
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {/* Icono a la izquierda */}
      {icon && iconPosition === "left" && !loading && (
        <span className="mr-2">{icon}</span>
      )}

      {/* Spinner de carga */}
      {loading && <SpinnerIosFilled className="animate-spin mr-2" />}

      {/* Texto del botón */}
      {children}

      {/* Icono a la derecha */}
      {icon && iconPosition === "right" && !loading && (
        <span className="ml-2">{icon}</span>
      )}
    </button>
  );
}
